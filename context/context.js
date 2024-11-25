import { createContext, useState, useEffect } from "react";
import { useRouter } from "expo-router";
import { usePathname } from "expo-router";
import { showMessage } from "react-native-flash-message";
import Constants from "expo-constants";
import * as SecureStore from "expo-secure-store";
import { useAuthContext } from "../hooks/useAuthContext";

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  //  --- AUTH FIELD ---
  const [registration, setRegistration] = useState({
    username: "",
    email: "",
    phoneNo: "",
    password: "",
    confirm: "",
  });

  const [signin, setSignin] = useState({
    email: "",
    password: "",
  });

  // --- OTHER STATES ---
  const [scanned, setScanned] = useState(false);
  const [view, setView] = useState(false);
  const [pop, setPop] = useState(false);
  const [prod, setProd] = useState({});
  const [qty, setQty] = useState(1);
  const [cart, setCart] = useState([]);
  const [session, setSession] = useState({});
  const [currOrder, setCurrOrder] = useState({});
  const [orders, setOrders] = useState([]);
  const [profile, setProfile] = useState({});
  const [tokenstatus, setTokenStatus] = useState(null);

  const router = useRouter();
  const { user } = useAuthContext();
  const extra = Constants.expoConfig?.extra;
  const baseURL = extra.baseURL;
  const pathname = usePathname();

  useEffect(() => {
    const verifier = async () => {
      if (user) {
        const response = await fetch(
          `${baseURL}/api/verifyToken?${user.token}`,
          {
            headers: {
              authorization: `Bearer ${user.token}`,
            },
          }
        );
        const result = response.status;
        setTokenStatus(result);
      }
    };

    verifier();
    if (pathname.includes("/home") && user && tokenstatus === 200) {
      // console.log(user);
      router.push("/dashboard");
    }
  }, [pathname, user]);

  useEffect(() => {
    const fetcher = async () => {
      setCart([]);
      if (user) {
        const response = await fetch(`${baseURL}/api/cartData`, {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        });
        const result = await response.json();

        setCart(result);
      }
    };
    fetcher();
  }, [user]);

  useEffect(() => {
    const fetcher = async () => {
      if (user) {
        const response = await fetch(`${baseURL}/api/orders`, {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        });

        const result = await response.json();
        setOrders(result);
      }
    };

    fetcher();
  }, [user]);

  useEffect(() => {
    const fetcher = async () => {
      if (user) {
        const response = await fetch(`${baseURL}/api/profile`, {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        });
        const result = await response.json();
        setProfile(result);
      }
    };
    fetcher();
  }, [user]);

  // handler for when the barcode has been scanned
  const handleBarCodeScanned = async ({ type, data }) => {
    //  when barcode has been scanned, setScanned to true so that if scanned is true, the camera doesnt scan any barcode
    setScanned(true);
    // then open the pop modal to set the quantity of the product to be bought

    try {
      // Fetch product information based on the scanned barcode (EAN code)
      const response = await fetch(`${baseURL}/api/product?ean_code=${data}`, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      });

      // Check if the response is okay
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const productData = await response.json();

      if (productData) {
        setProd(productData);
        setPop(true);
        setScanned(true);
      } else {
        showMessage({
          message: "Error",
          description: "Product does not exist",
          type: "danger",
          icon: "auto",
          position: "top",
        });
        setScanned(false);
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const cartAction = async (item) => {
    const product = cart.find((prod) => prod.name === item);

    if (!product) {
      const response = await fetch(`${baseURL}/api/cartData`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          id: String(Math.random() * 10),
          name: prod.name,
          price: prod.price,
          quantity: qty,
          ean_code: prod.ean_code,
        }),
      });

      await response.json();

      setCart((prev) => [
        ...prev,
        {
          id: String(Math.random() * 10),
          name: prod.name,
          price: prod.price,
          quantity: qty,
          ean_code: prod.ean_code,
        },
      ]);

      setPop(false);
      setScanned(false);
      setQty(1);
    } else {
      showMessage({
        message: "Error",
        description:
          "This product is already in the cart, please scan another item.",
        type: "danger",
        icon: "auto",
        position: "top",
      });
    }
  };

  const handleClick = async (e, id) => {
    const product = cart.find((item) => item.id === id);
    const base = product.price / product.quantity;

    const updatedQty =
      e === "plus"
        ? product.quantity + 1
        : e === "minus" && product.quantity > 1
        ? product.quantity - 1
        : product.quantity;

    const newPrice = base + (updatedQty - 1) * base;

    const resp = await fetch(`${baseURL}/cart/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        ...product,
        quantity: updatedQty,
        price: Number(newPrice.toFixed(2)), //prettier-ignore
      }),
    });

    await resp.json();

    setCart((prev) =>
      prev.map((item) =>
        item.id === product.id
          ? { ...product, quantity: updatedQty, price: newPrice }
          : item
      )
    );
  };

  const payType = async (type) => {
    const alpha = String.fromCharCode(Math.round(Math.random() * 25 + 65));
    const numa = Math.round(Math.random() * 100);

    const response = await fetch(`${baseURL}/api/sessionData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        code: `${alpha}${numa}`,
        id: String(Math.round(Math.random() * 100000)),
        method: type,
        status: type === "Wallet" ? "Paid" : "Not paid",
        data: [...cart],
      }),
    });

    const orderResponse = await fetch(`${baseURL}/api/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        code: `${alpha}${numa}`,
        id: String(Math.round(Math.random() * 100000)),
        method: type,
        status: type === "Wallet" ? "Paid" : "Not paid",
        data: [...cart],
        total: cart.reduce((a, b) => a + b.price, 0),
      }),
    });

    await response.json();
    await orderResponse.json();

    setSession({
      code: `${alpha}${numa}`,
      id: String(Math.round(Math.random() * 100000)),
      method: type,
      status: type === "Wallet" ? "Paid" : "Not paid",
    });

    setOrders(orderResponse);
    router.push("summary");
  };

  const cartDelete = async (id) => {
    const response = await fetch(`${baseURL}/api/cartData/${id}`, {
      method: "DELETE",

      headers: {
        authorization: `Bearer ${user.token}`,
      },
    });

    const result = await response.json();

    setCart(cart.filter((item) => item._id !== result._id));
  };

  return (
    <AppContext.Provider
      value={{
        scanned,
        setScanned,
        view,
        setView,
        pop,
        setPop,
        prod,
        setProd,
        handleBarCodeScanned,
        cartDelete,
        cart,
        setCart,
        cart,
        cartAction,
        setCart,
        qty,
        setQty,
        handleClick,
        payType,
        session,
        setSession,
        orders,
        setOrders,
        currOrder,
        setCurrOrder,
        registration,
        setRegistration,
        signin,
        setSignin,
        profile,
        setProfile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
