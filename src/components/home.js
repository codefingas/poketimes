import React from 'react';
import {Link} from 'react-router-dom';
import Pokeball from '../pokeball.png'
import {connect} from 'react-redux';

class Home extends React.Component {

   render() {
       console.log("CONNECTED", this.props);
        let {posts} = this.props,
            PostList = posts.length ? (posts.map(post => {
                return(
                    <div className="post card" key={post.id}>
                        <img src={Pokeball} alt="A Poke ball"/>
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title red-text">
                                    {post.title}
                                </span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
            ) : (<div className="center">No post yet</div>);

            return (
                <div className="container home">
                    <h4 className="center">
                        Home
                    </h4>
                    {PostList}
                </div>
            );
        };

    };


const MapStateToProps = (state) => {
    return {
        posts : state.posts
    }
}

export default connect(MapStateToProps)(Home);