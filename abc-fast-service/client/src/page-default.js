import React from 'react';
import './page-default.css';
import 'react-table/react-table.css';

import '../src/semantic/dist/semantic.css';
import { Menu, Sticky, Icon, Segment, Sidebar, Button } from 'semantic-ui-react';

import ReactTable from 'react-table';
import { makeData } from './data-example/data';
import Headers from './data-example/headers';

import axios from 'axios';
import DATA from './data';

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
        <Menu style={{ height: '80px' }}>
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
};

// ClientBaseTable goes to MenuSidebarHoverLeft
class ClientBaseTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: makeData(),
      serverData: []
    };
  };

  componentDidMount() {
    axios.get(DATA.data)
    .then(response => {
      if (response && response.data ) { 
        if (Array.isArray(response.data)) {
           // if array in response.data
           this.setState(prevState => ({ serverData: repsonse.data }));
        } else if (response.data.data && Array.isArray(response.data.data)) {
          //  if array in response.data.data 
          this.setState(prevState => ({ serverData: repsonse.data.data }));
        }
      }
    }).catch(function (error) {
    });
  };

  render() {
    const { data } = this.state;
    const { serverData } = this.state;

    console.log(serverData);
    console.log(serverData.data);
    // table content from server TODO
    
    return(
      <div className='client-database-table'>
        <ReactTable
          data={ serverData }
          columns={ Headers }
          defaultPageSize={ 10 }
          className="-striped -highlight"
        />
        
        <div className='tip-client-database-table' style={{'textAlign': 'right'}}>
          <em> Tip: Hold shift when sorting to multi-sort! </em>
        </div>
      </div>
    );
  };
};

class MenuSidebarHoverLeft extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      toggle: false
    }
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  handleOnClick() {
    this.setState(
      {
        visible: !this.state.visible,
        toggle: !this.state.toggle
      }
    );
  }

  handleOutsideClick() {
    this.setState(
      {
        visible: false,
        toggle: false
      }
    );
  }

  render() {
    const visible = this.state.visible;
    const toggle = this.state.toggle;

    return(
      <div className='menu-sidebar-dropright'>
        <Button
        className='btn-toggle-sidebar'
        toggle active={toggle}
        onClick={this.handleOnClick}
        icon
        >
          <Icon name='sidebar' />
        </Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          inverted
          vertical
          onHide={this.handleOutsideClick}
          visible={visible}
          width='wide'
          >
            <Menu.Item as='a'>
            <Icon name='home' />
            Place Holder 1
            </Menu.Item>

            <Menu.Item as='a'>
            <Icon name='gamepad' />
            Place Holder 2
            </Menu.Item>

            <Menu.Item as='a'>
            <Icon name='camera' />
            Place Holder 3
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={visible}>

            <Segment basic>
            <ClientBaseTable />
            </Segment>

          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

const PageDefault = () => (
  <div className="container-wrapper">
    <MenuHeaderSticky />
    <MenuSidebarHoverLeft />
  </div>
)

export default PageDefault
