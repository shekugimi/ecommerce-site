 import './cartItem.css'
 import { useDispatch } from 'react-redux'
 import {incrementQuantity, decrementQuantity, removeItem} from "../../redux/cartSlice"

function CartItem({ id, image, name, price, quantity = 0 }) {

    // const cart = useSelector((state) => state.cart)

    const dispatch = useDispatch();
 
    return (
        <div className="cartItem">
            <div className='cartItem__imgTitle'>
            <img className="cartItem__image" src={image} alt='item' />
                <p className="cartItem__title">{name}</p>
            </div>
            <div className="cartItem__info">
                <p className="cartItem__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='cartItem__incrDec'>
                    <button 
                        onClick={()=> dispatch(decrementQuantity(id))}
                    >-</button>
                    <p>{quantity}</p>
                    <button 
                        onClick={()=>dispatch(incrementQuantity(id))}
                    >+</button>
                </div>
                <button
                    onClick={()=>dispatch(removeItem(id))}
                className='cartItem__removeButton'>remove
                </button>
            </div>
        </div>
    )
}

export default CartItem