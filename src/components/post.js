import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

let url = 'https://jsonplaceholder.typicode.com/posts';

class Post extends React.Component {
    
    state = {
        post : null
    };

    componentDidMount() {
        let {post_id} = this.props.match.params;
        axios.get(`${url}/${post_id}`)
            .then(post => {
                this.setState({
                    post : post.data
                })
            });
    };


    render() {
        let {post} = this.state,
            PostItem = post !== null ? (
                <div>
                    <div className="card-content">
                        <Link to={'/' + post.id}>
                            <span className="card-title">
                                {post.title}
                            </span>
                        </Link>
                        <p>{post.body}</p>
                    </div>
                </div>
            ) : 
            (
                <div className="container">
                    <h3>Loading post...</h3>
                </div>
            );

        return (
            <div className="container">
                {PostItem}
            </div>
        );
           
    }
};

export default Post;