import React from 'react';
import './page-default.css';
import '../src/semantic/dist/semantic.css';
import { Menu, Sticky } from 'semantic-ui-react';

class MenuHeaderSticky extends React.Component {
  constructor(props) {
    super(props);

    this.state = {activeItem: ''};
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e, { name }) {
    this.setState(
      {activeItem: name}
    );
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

const PageDefault = () => (
  <div className="container-wrapper">
    <MenuHeaderSticky />
    <div>
      <p>blah-blah</p>
    </div>
  </div>
)

export default PageDefault