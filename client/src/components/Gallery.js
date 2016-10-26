import React, { Component } from 'react'

import FineUploaderTraditional from 'react-fine-uploader'
import Gallery from 'react-fine-uploader/components/gallery'

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
})

class UploadComponent extends Component {
    render() {
        return (
            <Gallery uploader={ uploader } />
        )
    }
}

export default UploadComponent