import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useCart } from "../../../utils/useCart";
import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../../../../public/img/animation.json";
import styles from "./thankYou.module.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Confetti from "react-confetti";
export const ThankYouPage: React.FC = () => {
  const [showConfeti, setShowConfeеti] = useState(true);
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
    const timer = setTimeout(() => {
      setShowConfeеti(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.wrapper}>
      {showConfeti && <Confetti />}
      <div className={styles.title}>
        <p>Thank You!</p>
        <p>
          Your order will arrive soon
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" y="0.5" width="39" height="39" stroke="" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23.2996 13.2988C22.7259 13.2988 22.158 13.4118 21.628 13.6314C21.0982 13.8509 20.6166 14.1728 20.2111 14.5785L19.9996 14.79L19.7879 14.5783C18.9688 13.7593 17.8579 13.2991 16.6996 13.2991C15.5412 13.2991 14.4303 13.7593 13.6113 14.5783C12.7922 15.3974 12.332 16.5083 12.332 17.6667C12.332 18.825 12.7922 19.9359 13.6113 20.755L19.5046 26.6483C19.778 26.9217 20.2212 26.9217 20.4945 26.6483L26.3879 20.755C26.7935 20.3495 27.1153 19.868 27.3349 19.3382C27.5544 18.8083 27.6674 18.2403 27.6674 17.6667C27.6674 17.093 27.5544 16.525 27.3349 15.9951C27.1153 15.4653 26.7936 14.9839 26.388 14.5785C25.9825 14.1728 25.501 13.8509 24.9711 13.6314C24.4412 13.4118 23.8732 13.2988 23.2996 13.2988Z"
              fill="#EB5757"
            />
          </svg>
        </p>
      </div>
      <div className={styles.animation}>
        <Player
          autoplay
          loop
          src={animation}
          style={{ width: "100%", height: "auto" }}
        />
        <Link to={"/"} className={styles.back}>
          back to home
        </Link>
      </div>
    </div>
  );
};
