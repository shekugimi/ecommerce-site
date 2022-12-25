import React, { useState, useEffect } from 'react'
import "./Home.css"
import Card from './Card';

const Home = () => {

  const [posts, setPosts] = useState([]);
  const fetchProduct = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products"
    );

    const data = await response.json();
    setPosts(data);

  }
  useEffect(() => {
    fetchProduct()
  }, []);


  const [all, setAll] = useState(true);
  const [men, setMen] = useState(false);
  const [women, setWomen] = useState(false);
  const [jewelery, setJewelery] = useState(false);
  const [electronics, setElectronics] = useState(false);

  const allPro = () => {
    setAll(true);
    setWomen(false);
    setJewelery(false);
    setElectronics(false);
    setMen(false);
  }

  const menwear = () => {
    setAll(false);
    setWomen(false);
    setJewelery(false);
    setElectronics(false);
    setMen(true);
  }
  const womenwear = () => {
    setAll(false);
    setWomen(true);
    setJewelery(false);
    setElectronics(false);
    setMen(false);
  }
  const jewels = () => {
    setAll(false);
    setWomen(false);
    setJewelery(true);
    setElectronics(false);
    setMen(false);
  }
  const electic = () => {
    setAll(false);
    setWomen(false);
    setJewelery(false);
    setElectronics(true);
    setMen(false);
  }

  const show = (item) => {
    if (all)
      return <Card name={item.title} img={item.image} price={item.price} discountprice={item.price + item.price % 33} rate={item.rating.rate} count={item.rating.count} />;
    if (men) {
      if (item.category === "men's clothing") {
        return <Card name={item.title} img={item.image} price={item.price} discountprice={item.price + item.price % 33} rate={item.rating.rate} count={item.rating.count} />;
      }
    }
    if (women) {
      if (item.category === "women's clothing") {
        return <Card name={item.title} img={item.image} price={item.price} discountprice={item.price + item.price % 33} rate={item.rating.rate} count={item.rating.count} />;
      }
    }
    if (jewelery) {
      if (item.category === "jewelery") {
        return <Card name={item.title} img={item.image} price={item.price} discountprice={item.price + item.price % 33} rate={item.rating.rate} count={item.rating.count} />;
      }
    }
    if (electronics) {
      if (item.category === "electronics") {
        return <Card name={item.title} img={item.image} price={item.price} discountprice={item.price + item.price % 33} rate={item.rating.rate} count={item.rating.count} />;
      }
    }
  }

  return (
    <>
      <div className="product-category">
        <button className='cat-btn' onClick={allPro}>All</button>
        <button className='cat-btn' onClick={menwear}>Men's wear</button>
        <button className='cat-btn' onClick={womenwear}>Women's wear</button>
        <button className='cat-btn' onClick={jewels}>Jewelery</button>
        <button className='cat-btn' onClick={electic}>Electronics</button>
      </div>

      <div className='product-main'>
        {
          posts.map((item) => show(item))
        }
      </div>

    </>

  )
}

export default Home