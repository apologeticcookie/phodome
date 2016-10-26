import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class DialogBox extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="OK"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <FlatButton label="Upload Pictures" onTouchTap={this.handleOpen} />
        <Dialog
          title="Upload Pictures"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          {this.props.children}
        </Dialog>
      </div>
    );
  }
}

DialogBox.propTypes = {
  children: React.PropTypes.any
};

export default DialogBox;
