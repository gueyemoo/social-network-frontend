import React from 'react'
import { NavLink } from 'react-router-dom';
import { Avatar, List, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';


const Chat = () => {

    const { Title } = Typography;


    const data_chat = [
        {
            id: 1,
            title: 'Antoine Du Bois',
            description: 'Vous: ahah'
        },
        {
            id: 2,
            title: 'Cedric Pinard',
            description: 'Prochain album soon'
        },
        {
            id: 3,
            title: 'Mohamed Gueye',
            description: 'Vous: ok'
        },
        {
            id: 4,
            title: 'Benjamin Mitton',
            description: 'Je vais te partager un son'
        },
    ];


    return (
        <>
            <div className="header-chat">
                <Title level={2} style={{ textAlign: 'center', margin: '10px' }}>Messagerie</Title>
                <hr />
            </div>

            <div className="list-chat-container">
                <List
                    itemLayout="horizontal"
                    dataSource={data_chat}

                    renderItem={item => (
                        <List.Item>
                            {<NavLink to="/Chat" style={{ margin: 0, padding: 0, display: 'contents' }}>
                                <List.Item.Meta
                                    avatar={<Avatar style={{ backgroundColor: '#ff7700', marginLeft:'10px' }} size="large" icon={<UserOutlined />} />}
                                    title={<a href="https://ant.design">{item.title}</a>}
                                    description={item.description}
                                />
                            </NavLink>}
                        </List.Item>
                    )}
                />
            </div>
        </>
    )
}

export default Chat
