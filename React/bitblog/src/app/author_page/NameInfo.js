import React from 'react';
import { Switch, Route, Redirect, Link } from "react-router-dom";

const NameInfo = props => {
    console.log(props.value[0]);
    return (
        <div className="info-box">
        <img src="https://itechway.net/wp-content/uploads/2017/09/geek-boys-whatsapp-dp-1.jpg"/>
        <div className='author-info'>
            <h3>{props.value[0].name}</h3>
            <p>username: {props.value[0].username}</p>
            <p>email: {props.value[0].email}</p>
            <p>phone: {props.value[0].phone}</p>
        </div>
        </div>
    )

}

export default NameInfo;