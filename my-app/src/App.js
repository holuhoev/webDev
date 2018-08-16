import React from 'react';
import './App.css';
import '../src/semantic/dist/semantic.css';
import { Header, List, Button, Container , Form} from 'semantic-ui-react';

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

function OutputList(props) {
  const items = props.items;
  const listItems = items.map((item) => <List.Item as='li' key={item.toString()}>{item}</List.Item>);

  return (
    <List as='ol'>{listItems}</List>
  );
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    alert('A name was submitted: ' + this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Name :</label>
          <input placeholder='Name' type='text' value={this.state.value} onChange={this.handleChange}></input>
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    );
  }
}

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    alert('Your favorite flavor is: ' + this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Pick your favorite flavor:</label>
          <select onChange={this.handleChange} value={this.state.value}>
            <option value="Grapefruit">Grapefruit</option>
            <option value="Lime">Lime</option>
            <option value="Coconut">Coconut</option>
            <option value="Mango">Mango</option>
          </select>
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    );
  }
}

const listItemsRaw = ['Sign up', 'User Benefits', 'Admin', 'Power User', 'Regular User'];

const ListExampleOrderedSimple = () => (
  <div className="App">
    <Toggle />
    <Header as='h2'>It is <Clock />.</Header>
    <OutputList items={listItemsRaw} />
    <NameForm />
    <FlavorForm />
  </div>
)

export default ListExampleOrderedSimple