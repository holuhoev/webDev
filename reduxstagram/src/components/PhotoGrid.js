import React from 'react'
import Photo from './Photo'

export default class PhotoGrid extends React.Component {
    render() {
        return (
            <div className="photo-grid">
                {this.props.posts.map((post, index) => <Photo {...this.props} key={index} i={index} post={post} />)}
            </div>
        )
    }
}

