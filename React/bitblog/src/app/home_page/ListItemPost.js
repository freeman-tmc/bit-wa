import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";

const ListItemPost = (props) => {
    return (
        <li className='list-item'>
            <h3><Link to='/posts/:name'>{props.value.title}</Link></h3>
            <p>{props.value.comment}</p>
        </li>
    )
}

export default ListItemPost;