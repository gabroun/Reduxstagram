import React from 'react';
import Photo from './Photo';
const PhotoGrid = React.createClass({
    render() {
        return (
            <div className="photo-grid">
                {/*<pre>  {JSON.stringify(this.props.posts,null, ' ')} </pre>*/}
                { /*.map loops through an array
                * ... is an ES6 syntax where it will copy the object with the same name, so it will pass down all the object
                */}

                {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post}/>)}
            </div>
        )
    }
});

export default PhotoGrid;