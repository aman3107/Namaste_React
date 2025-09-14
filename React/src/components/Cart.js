import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className=" text-center p-4 m-4">
      <h1 className="font-bold text-2xl">Food Cart</h1>
      <div className="w-6/12 justify-cente m-auto p-4 border">
        <button
          className="bg-black text-white shadow-lg  p-2 m-2 rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1 className="font-bold">Your Cart is empty</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
