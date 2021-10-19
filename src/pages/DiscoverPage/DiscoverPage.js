import React from 'react'
import SongGrid from '../../components/SongGrid/SongGrid'

import { Typography } from 'antd';
const { Title } = Typography;

const DiscoverPage = () => {
    return (
        <div className="discover-main-container">
        
            <Title level={3} className="discover-main-container-title">Découvrir</Title>
            <SongGrid />
        </div>
    )
}

export default DiscoverPage
