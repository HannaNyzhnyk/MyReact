import React, {useEffect, useState} from "react";

function Total({basket}) {
    const [total, setTotal] = useState(0)
    useEffect(() => {
        let totalPrice = basket.reduce((acc, basketItem) => acc +
            (basketItem.item.BasePrice * basketItem.count), 0);
        setTotal(totalPrice);
    }, [basket])

    return <tr style={{fontSize: '1.8rem'}}>
        <td colSpan={3}></td>
        <td style={{textAlign : "right"}}>Всього:</td>
        <td style={{textAlign : "right"}}>{total.toFixed(2)}</td>
        </tr>
}

export default Total;