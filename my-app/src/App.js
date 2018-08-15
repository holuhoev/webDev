import React from 'react';
import './App.css';
import '../src/semantic/dist/semantic.css';
import { Header, List, Button, Container } from 'semantic-ui-react';

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
    this.handleGoodClick = this.handleGoodClick.bind(this);
    this.handleEvilClick = this.handleEvilClick.bind(this);
    this.state = {isToggleOn: false};
  }

  handleGoodClick() {
    this.setState({isToggleOn: true});
  }

  handleEvilClick() {
    this.setState({isToggleOn: false});
  }

  render() {
    const isToggleOn = this.state.isToggleOn;
    let button;

    if (isToggleOn) {
      button = <EvilButton onClick={this.handleEvilClick} />;
    } else {
      button = <GoodButton onClick={this.handleGoodClick} />;
    }

    return (
      <Container>
        <InteractiveHeader isToggleOn={isToggleOn} />
        {button}
      </Container>
    );
  }
}

function EvilHeader(props) {
  return <Header as='h1'>I just want to watch the world burn!</Header>;
}

function GoodHeader(props) {
  return <Header as='h1'>Hello, world!</Header>;
}

function InteractiveHeader(props) {
  const isToggleOn = props.isToggleOn;
  if (isToggleOn) {
    return <EvilHeader />;
  }
  return <GoodHeader />;
}

function GoodButton(props) {
  return (
    <Button onClick={props.onClick}>
      Good
    </Button>
  );
}

function EvilButton(props) {
  return (
    <Button onClick={props.onClick}>
      Evil
    </Button>
  );
}

const ListExampleOrderedSimple = () => (
  <div className="App">
  <Toggle />
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
  </div>
)

export default ListExampleOrderedSimple