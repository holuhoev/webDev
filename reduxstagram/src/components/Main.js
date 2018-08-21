import React from 'react'
import { Link } from 'react-router-dom'

/* {this.props.children} in populated by react-router itself.
the argument this.props passes anything from parents either to PhotoGrid or Single */
export default class Main extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    <Link to="/">Reduxstagram</Link>
                </h1>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
}