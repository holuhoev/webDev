import React from 'react';
import './page-default.css';
import '../src/semantic/dist/semantic.css';
import { Menu, Sticky } from 'semantic-ui-react';

class MenuHeaderSticky extends React.Component {
  constructor(props) {
    super(props);

    this.state = {activeItem: ''};
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleOnClick(e, { name }) {
    this.setState(
      {activeItem: name}
    );
  }

  handleClickOutside(e) {
    if (this.wrapperRef && !this.wrapperRef.contains(e.target.value)) {
      alert("You clicked outside of me!");
    }
  }

  render() {
    const activeItem = this.state.activeItem;

    return(
      <Sticky>
        <Menu>
          <Menu.Item header>Logo Placeholder</Menu.Item>
          <Menu.Item
            name='placeHolder1'
            active={activeItem === 'placeHolder1'}
            onClick={this.handleOnClick}
            ref={this.setWrapperRef}
          />
          <Menu.Item
            name='placeHolder2'
            active={activeItem === 'placeHolder2'}
            onClick={this.handleOnClick}
          />
          <Menu.Item
            name='placeHolder3'
            active={activeItem === 'placeHolder3'}
            onClick={this.handleOnClick}
          />
          
          <Menu.Item
            name='placeHolder4'
            active={activeItem === 'placeHolder4'}
            onClick={this.handleOnClick}
          />
          <Menu.Item
            position='right'
            name='placeHolder5'
            active={activeItem === 'placeHolder5'}
            onClick={this.handleOnClick}
          />
        </Menu>
        
      </Sticky>
    );
  }
}

class OutsideDisableState extends React.Component {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  setWrapperRef(node) {
    this.setWrapperRef = node;
  }

  handleClickOutside(e) {
    if (this.setWrapperRef && !this.setWrapperRef.contains(e.target)) {
      
    }
  }

  render() {
    return (
      <div ref={this.setWrapperRef}>{this.props.children}></div>
    )
  }
}

const PageDefault = () => (
  <div className="container-wrapper">
    <MenuHeaderSticky />
    <div>
      <p>blah-blah</p>
    </div>
  </div>
)

export default PageDefault