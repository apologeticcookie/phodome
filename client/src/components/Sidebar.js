import React from 'react';
// import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

//Side dock that allows user to select Home or Upload Image
class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: true};
  }


  // If we want the sidebar to toggle on/off and on the side of the screen instead of on top, we 
  // can add these back into the render()
    
    // handleToggle = () => this.setState({open: !this.state.open});
    // <Drawer open={this.state.open}>
    // </Drawer>

  render() {
    return (
      <div>
          <MenuItem>Home</MenuItem>
          <MenuItem>Upload Image</MenuItem>
      </div>
    );
  }
}

export default Sidebar;