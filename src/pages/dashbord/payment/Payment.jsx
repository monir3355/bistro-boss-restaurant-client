import React from "react";
import TitleSection from "../../share/TitleSection";
import { Helmet } from "react-helmet-async";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../../hooks/useCart";

// todo stripe key
const stripePromise = loadStripe(import.meta.env.VITE_stripe_gateway);
const Payment = () => {
  const [cart] = useCart();
  // console.log(cart);
  const totalPrice = cart?.reduce((sum, item) => item.price + sum, 0);
  const price = parseFloat(totalPrice.toFixed(2));
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Payment</title>
      </Helmet>
      <div className="mt-10">
        <TitleSection
          subHeading={"--Please Provide--"}
          heading={"Payment"}
        ></TitleSection>
      </div>
      <div className="lg:w-4/6 mx-auto">
        <Elements stripe={stripePromise}>
          <CheckoutForm cart={cart} price={price}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
