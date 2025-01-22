import { createContext, useState, useEffect } from "react";
import { useRouter } from "expo-router";
import { usePathname } from "expo-router";
import { showMessage } from "react-native-flash-message";
import Constants from "expo-constants";
import * as SecureStore from "expo-secure-store";
import { useAuthContext } from "../hooks/useAuthContext";
import { useSearchParams } from "expo-router/build/hooks";

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
  const [merch, setMerch] = useState([]);
  const [storeSrch, setStoreSrch] = useState("");
  const [emailVer, setEmailVer] = useState("");

  const router = useRouter();
  const { user } = useAuthContext();
  const extra = Constants.expoConfig?.extra;
  const baseURL = extra.baseURL;
  const pathname = usePathname();
  const searchParams = useSearchParams();

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
    console.log(searchParams.toString());
    const fetcher = async () => {
      try {
        if (user) {
          const response = await fetch(`${baseURL}/api/merchants`, {
            headers: {
              authorization: `Bearer ${user.token}`,
            },
          });
          const result = await response.json();

          setMerch(result);
        }
      } catch (error) {
        console.error(error.message);
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
    // mercant check
    if (Object.values(currMerch).length === 0) {
      router.push("/dashboard");
      showMessage({
        message: "Error",
        description: "You have not entered your respective store",
        type: "danger",
        icon: "auto",
        position: "top",
        duration: 4000,
      });

      return;
    }

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
          duration: 3000,
        });
        setScanned(false);
      }
    } catch (error) {
      // console.error("There was a problem with the fetch operation:", error);
      showMessage({
        message: "Error",
        description: `There was a problem with the fetch operation: ${error.message}`,
        type: "danger",
        icon: "auto",
        position: "top",
        duration: 4000,
      });
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
      setCart(result.cartData);
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

  const payType = async (type) => {
    try {
      const res = await fetch(`${baseURL}/api/pay`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          data: cart,
          merchant_id: currMerch._id,
          paymentMethod: type,
          price: cart.reduce((a, b) => a + b.price, 0),
          quantity: cart.length,
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const result = await res.json();

      setSession({
        code: result.bill.bill_code,
        method: paymentTypes.find(
          (item) => item._id === result.bill.paymentMethod
        ).paymentType,
        status: result.bill.paymentStatus,
        createdAt: result.bill.createdAt,
      });

      router.push("summary");
    } catch (error) {
      // console.error("Error occurred:", error);
      showMessage({
        message: "Error",
        description: ("Error occurred:", error),
        type: "danger",
        icon: "auto",
        position: "top",
      });
    }
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
      // console.log(err);
      showMessage({
        message: "Error",
        description: ("Error occurred:", err.message),
        type: "danger",
        icon: "auto",
        position: "top",
      });
    }
  };

  const handleSearchStore = async () => {
    const setParams = new URLSearchParams(searchParams);
    setParams.set("searchStore", storeSrch);

    // Fetch merchants or handle logic directly
    try {
      const response = await fetch(
        `${baseURL}/api/merchants?${setParams.toString()}`,
        {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        }
      );
      const result = await response.json();
      setMerch(result); // Update state directly
    } catch (error) {
      // console.error("Error fetching merchants:", error.message);
      showMessage({
        message: "Error",
        description: ("Error fetching merchants:", error.message),
        type: "danger",
        icon: "auto",
        position: "top",
        duration: 4000,
      });
    }
  };

  const handleUpdateProfile = async () => {
    try {
      const fetcher = await fetch(`${baseURL}/api/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          username: profile.username,
          email: profile.email,
          phoneNumber: profile.phoneNumber,
        }),
      });

      const res = await fetcher.json();

      if (!res.ok) {
        showMessage({
          message: "Error",
          description: `${res.error}`,
          type: "danger",
          icon: "auto",
          position: "top",
          duration: 4000,
        });
      }

      showMessage({
        message: "Success",
        description: "Profile update successful!!!",
        type: "success",
        icon: "auto",
        position: "top",
        duration: 4000,
      });
    } catch (error) {
      showMessage({
        message: "Error",
        description: ("Error updating profile:", error.message),
        type: "danger",
        icon: "auto",
        position: "top",
        duration: 4000,
      });
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
        storeSrch,
        setStoreSrch,
        handleSearchStore,
        handleUpdateProfile,
        emailVer,
        setEmailVer,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
