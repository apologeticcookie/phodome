import React from 'react';
import PhodomeScene from './PhodomeScene';
import Sidebar from './Sidebar';
import axios from 'axios';

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      images: []
    };

    this.handleUploadComplete = this.handleUploadComplete.bind(this);
    this.fetchImages = this.fetchImages.bind(this);
  }

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages() {
    axios.get('/api/images')
    .then(response => (
      response.data.files
    ))
    .then( (images) => {
      let imageUrls = [];
      images.forEach(imageObj => {
        imageUrls.push(imageObj.url);
      });
      this.setState({
        images: imageUrls
      });
    });
  }

  handleUploadComplete() {
    this.fetchImages();
  }

  render() {
    return (
      <div>
        <Sidebar handleUploadComplete={this.handleUploadComplete} toggleDemo={this.props.toggleDemo} />
        <PhodomeScene images={this.state.images} />
      </div>
    );
  }
}

export default Container;
