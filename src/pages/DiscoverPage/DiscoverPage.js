import React from 'react'
import SongGrid from '../../components/SongGrid/SongGrid'

import { Typography } from 'antd';
const { Title } = Typography;


const data_discover = [
    {
        "id": 1,
        "title": "Rnb",
        "description": "RnB"
    },
    {
        "id": 2,
        "title": "Country",
        "description": "Country"
    },
    {
        "id": 3,
        "title": "Rap",
        "description": "Rap"
    },
    {
        "id": 4,
        "title": "Raggae",
        "description": "Raggae"
    },
    {
        "id": 5,
        "title": "Indie",
        "description": "Indie"
    },
    {
        "id": 6,
        "title": "Trap",
        "description": "Trap"
    },
    {
        "id": 7,
        "title": "Funk",
        "description": "Funk"
    },
    {
        "id": 8,
        "title": "Jazz",
        "description": "Jazz"
    },
    {
        "id": 9,
        "title": "Pop",
        "description": "Pop"
    },
    {
        "id": 10,
        "title": "Rock",
        "description": "Rock"
    },
];

const DiscoverPage = () => {

    return (
        <div className="discover-main-container">
        
            <Title level={3} className="discover-main-container-title">Découvrir</Title>
            <SongGrid data={data_discover} discover={true}/>
        </div>
    )
}

export default DiscoverPage
