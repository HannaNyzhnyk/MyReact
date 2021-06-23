import React, {useContext} from "react";
import { Button } from "react-bootstrap";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Total from "./Total";
import {Link} from "react-router-dom";
import {PageContext} from "./ContextExample";

function Basket({ basket, RemoveFromBasket, changeQuantity}) {
    const {location, setLocation} = useContext(PageContext);
    return <div className={'basket-box'}>
        <span className={'basketTitle'}>Кошик:</span>
        <table>
            <tbody>
                {basket.map(basketItem => 
                <tr key={basketItem.id}>
                    <td>{basketItem.item.Name}</td>
                    <td><input className={'form-control text-right'} type={"number"} min={1} 
                    defaultValue={basketItem.count} style={{ maxWidth: "80px" }} 
                    onChange={e => changeQuantity(basketItem.id, e.target.value)}/>
                    </td>
                    <td className={'text-right'}>{basketItem.item.BasePrice.toFixed(2)}</td>
                    <td className={'text-right'}>{basketItem.item.BasePrice * basketItem.count}</td>
                    <td className={'text-center'}>
                        <Button variant="link" className={'m-0'} onClick={() => RemoveFromBasket(basketItem.id)}> <FontAwesomeIcon className={"red"} icon={faTrashAlt} /></Button></td>
                </tr>
                )}
               <Total basket={basket}/>
            </tbody>           
        </table>
        <div className={'mt-3 mb-3'}> 
            <input type={'text'} defaultValue={location.country}
               className={'form-control mb-2'}
               onChange={e => setLocation({...location, country: e.target.value})}/>
               <input type={'text'} defaultValue={location.region}
               className={'form-control'}
               onChange={e => setLocation({...location, region: e.target.value})}/>
        </div>
       
        <Link to={'/confirmation'}><Button>Підтвердити</Button></Link>
    </div>
}

export default Basket;