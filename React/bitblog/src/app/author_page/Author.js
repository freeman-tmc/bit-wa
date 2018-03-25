import React from 'react';
import { Switch, Route, Redirect, Link } from "react-router-dom";
import NameInfo from './NameInfo.js';
import AddressInfo from './AddressInfo.js';
import CompanyInfo from './CompanyInfo.js';
import links from '../../shared/data.js';
import dataLists from '../../services/UserService.js';

class Author extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            author: [],
            ready: false
        }
    }

    componentDidMount() {
        dataLists.getAuthors(links.usersLink, links.photosLink)
            .then(data => {
                // console.log(data);
                // console.log(this.props.match.params.id);
                this.setState({
                    author: data.filter( el => {
                        return (el.id == this.props.match.params.id);
                    }),
                    ready: true
                })
            })
    }
    //console.log(props.match.params.id);
    render() {
        return (
            <div className="container">
                <Link to='/authors'>back</Link>
                {this.state.ready ? <div>
                <NameInfo value={this.state.author} />
                <AddressInfo value={this.state.author} />
                <CompanyInfo value={this.state.author} />
                </div> : ''}
            </div>
        )
    }
}

export default Author;