import React from 'react'
import SongCarousel from '../../components/SongCarousel/SongCarousel'

import { Typography } from 'antd';
const { Title } = Typography;

const HomePage = () => {
    return (
        <>
            <div className="playlist-container">
                <Title level={3} className="playlist-container-title">Découverte du jour</Title>
                <SongCarousel />
            </div>
            <hr />
            <div className="playlist-container">
                <Title level={3} className="playlist-container-title">Top 50 par genre</Title>
                <SongCarousel />
            </div>
        </>
    )
}

export default HomePage
