import React from 'react'

import { Typography } from 'antd';
const { Title } = Typography;

const SectionGrid = (props) => {
    return (
        <div>
           <Title level={3} style={{marginLeft:'30px',marginTop:'15px'}}>{props.titre}</Title> 

           <div className="image-section-grid">
                <img src="https://picsum.photos/800/600?random=51" alt="" />
                <img src="https://picsum.photos/800/600?random=41" alt="" />
                <img src="https://picsum.photos/800/600?random=31" alt="" />
                <img src="https://picsum.photos/800/600?random=21" alt="" />
                <img src="https://picsum.photos/800/600?random=11" alt="" />
           </div>
        </div>
    )
}

export default SectionGrid
