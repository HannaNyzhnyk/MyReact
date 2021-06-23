import { Card, Col, Table, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faShoppingCart, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function GoodsItem({item, addToBasket, RemoveFromBasket, basket}) {
    return <Col md={3} className={'mb-4'}>
        <Card>
             <div style={{width:'100%', height:'150px', position:"relative"}}><Card.Img variant="top" src={`https://metalvis.ua/ProdImg/${item.SmallFotoFileName}`} style={{ position:"absolute", maxWidth:'90%', maxHeight:'90%', objectFit:"contain", top:"50%", left:"50%",transform:"translate(-50%,-50%)"}} />
            </div>
            <Card.Body>
                <Card.Title>{item.Name}</Card.Title>
                    {item.id}
                    <div>Ариткул:<span style={{ fontWeight: 'bold', marginLeft:"10px" }}>{item.Article}</span></div>
                    <div>Категорія:<span style={{ fontWeight: 'bold', marginLeft:"10px" }}>{item.CategoryName}</span></div>
                    <div>Ціна: <span style={{ fontWeight: 'bold' }}>{item.BasePrice}</span></div>
                    <div>Категорія: {item.CategoryName}</div>
                    <div className={'mt-4'} style={{ fontWeight: 'bold' }}>Характеристики</div>
                    <Table>
                        <tbody>
                            {item.GPropValues.map(prop => <tr key={prop.TypeID} prop={prop}><td>{prop.Name}</td><td>{prop.Values}</td></tr>)}
                        </tbody>
                    </Table>
                    <div className="text-center">
                    {basket.filter(el => el.id === item.id).length ?
                    <Button variant="outline-warning"
                            onClick={() => RemoveFromBasket(item.id)}>
                        <FontAwesomeIcon className={"mr-2 red"} icon={faTrashAlt} />
                        Видалити</Button> :

                    <Button variant="success"
                            onClick={() => addToBasket(item.id)}>
                        <FontAwesomeIcon className={"mr-2"} icon={faShoppingCart} />
                        Купити</Button>}
                    </div>
            </Card.Body>
        </Card></Col>;
}

export default GoodsItem;