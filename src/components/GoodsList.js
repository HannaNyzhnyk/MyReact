import React, { useEffect, useState } from 'react';
import GoodsItem from "./GoodsItem";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getGoods } from './apiGoods';

function GoodsList() {
    const [goods, setGoods] = useState([]);

    useEffect(() => {
        getGoods().then(data => {
            setGoods(data);
        });
    }, [])

    return <div className={'mt-4'}>

        <Container>
            <Row>
                {goods.map(item => <GoodsItem key={item.id} item={item} />)}
            </Row>
       </Container>
    </div>
}

export default GoodsList;