// import { ResultType } from '@remix-run/router/dist/utils';
import React from 'react'
import "./Card.css"

import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'


const Card = (props) => {
    const id = props.name;
    const name = props.name;
    const img = props.img;
    const price = props.price;
    const rate = props.rate;
    const count = props.count;

    const star = (rate) => {
        let str = "";
        rate = parseInt(rate);
        for (let i = 0; i < rate; i++) {
            str = str + "*";
        }

        return (
            <p className='rate'>{str}</p>
        )
    }

    const dispatch = useDispatch();

    return (
        <>
            <div className="card-main">
                <div className="card-wrap">
                    <img src={img} alt='washer' />
                    <div className="disc">

                        <div className="price-wrap">
                            <p className="price">${price}</p>
                            <p className='discount-price'>${parseInt(price + price % 20)}</p>
                        </div>

                        <div className="disc-title">
                            <p>{name}</p>
                        </div>
                        <div className="rating">
                            {star(rate)}
                            <p className="rating-count">{count}</p>
                        </div>
                        <div className='card-btn'>
                            <button
                                onClick={() =>
                                    dispatch(addToCart({
                                        id, name, img, price
                                    }))
                                }
                            >ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card