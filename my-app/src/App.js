import React from 'react';
import './App.css';
import '../src/semantic/dist/semantic.css';
import { Header, List, Button } from 'semantic-ui-react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  // lifecycle hooks
  // this runs after output has been rendered by DOM
  componentDidMount() {
    this.TimerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.TimerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return this.state.date.toLocaleTimeString();
  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render () {
    return(
      <Button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON': 'OFF'}</Button>
    );
  }
}

const ListExampleOrderedSimple = () => (
  <div className="App">
  <Header as='h1'>Hello, world!</Header>
  <Header as='h2'>It is <Clock />.</Header>
  
  <List as='ol'>
    <List.Item as='li'>Signing Up</List.Item>
    <List.Item as='li'>User Benefits</List.Item>
    <List.Item as='li'>
      User Types
      <List.List as='ol'>
        <List.Item as='li'>Admin</List.Item>
        <List.Item as='li'>Power User</List.Item>
        <List.Item as='li'>Regular User</List.Item>
      </List.List>
    </List.Item>
    <List.Item as='li'>Semantic UI React looks neat!</List.Item>
  </List>
  <Toggle />
  </div>
)

export default ListExampleOrderedSimple