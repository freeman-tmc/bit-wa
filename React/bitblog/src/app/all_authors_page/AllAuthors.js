import React from 'react';
import ListItemAuthor from './ListItemAuthor.js';
import links from '../../shared/data.js';
import dataLists from '../../services/UserService.js';

class AllAuthors extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            authors: []
        }
    }

    componentDidMount() {
        dataLists.getAuthors(links.usersLink, links.photosLink)
            .then(data => {
                this.setState({
                    authors: data
                })
            })
    }

    render() {
        console.log(this.state.authors);
        return (
            <div className="container">
                <h4>AUTHORS(6)</h4>
                {this.state.authors.map(el => {
                    return <ListItemAuthor value={el} key={el.id} />
                })}

            </div>
        )
    }

}

export default AllAuthors;