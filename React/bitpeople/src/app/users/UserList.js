import React, { Component } from 'react';


class List extends Component {

    render() {
        return (
            <ul className='collection'>
                <li 
                className={[ 'collection-item avatar', ((this.props.value.gender === 'female') ? 'female' : 'male')].join(' ')}>
                    <img src={this.props.value.photo} alt='img' className='circle'/>
                    <p>name: {this.props.value.name}</p>
                    <p><i className="material-icons">email</i>Email: {this.props.value.emailHidden}</p>
                    <p><i className="material-icons">cake</i>date of birth: {this.props.value.dob}</p>
                </li>
            </ul>
        )
    }
}

export default List;