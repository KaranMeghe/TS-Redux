import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeItem, RootState } from "../redux/store";

export default function CartItems() {
  const dispatch = useDispatch()
  const cartItems = useSelector((store:RootState) => store.cart.items)

  interface ITEM {
    id: string;
    title: string;
    price: number;
  quantity: number;
  }

  const handleRemoveFromCart = (item: string) => {
    dispatch(removeItem(item))
  }

  const handleAddToCart = (item:ITEM) => {
    dispatch(addToCart(item))
  }

  const totalPrice = cartItems.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity
  }, 0);

  const formattedTotalPrice = totalPrice.toFixed(2);

  return (
    <div id="cart">
   { !cartItems && <p>No items in cart!</p>}
      { cartItems && <ul id="cart-items">
          {cartItems.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.title}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => handleRemoveFromCart(item.id)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleAddToCart(item)}>+</button>
                </div>
              </li>
            );
          })}
        </ul>}

      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
