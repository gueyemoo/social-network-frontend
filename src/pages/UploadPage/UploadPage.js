// import { Typography } from 'antd';
// import { Button, Radio } from 'antd';
// import { DownloadOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Upload, message, Typography } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const { Title } = Typography;
const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};

const UploadPage = () => {
    const [uploadState, setUploadState] = useState('public')

    return (
        <div className="mainUpload-container">
            <Dragger {...props} className="uploadZone">
                <Title className="ant-upload-text" level={4}>Glisser et déposer vos sons et albums içi</Title>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined style={{ color: '#FF771A' }} />
                </p>
                <p className="ant-upload-hint">
                    Vérifiez que vous disposez bien de tout les droits légaux avant de déposer un son sur la plateforme.
                </p>


            </Dragger>
            <div className="confidentialZone">
                <p>Confidentialité: </p>
                <input type="radio" value="public" id="public"
                    onClick={() => setUploadState('publique')} name="stateUpload" defaultChecked />
                <label for="public">publique</label>

                <input type="radio" value="private" id="private"
                    onClick={() => setUploadState('privé')} name="stateUpload" />
                <label for="private">privé</label>
                <br />
            </div>
            <div className="confidentialZone confidentialInfo">
                <p>Vos sons seront {uploadState} sur la plateforme.</p>
            </div>
        </div>
    )
}

export default UploadPage;
