import React from 'react';
import PhodomeScene from './PhodomeScene';
import TestScene from './TestScene';
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
        images: imageUrls,
        scene: 'PhodomeScene'
      });
    });
  }

  changeScene(scene) {
    console.log('CHANGE SCENE');
    this.setState({
      scene: scene
    });
  }

  handleUploadComplete() {
    this.fetchImages();
  }

  render() {
    return (
      <div>
        <Sidebar handleUploadComplete={this.handleUploadComplete} toggleDemo={this.props.toggleDemo} />
        { this.state.scene === 'PhodomeScene' ? <PhodomeScene images={this.state.images} onImageClick={this.changeScene.bind(this)} /> : null }
        { this.state.scene === 'TestScene' ? <TestScene images={this.state.images} /> : null }
      </div>
    );
  }
}

Container.propTypes = {
  toggleDemo: React.PropTypes.func.isRequired
};

export default Container;
