import { PRODUCTS } from '../../products';
import { Product } from './product';
import './shop.css'
import React from 'react';
import title from '../../assets/title-logo.png'
import sleepingCat from '../../assets/cat-sleeping.png'
import threeDots from '../../assets/3-dots.png'
import zzz from '../../assets/zzz.png'

export const Shop = () => {
    return ( 
    <div className="shop">
        <div className="shopTitle">
            <h1>
                <img src={title}></img>
            </h1>
            <div>
                <img className="img-transparent" src={threeDots}></img>
                <img className="img-transparent" src={threeDots}></img>
                <img className="img-transparent" src={sleepingCat}></img>
                <img src={zzz}></img>
            </div>
            <div>
                <img src={threeDots}></img>
                <img src={sleepingCat}></img>
            </div>
        </div>
        <div className="products">
            {PRODUCTS.map((product) => (<Product data={product} key={product.id}/> ))}
        </div>
    </div>
    )
}