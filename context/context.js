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
  const [currMerch, setCurrMerch] = useState({});
  const [paymentTypes, setPaymentTypes] = useState([]);
  const [merch, setMerch] = useState([
    {
      id: "1",
      name: "Sabo market",
      address: "No 3, abc street, Yaba, Lagos.",
      lat: 6.505509539812944,
      lng: 3.3787271857951646,
    },
    {
      id: "2",
      name: "Ikeja Airport",
      address: "Mo 5 Kano street, Opebi, Lagos",
      lat: 6.573,
      lng: 3.3193,
    },
    {
      id: "3",
      name: "Maryland Mall",
      address: "No 9 Tolani street, Surulere Lagos",
      lat: 6.5674,
      lng: 3.3669,
    },
  ]);

  const router = useRouter();
  const { user } = useAuthContext();
  const extra = Constants.expoConfig?.extra;
  const baseURL = extra.baseURL;
  const pathname = usePathname();

  // path authorization
  useEffect(() => {
    if (!user) return;
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

  // cart data
  useEffect(() => {
    if (!user || !currMerch) return;
    const fetcher = async () => {
      try {
        if (user) {
          const response = await fetch(
            `${baseURL}/api/cart?merchant_id=${currMerch._id}`,
            {
              headers: {
                authorization: `Bearer ${user.token}`,
              },
            }
          );
          const result = await response.json();
          result.data && setCart(result.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetcher();
  }, [user, currMerch]);

  // order data
  useEffect(() => {
    if (!user) return;
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

  // profile data
  useEffect(() => {
    if (!user) return;
    const fetcher = async () => {
      if (user) {
        const response = await fetch(`${baseURL}/api/profile`, {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        });
        const result = await response.json();
        setProfile(result.profile[0]);
      }
    };
    fetcher();
  }, [user]);

  // get merchants
  useEffect(() => {
    if (!user) return;
    const fetcher = async () => {
      if (user) {
        const response = await fetch(`${baseURL}/api/merchants`, {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        });
        const result = await response.json();

        setMerch(result);
      }
    };
    fetcher();
  }, [user]);

  // payment types
  useEffect(() => {
    if (!Object.keys(currMerch).length > 0) return;

    const fetcher = async () => {
      try {
        if (user) {
          const response = await fetch(
            `${baseURL}/api/paymentTypes?merchant_id=${currMerch._id}`,
            {
              headers: {
                authorization: `Bearer ${user.token}`,
              },
            }
          );

          const result = await response.json();

          setPaymentTypes(result.merchantPaymentTypes);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetcher();
  }, [user, currMerch]);

  // useEffect(() => {
  //   const fetcher = async () => {
  //     try {
  //       if (user) {
  //         const response = await fetch(
  //           `${baseURL}/api/paymentTypes?merchant_id=${currMerch._id}`,
  //           {
  //             headers: {
  //               authorization: `Bearer ${user.token}`,
  //             },
  //           }
  //         );

  //         const result = await response.json();
  //         console.log(result);
  //         // setOrders(result);
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   fetcher();
  // }, [user]);

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
      setScanned(false);
    }
  };

  // revisit this function
  const cartAction = async (item) => {
    const product = cart?.find((prod) => prod.name === item);

    if (!product) {
      const response = await fetch(`${baseURL}/api/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          product_name: prod.name,
          price: prod.price,
          quantity: qty,
          product_code: prod.ean_code,
          merchant_id: currMerch._id,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        console.log(result);
      }
      setCart((prev) => [...prev, result.cartData]);
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

  // const handleClick = async (e, id) => {
  //   const product = cart.find((item) => item.id === id);
  //   const base = product.price / product.quantity;

  //   const updatedQty =
  //     e === "plus"
  //       ? product.quantity + 1
  //       : e === "minus" && product.quantity > 1
  //       ? product.quantity - 1
  //       : product.quantity;

  //   const newPrice = base + (updatedQty - 1) * base;

  //   const resp = await fetch(`${baseURL}/cart/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //       authorization: `Bearer ${user.token}`,
  //     },
  //     body: JSON.stringify({
  //       ...product,
  //       quantity: updatedQty,
  //       price: Number(newPrice.toFixed(2)), //prettier-ignore
  //     }),
  //   });

  //   await resp.json();

  //   setCart((prev) =>
  //     prev.map((item) =>
  //       item.id === product.id
  //         ? { ...product, quantity: updatedQty, price: newPrice }
  //         : item
  //     )
  //   );
  // };

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
        method: type,
        status: type === "Wallet" ? "Paid" : "Not paid",
        data: [...cart],
        merchant_id: currMerch.encryptedMerchId,
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
    const response = await fetch(
      `${baseURL}/api/cart?id=${id}&merchant_id=${currMerch._id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      }
    );

    const result = await response.json();
    setCart(result.data);
  };

  const updateCart = async (id, method) => {
    try {
      const res = await fetch(`${baseURL}/api/updateCart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          id: id,
          method: method,
          merchant_id: currMerch._id,
        }),
      });

      const result = await res.json();

      if (res.ok) {
        setCart((prev) =>
          prev.map((item) =>
            item._id === result.data._id ? result.data : item
          )
        );
      }
    } catch (err) {
      console.log(err);
    }
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
        currMerch,
        setCurrMerch,
        merch,
        setMerch,
        updateCart,
        paymentTypes,
        setPaymentTypes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
