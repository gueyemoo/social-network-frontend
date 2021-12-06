import React, { useState } from 'react'

import SectionGrid from '../../components/SectionGrid/SectionGrid'
import SongGrid from '../../components/SongGrid/SongGrid'

import { Typography } from 'antd';
const { Title } = Typography;

const data_discover = [
    {
        "id": 1,
        "title": "Smooth Operator",
        "description": "Sade"
    },
    {
        "id": 2,
        "title": "Easy on me",
        "description": "Adele"
    },
    {
        "id": 3,
        "title": "My Universe",
        "description": "Coldplay"
    },
    {
        "id": 4,
        "title": "Shivers",
        "description": "Ed Sheeran"
    }
    ,
    {
        "id": 5,
        "title": "Arcade",
        "description": "Duncan Lawrence"
    },
    {
        "id": 6,
        "title": "Run",
        "description": "One Republic"
    },
    {
        "id": 7,
        "title": "Footprints",
        "description": "Tom Gregory"
    },
    {
        "id": 8,
        "title": "Devastaded",
        "description": "Joey Badass"
    },
    {
        "id": 9,
        "title": "We're all alone",
        "description": "Dave"
    },
    {
        "id": 10,
        "title": "10 Commandments",
        "description": "Chip"
    },
];

const BiblioPage = () => {

    const [home, setHome] = useState(true);

    return (
        <>

            <div className="biblio-nav">
                <h2 onClick={() => setHome(true)}>Aperçu</h2>
                <h2 onClick={() => setHome(false)}>Favoris</h2>
                <h2>Playlist</h2>
                <h2>Albums</h2>
                <h2>Amis</h2>
                <h2>Historique</h2>
            </div>
            {home ? (
                <div className="biblio-main">
                    <SectionGrid titre="Ecouté récemment" />
                    <SectionGrid titre="Favoris" />
                    <SectionGrid titre="Playlist" />
                    <SectionGrid titre="Albums" />
                    <SectionGrid titre="Amis" />
                    <SectionGrid titre="Historique" />
                </div>
            ) : (
                <>
                    <Title level={3} className="biblio-main-container-title">Vos favoris</Title>
                    <SongGrid data={data_discover} discover={false} />
                </>
            )}
        </>
    )
}

export default BiblioPage
