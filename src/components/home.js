import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Pokeball from '../pokeball.png'

class Home extends React.Component {
    state = {
        posts : []
    };
    

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({
                    posts : res.data.slice(0, 10)
                })
        });
    };

   render() {
        let {posts} = this.state,
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

    }

export default Home;