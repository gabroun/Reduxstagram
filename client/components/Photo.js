import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Photo = React.createClass({
    render() {
        const {i, post, comments} = this.props;
        return(
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`/view/${post.code}`}>
                       <img src={post.display_src}  alt={post.caption} className="grid-photo"/>
                    </Link>

                    <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                        <span key={post.likes} className="likes-heart">{post.likes}</span>
                    </CSSTransitionGroup>

                    <figcaption>
                        <p>{post.caption}</p>
                        <div className="control-buttons">
                            {/*pass an argument to a function onClick, you could use bind and pass null and the first parameter for the second
                            this way it dispatch the action*/}
                            <button onClick={this.props.increment.bind(null, i)} className="likes">
                                &hearts; {post.likes}
                            </button>
                            <Link className="button" to={`view/${post.code}`}>
                                <span className="comment-count">
                                    <span className="speech-bubble"></span>
                                    {comments[post.code] ? comments[post.code].length : 0}
                                </span>
                            </Link>
                        </div>
                    </figcaption>
                </div>
            </figure>


        );
    }
});

export default Photo;