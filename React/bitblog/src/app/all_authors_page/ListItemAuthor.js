
import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";

const ListItemAuthor = (props) => {
    return (
        <li className='list-item'>
            <h3><Link to={'/authors/' + props.value.id}>{props.value.name}</Link></h3>
        </li>
    )
}

export default ListItemAuthor;