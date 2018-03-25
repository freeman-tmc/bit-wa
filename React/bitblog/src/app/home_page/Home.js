import React from 'react';
import ListItemPost from './ListItemPost.js';
import { Link } from "react-router-dom";
import dataLists from '../../services/UserService.js';
import links from '../../shared/data.js';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            posts: [] 
        };
    }

    componentDidMount() {
        dataLists.getPosts(links.postsLink)
            .then(data => {
                this.setState({
                    posts: data
                })
            });
    }


    render() {
        return (
            <div className="container" >
                <h3>POSTS</h3>
                <Link to='/posts/new' className="waves-effect waves-light btn">Create New Post</Link>
                {this.state.posts.map(el => {
                    return <ListItemPost value={el} key={el.id}/>
                })}
            </div>
        )
    }
}

export default Home;