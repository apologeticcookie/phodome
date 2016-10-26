import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Gallery from 'react-fine-uploader/components/gallery';
import CancelButton from 'react-fine-uploader/components/cancel-button';
import FineUploaderTraditional from 'react-fine-uploader';
import Thumbnail from 'react-fine-uploader/components/thumbnail';

const uploader = new FineUploaderTraditional({
  options: {
    chunking: {
      enabled: true
    },
    deleteFile: {
      enabled: true,
      endpoint: '/api/images'
    },
    request: {
      endpoint: '/api/images'
    },
    retry: {
      enableAuto: true
    }
  }
});

const isFileGone = status => {
  return [
    'canceled',
    'deleted',
  ].indexOf(status) >= 0;
};

class FileUploader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submittedFiles: []
    };
  }

  componentDidMount() {
    uploader.on('statusChange', (id, oldStatus, newStatus) => {
      if (newStatus === 'submitted') {
        const submittedFiles = this.state.submittedFiles;
        submittedFiles.push(id);
        this.setState({ submittedFiles });
      } else if (isFileGone(newStatus)) {
        const submittedFiles = this.state.submittedFiles;
        const indexToRemove = submittedFiles.indexOf(id);
        submittedFiles.splice(indexToRemove, 1);
        this.setState({ submittedFiles });
      }
    });

    uploader.on('complete', () => {
      this.props.handleUploadComplete();
    });
  }

  render() {
    return (
      <div>
        <Gallery uploader={uploader} />
      </div>
    );
  }
}

FileUploader.propTypes = {
  handleUploadComplete: React.PropTypes.func.isRequired
};

export default FileUploader;
