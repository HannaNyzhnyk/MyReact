import React, { useEffect, useState } from 'react';
import GoodsItem from "./GoodsItem";
import Basket from "./Basket";
import {Container, Row, } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getGoods } from './apiGoods';

function GoodsList() {
    const [goods, setGoods] = useState([]);
    const [basket, setBasket] = useState([]);

    const addToBasket = id =>{
        let itemToAdd = goods.filter(item => item.id === id)[0];
        setBasket([...basket, {item:itemToAdd, id, count:1}])
        debugger;
    }

    const RemoveFromBasket = id =>{
        setBasket(basket.filter(BasketItem => BasketItem.id !==id)) 
    }

    useEffect(() => {
        getGoods().then(data => {
            setGoods(data);
        });
    }, [])

    return <div className={'mt-4'}>
        {basket.length ? <Basket basket={basket} RemoveFromBasket={RemoveFromBasket}/> : ''}
        
        <Container>
            <Row>
                {goods.map(item => <GoodsItem key={item.id} item={item} basket={basket} addToBasket={addToBasket} RemoveFromBasket={RemoveFromBasket}/>)}
            </Row>
        </Container>
    </div>
}

export default GoodsList;