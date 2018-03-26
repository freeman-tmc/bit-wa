import React from 'react';
import { Link } from "react-router-dom";
import dataLists from '../services/UserService.js';
import links from '../shared/data.js';


class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            authors: {}
        }
    }

    componentDidMount() {
        dataLists.getPosts(links.postsLink)
            .then(data => {
                console.log(this.props.match.params.id);
                
                this.setState({
                    posts: data,
                    singlePost: data.filter(el => {
                        return el.id == this.props.match.params.id
                    }),
                    postAuthorId: singlePost.userId
                })
            });
        dataLists.getAuthors(links.usersLink, links.photosLink)
            .then(data => {
                this.setState({
                    authors: data,
                    
                })
            });
    }

    render() {
        return (
            <div className="container">
                <h1>Post title 1</h1>
                <Link to='/authors/:name'>{this.state.authors.name}</Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus obcaecati inventore enim debitis vel, dolore est itaque velit vero quisquam ea quasi amet, eos unde, pariatur perferendis. Ducimus accusantium laboriosam odio veniam enim, error officiis totam nesciunt facere ipsum minus ex distinctio, id quasi consequuntur eum corporis itaque dolorem ad eveniet? Ducimus ipsam quia non culpa fuga. Praesentium, ea! Vel voluptate, placeat voluptatibus nobis odit maiores eum non harum, recusandae aut libero? Consectetur, consequuntur corporis? Sit architecto fuga aperiam voluptates quaerat reiciendis voluptatem doloribus vitae officiis, labore expedita cumque eos vero, numquam eius, error nostrum veniam impedit repellendus voluptatibus nam!</p>
                <h4>3 more posts</h4>
                <ul>
                {this.state.posts.filter(el => {
                    return el.userId == this.state.;
                }).map(el => {
                    console.log(el);
                    
                    return <li><Link to={'/posts/' + el.id}>Title 10</Link></li>
                })}
                </ul>
                
                
            </div>
        )
    }
}

export default Post;