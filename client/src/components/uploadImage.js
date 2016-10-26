import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import CancelButton from 'react-fine-uploader/components/cancel-button'
import FineUploaderTraditional from 'react-fine-uploader'
import Thumbnail from 'react-fine-uploader/components/thumbnail'

const uploader = new FineUploaderTraditional({
   options: {
      request: {
         endpoint: 'my/upload/endpoint'
      }
   }
});

const isFileGone = status => {
  return [
    'canceled',
    'deleted',
  ].indexOf(status) >= 0
}

class FileListener extends Component {
  constructor() {
    super()
    this.state = {
      submittedFiles: []
    }
  }

  componentDidMount() {
    uploader.on('statusChange', (id, oldStatus, newStatus) => {
      if (newStatus === 'submitted') {
        const submittedFiles = this.state.submittedFiles
        submittedFiles.push(id)
        this.setState({ submittedFiles })
      } else if (isFileGone(newStatus)) {
        const submittedFiles = this.state.submittedFiles
        const indexToRemove = submittedFiles.indexOf(id)
        submittedFiles.splice(indexToRemove, 1)
        this.setState({ submittedFiles })
      }
    })
  }

  render() {
    return (
      <div>
        {
          this.state.submittedFiles.map(id => {
            <div key={ id }>
              <Thumbnail id={ id } uploader={ uploader } />
              <CancelButton id={ id } uploader={ uploader } />
            </div>
          })
        }
      </div>
    )
  }
}

export default FileListener;