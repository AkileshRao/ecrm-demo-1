import { useEffect } from "react";
import { useProductStore } from "@/store/productStore";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const { clearCart } = useProductStore();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center space-y-4">
      <img
        src="https://media.tenor.com/x8v1oNUOmg4AAAAd/check-mark-verified.gif"
        alt="Success"
        className="w-40 h-40 rounded-lg"
      />
      <h1 className="text-2xl font-bold">Purchase Successful!</h1>
      <p>Thanks for shopping with us. You can continue adding more items.</p>
      <Link to="/">
        <Button className="cursor-pointer font-bold">Back to Store</Button>
      </Link>
    </div>
  );
};

export default CheckoutPage;
