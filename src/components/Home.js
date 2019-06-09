import React, { Component } from 'react'
// v1.0
// import Axios from 'axios';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';
import {connect} from 'react-redux';


/**
 * v1.0 retrieve data via axios
 * v2.0 subsribe data from Redux store
 */
export class Home extends Component {

    // v1.0
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         posts: []
    //     }
    // }

    // v1.0
    // componentDidMount() {
    //     Axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => {
    //             console.log(res)
    //             this.setState({
    //                 posts: res.data.slice(0, 9)
    //             })
    //         })
    // }

    render() {
        // v1.0
        // const { posts } = this.state
        const { posts } = this.props
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={Pokeball} alt="A pokeball" />
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title red-text">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
                <div className="center">No posts yet</div>
            )

        return (
            <div className="container">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}


// v2.0 define a function that graps data from Redux store
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

// v2.0 connect() return a HOC, which wraps the Home component
export default connect(mapStateToProps)(Home)
