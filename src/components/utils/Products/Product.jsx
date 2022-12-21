import React, { useState } from 'react'
import "./Product.css"
import Card from "./Card/Card"


class Product extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    Dataisloaded: true
                });
            })
    }

    render() {
        const { DataisLoaded, items } = this.state;
        // console.log(items);
        if (DataisLoaded)
            return <div>
                <h1>Loading...</h1>
            </div>

        return (
            <>
                {/* 
                <nav className='product-nav'>
                    <button className='product-cat-button' onClick={all}>All</button>
                    <button className='product-cat-button' onClick={menClothing}>Men's Clothing</button>
                    <button className='product-cat-button' onClick={jewelery}>Jewelery</button>
                    <button className='product-cat-button' onClick={womenClothing}>Women's Clothing</button>
                    <button className='product-cat-button' onClick={electronic}>Electronic</button>
                </nav> */}
                <div className='product-main'>
                    {
                        items.map((item) => (

                            <Card name={item.title} img={item.image} price={item.price} discount-price={item.price + item.price % 33} rate={item.rating.rate} count={item.rating.count} />

                        ))
                    }
                </div>
            </>

        );
    }
}

export default Product