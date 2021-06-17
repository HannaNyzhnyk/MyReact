import React, { useRef } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';


function GoodsItem({ item }) {
    return <Col md={4}>
        <Card>
                <div style={{width:'100%', height:'150px', position:"relative"}}><Card.Img variant="top" src={`https://metalvis.ua/ProdImg/${item.SmallFotoFileName}`} style={{ position:"absolute", maxWidth:'90%', maxHeight:'90%', objectFit:"contain", top:"50%", left:"50%",transform:"translate(-50%,-50%)"}} />
            </div>
            <Card.Body>
                <Card.Title>{item.Name}</Card.Title>
                <Card.Text>
                    <div>Ариткул:<span style={{ fontWeight: 'bold', marginLeft:"10px" }}>{item.Article}</span></div>
                    <div>Категорія:<span style={{ fontWeight: 'bold', marginLeft:"10px" }}>{item.CategoryName}</span></div>
                    <div>Ціна: <span style={{ fontWeight: 'bold' }}>{item.BasePrise}</span></div>
                    <div>Категорія: {item.CategoryName}</div>
                    <div className={'mt-4'} style={{ fontWeight: 'bold' }}>Характеристики</div>
                    <Table>
                        <tbody>
                            {item.GPropValues.map(prop => <tr><td>{prop.Name}</td><td>{prop.Values}</td></tr>)}
                        </tbody>
                    </Table>
                </Card.Text>
            </Card.Body>
        </Card></Col>;
}

export default GoodsItem;