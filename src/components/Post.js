import React, { Component } from 'react'
// v1.0
// import Axios from 'axios';
import { connect } from 'react-redux';

/**
 * v1.0 retrieve data via axios
 * v2.0 subsribe data from Redux store
 */
export class Post extends Component {
    // v1.0
    // constructor(props) {
    //     super(props)

    //     this.props = {
    //         post: null
    //     }
    // }

    // v1.0
    // componentDidMount() {
    //     // derive from route information
    //     let id = this.props.match.params.post_id
    //     Axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //         .then(res => {
    //             this.setprops({
    //                 post: res.data
    //             })
    //             console.log(res)
    //         })
    // }

    handleClick = () => {
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/')
    }

    render() {
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete Post
                </button>
                </div>
            </div>
        ) : (
                <div className="center">Loading post...</div>
            )
        return (
            <div className="container">
                {post}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id == id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch({ type: "DELETE_POST", id: id }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
