import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {deletePost} from '../actions/PostAction';

class Post extends React.Component {
    handleClick = () => {
        let {deletePost, post, history} = this.props;
            deletePost(post.id);
            history.push('/');
    };

    render() {
        let {post} = this.props,
            PostItem = post ? (
                <div>
                    <div className="card-content">
                        <Link to={'/' + post.id}>
                            <span className="card-title">
                                {post.title}
                            </span>
                        </Link>
                        <p>{post.body}</p>
                    </div>
                    <div className="center">
                        <button className="grey btn btn-large" onClick={() => {this.handleClick(post.d)}}>
                            Delete
                        </button>
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

const MapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post : state.posts.find(post => post.id === Number(id))
    };
};

const MapdispatchToProps = (dispatch) => {
    return {
        deletePost : (id) => {dispatch(deletePost(id))}
    }
}

export default connect(MapStateToProps, MapdispatchToProps)(Post);