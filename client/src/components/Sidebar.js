import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import FileListener from './uploadImage';
import DialogBox from './DialogBox';
import FlatButton from 'material-ui/FlatButton';

injectTapEventPlugin();

//Side dock that allows user to select Home or Upload Image
class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }


  // If we want the sidebar to toggle on/off and on the side of the screen instead of on top, we 
  // can add these back into the render()
    
  handleToggle = () => this.setState({open: !this.state.open});


  render() {
    return (
      <MuiThemeProvider>  
        <div>
          <a href="/"><MenuItem><FlatButton>Home</FlatButton></MenuItem></a>
          <MenuItem onClick={this.handleToggle}>
            <DialogBox>
              <FileListener />
            </DialogBox>
          </MenuItem>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Sidebar;