import React from 'react';
import { Button } from "react-bootstrap";
import { faShoppingCart, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Basket({ basket, RemoveFromBasket}) {
    return <div className={'basket-box'}>
        <span className={'basketTitle'}>Кошик:</span>
        <table>
            <tbody>
                {basket.map(basketItem => <tr key={basketItem.id}>
                    <td>{basketItem.item.Name}</td>
                    <td className={'text-left'}>
                        <Button variant="warning" onClick={() => RemoveFromBasket(basketItem.id)}> <FontAwesomeIcon className={"mr-2 red"} icon={faTrashAlt} />Видалити</Button></td>
                </tr>)}
            </tbody>           
        </table>
    </div>
}

export default Basket;