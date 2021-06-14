import React from "react";


function ButtonTable({user}) {
    const ShowUserInfo = () =>{
        console.log(user.name + " " + user.email)
    }
    return <button onClick={ShowUserInfo}>show in console</button>
}

export default ButtonTable;