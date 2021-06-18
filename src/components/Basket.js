import React from 'react';
import { Button } from "react-bootstrap";

function Basket({ basket, RemoveFromBasket}) {
    return <div className={'basket-box'}>
        <span className={'basketTitle'}>Кошик:</span>
        <table>
            <tbody>
                {basket.map(basketItem => <tr key={basketItem.id}>
                    <td>{basketItem.item.Name}</td>
                    <td className={'text-left'}><Button variant="warning" onClick={() => RemoveFromBasket(basketItem.id)}> Видалити</Button></td>
                </tr>)}
            </tbody>           
        </table>
    </div>
}

export default Basket;