import React from "react";
import {INCREASE, DECREASE, TOGGLE_AMOUNT, removeItem} from "../types"
import {connect, useDispatch} from "react-redux"
const CartItem = ({ img, title, price, amount, remove, increase, decrease, toggle, id }) => {

  const removeOnChange = useDispatch()


  return (
    <div className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={() => removeOnChange(removeItem(id))}>remove</button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={() => toggle("increase")} >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button className="amount-btn"  onClick={() => {
          amount === 1 ? removeOnChange(removeItem(id)) : toggle("decrease")
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch, ownPross) => {
  const {id , amount} = ownPross
  return {
  remove: () => dispatch(removeItem(id)),
  increase: () => dispatch({type: INCREASE, payload:{id, amount}}),
  decrease: () => dispatch({type: DECREASE, payload:{id, amount}}),
  toggle: (toggle) => dispatch({type: TOGGLE_AMOUNT, payload:{id, toggle}}),
  }
}
export default connect(null, mapDispatchToProps)(CartItem);
