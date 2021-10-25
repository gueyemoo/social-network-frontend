import React from 'react'
import { useParams } from 'react-router-dom';
import SongGrid from '../../components/SongGrid/SongGrid'

import { Typography } from 'antd';
const { Title } = Typography;

const gender = [
    {
        "id": 1,
        "title": "Rnb",
    },
    {
        "id": 2,
        "title": "Country",
    },
    {
        "id": 3,
        "title": "Rap",
    },
    {
        "id": 4,
        "title": "Raggae",
    },
    {
        "id": 5,
        "title": "Indie",
    },
    {
        "id": 6,
        "title": "Trap",
    },
    {
        "id": 7,
        "title": "Funk",
    },
    {
        "id": 8,
        "title": "Jazz",
    },
    {
        "id": 9,
        "title": "Pop",
    },
    {
        "id": 10,
        "title": "Rock",
    },
];

const data_discover_test = [
    {
        "id": 1,
        "title": "Beatle",
        "description": "Frome me to you"
    },
    {
        "id": 2,
        "title": "Drake",
        "description": "Champagne Poetry"
    },
    {
        "id": 3,
        "title": "J Hus",
        "description": "Leave Me"
    },
    {
        "id": 4,
        "title": "Them Two",
        "description": "Am I a Good Man"
    },
    {
        "id": 5,
        "title": "Future, Drake",
        "description": "Life Is Good"
    },
    {
        "id": 6,
        "title": "Dave, Burna Boy",
        "description": "Location"
    },
    {
        "id": 7,
        "title": "Travis Scott",
        "description": "Sicko Mode"
    },
    {
        "id": 8,
        "title": "Ed Sheeran",
        "description": "Bad Habits"
    },
    {
        "id": 9,
        "title": "Adele",
        "description": "Easy On Me"
    },
    {
        "id": 10,
        "title": "Skepta",
        "description": "Same Old Story"
    },
];

const DiscoverPage = () => {

    const params = useParams();
    const ids = parseInt(params.id);

    console.log(data_discover_test[ids].title);


    return (
        <div className="discover-gender-main-container">

            <Title level={3} className="discover-gender-main-container-title">{gender[ids - 1].title}</Title>
            <hr />
            <SongGrid data={data_discover_test} />
        </div>
    )
}

export default DiscoverPage
