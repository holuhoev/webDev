import React from 'react';
import FetchData from './mysql_con';
import './page-default.css';
import '../src/semantic/dist/semantic.css';
import { Menu, Sticky, Table, Icon, Segment, Sidebar, Button } from 'semantic-ui-react';



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

class ClientBaseTable extends React.Component {

  render() {
    return(
      <div className='client-base-table'>
        <Table singleLine celled selectable inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Adress</Table.HeaderCell>
              <Table.HeaderCell>Phone</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>ZIP from</Table.HeaderCell>
              <Table.HeaderCell>ZIP to</Table.HeaderCell>
              <Table.HeaderCell>Vehicle Year</Table.HeaderCell>
              <Table.HeaderCell>Vehicle Make</Table.HeaderCell>
              <Table.HeaderCell>Vehicle Model</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>John Doe</Table.Cell>
              <Table.Cell>237  School House Road, Bay Springs, MS, Mississippi</Table.Cell>
              <Table.Cell>601-764-0848</Table.Cell>
              <Table.Cell>john.doe@mail.com</Table.Cell>
              <Table.Cell>39422</Table.Cell>
              <Table.Cell>15933</Table.Cell>
              <Table.Cell>2012</Table.Cell>
              <Table.Cell>Tesla</Table.Cell>
              <Table.Cell>Model 5</Table.Cell>
              <Table.Cell>$2500</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}

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