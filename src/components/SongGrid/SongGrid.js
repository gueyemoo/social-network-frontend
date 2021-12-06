import React from 'react'

import { NavLink } from 'react-router-dom';

import { Typography } from 'antd';
const { Title } = Typography;

const SongGrid = (data, discover) => {

    const dataset = data.data;
    return (
        <>
            <div className="gallery">

                {dataset.map((item) => {
                    return <div class="gallery-img-container" key={item.id}>
                        {discover ? (
                            <NavLink to={`/Discover/${item.id}`}>
                                <img className="gallery-image" src={`https://picsum.photos/800/600?random=${item.id}`} alt="" />
                                <Title level={5} style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', flexWrap: 'nowrap' }} className="discover-main-container-title discover-gender-main-container-title">{item.title}</Title>
                                <div class="overlay">
                                    <div class="text">{item.description}</div>
                                </div>
                            </NavLink>
                        ) : (
                            <>
                                <img className="gallery-image" src={`https://picsum.photos/800/600?random=${item.id}`} alt="" />
                                <Title level={5} style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', flexWrap: 'nowrap' }} className="discover-main-container-title discover-gender-main-container-title">{item.title}</Title>
                                <div class="overlay">
                                    <div class="text">{item.description}</div>
                                </div>
                            </>
                        )}

                    </div>
                })}

            </div>
        </>
    )
}

export default SongGrid
