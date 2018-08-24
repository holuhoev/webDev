import React from 'react'
import { Link, Switch, Route} from 'react-router-dom'

import PhotoGrid from './PhotoGrid'
import Single from './Single'

/* Haven't thought about a better solution rather than using a { Switch } wrapper */
const FadingSwitch = ({ ...rest }) => (
    <Switch {...rest}>
        <Route exact path="/" render={props => <PhotoGrid {...props} {...rest} />} />
        <Route path="/view/:postId" render={({ match }) => <Single {...match} {...rest} />} />
    </Switch>
)

class Main extends React.Component {
    render() {
        const props = this.props

        return (
            <div>
                <h1>
                    <Link to="/">Reduxstagram</Link>
                </h1>
                <FadingSwitch {...props} />
            </div>
        )
    }
}

export default Main