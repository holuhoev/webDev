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

function BoilingVerdict(props) {
  if (props.celcius >= 100) {
    return (
      <p>The water would boil!</p>
    )
  } else {
    return (
      <p>The water would not boil!</p>
    )
  }
}

function ToCelcius(fahrenheit) {
  return ((fahrenheit - 32) * 5 / 9);
}

function ToFahrenheit(celcius) {
  return ((celcius * 9 / 5) + 32);
}

function TryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }

  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  
  return rounded.toString();
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    /* 
    this.props.onTemperatureChange is given by lifting up from Calculator;
    before we had this.setState({temperature: e.target.value}).
    */
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    /* 
    this.props.temperature is given by lifting up from Calculator;
    it has read-only mode so the class TemperatureInput has no control over it.
    */
    const temperature = this.props.temperature; 
    const scale = this.props.scale;

    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}: </legend>
        <input value={temperature} onChange={this.handleChange}></input>
      </fieldset>
    );
  }
}

const scaleNames = {
  c: 'celcius',
  f: 'fahrenheit'
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelciusChange = this.handleCelciusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }

  handleCelciusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render () {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celcius = scale === 'f' ? TryConvert(temperature, ToCelcius) : temperature;
    const fahrenheit = scale === 'c' ? TryConvert(temperature, ToFahrenheit) : temperature; 


    return (
      <div>
        <TemperatureInput scale='c' temperature={celcius} onTemperatureChange={this.handleCelciusChange} />
        <TemperatureInput scale='f' temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict celcius={parseFloat(celcius)} />
      </div>
    );
  }
}

function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  );
}

// FancyBorder-blue should be added in .css.
function WelcomeDialog() {
  return (
    <FancyBorder color='blue'>
      <Header as='h1' className='Dialog-title'>Welcome</Header>
      <p className='Dialog-message'>Thank you for visiting our spacecraft!</p>
    </FancyBorder>
  );
}

class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ? product.name :
    <span style={{color: 'red'}}>
      {product.name}
    </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockyOnly;
    
    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow>
            category={product.category}
            key={product.category}
          </ProductCategoryRow>
        );
      }
      rows.push (
        <ProductRow>
          product={product}
          key={product.name}
        </ProductRow>
      );
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }

  render() {
    return(
      <form>
        <input
        type='text'
        placeholder='Search...'
        value={this.props.filterText}
        onChange={this.handleFilterTextChange}>
        </input>
        <p>
          <input
          type='checkbox'
          checked={this.props.inStockOnly}
          onChange={this.handleInStockChange}>
          </input>
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    });
  }

  render() {
    return (
      <div>
        <SearchBar
        filterText={this.state.filterText}
        inStockOnly={this.state.inStockOnly}
        onFilterTextChange={this.handleFilterTextChange}
        onInStockChange = {this.handleInStockChange}
        />
        <ProductTable
        products={this.props.products}
        filterText={this.state.filterText}
        inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

const listItemsRaw = ['Sign up', 'User Benefits', 'Admin', 'Power User', 'Regular User'];

const ListExampleOrderedSimple = () => (
  <div className="App">
    <Toggle />
    <Header as='h2'>It is <Clock />.</Header>
    <WelcomeDialog />
    <OutputList items={listItemsRaw} />
    <NameForm />
    <FlavorForm />
    <Calculator />
    <FilterableProductTable products={PRODUCTS} />
  </div>
)

export default ListExampleOrderedSimple