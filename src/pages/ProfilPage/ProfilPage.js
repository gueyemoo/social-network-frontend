import { Avatar, Image, Typography, Card, Tag } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Meta } = Card;

const ProfilPage = () => {
    return (
        <div className="ProfilPage-container">
            <div className="profil-banner">
                <div className="profil-banner-left">
                    <Avatar size={128} src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 128, height: 128 }} />} />
                    <div className="profil-banner-left-description">
                        <Title level={3}>Don LaRosetta</Title>
                        <p>Fan de musique en général, Je fais beaucoup de morceaux aux pianos dans mon temps libre.</p>
                    </div>
                </div>
                <div className="profil-banner-right">
                    <Card bodyStyle={{ height: 'auto' }} style={{ backgroundColor: '#F0F2F5' }}>
                        <Card.Grid hoverable={false} className="card-grid-style-header">Abonnés</Card.Grid>
                        <Card.Grid style={{ paddingLeft: 10 }} hoverable={false} className="card-grid-style-header">Abonnements</Card.Grid>
                        <Card.Grid hoverable={false} className="card-grid-style-header">Sons</Card.Grid>
                    </Card>
                    <Card style={{ backgroundColor: '#F0F2F5' }}>
                        <Card.Grid hoverable={false} className="card-grid-style">72</Card.Grid>
                        <Card.Grid hoverable={false} className="card-grid-style">88</Card.Grid>
                        <Card.Grid hoverable={false} className="card-grid-style">11</Card.Grid>
                    </Card>
                </div>
            </div>
            <div className="profil-menu">
                <h2>Aperçu</h2>
                <h2>Sons Populaire</h2>
                <h2>Albums</h2>
                <h2>Playlists</h2>
                <h2>Reposts</h2>
                <h2>Historique</h2>
            </div>
            <div className="profil-content">
                <Title level={4} style={{ margin: 10 }}>Récent</Title>
                <div className="profil-content-main">
                    <Card hoverable={true}
                        style={{ width: 300, margin: 10 }}
                        cover={
                            <img
                                alt="song cover"
                                src="https://res.cloudinary.com/dfbypuwpt/image/upload/c_scale,h_380,w_632/v1638920172/holidays-rule-57ec244f5f9b586c35a4c4fd_ejvrow.jpg"
                            />
                        }
                        actions={[
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Tag style={{ margin: '0px 35%' }} color="gold">Son</Tag>
                        <Meta
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title="Holidays Rule"
                            description="Ecouter mon nouveau son 'Holidays Rule' dès à présent sur Playloud !"

                        />
                    </Card>
                    <Card hoverable={true}
                        style={{ width: 300, margin: 10 }}
                        cover={
                            <img
                                alt="album cover"
                                src="https://res.cloudinary.com/dfbypuwpt/image/upload/v1638918955/HourglassMeaning1_gof8ok.jpg"
                            />
                        }
                        actions={[
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Tag style={{ margin: '0px 35%' }} color="magenta">Album</Tag>
                        <Meta
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title="No more time"
                            description="Ecouter mon nouvelle album 'No more time' dès à présent sur Playloud !"

                        />
                    </Card>
                    <Card hoverable={true}
                        style={{ width: 300, margin: 10 }}
                        cover={
                            <img
                                alt="song cover"
                                src="https://res.cloudinary.com/dfbypuwpt/image/upload/c_scale,h_380,w_632/v1638920172/holidays-rule-57ec244f5f9b586c35a4c4fd_ejvrow.jpg"
                            />
                        }
                        actions={[
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Tag style={{ margin: '0px 35%' }} color="gold">Son</Tag>
                        <Meta
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title="Holidays"
                            description="Ecouter mon nouveau son 'Holidays' dès à présent sur Playloud !"

                        />
                    </Card>
                    <Card hoverable={true}
                        style={{ width: 300, margin: 10 }}
                        cover={
                            <img
                                alt="album cover"
                                src="https://res.cloudinary.com/dfbypuwpt/image/upload/v1638918955/HourglassMeaning1_gof8ok.jpg"
                            />
                        }
                        actions={[
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Tag style={{ margin: '0px 35%' }} color="magenta">Album</Tag>
                        <Meta
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title="More time"
                            description="Ecouter mon nouvelle album 'More time' dès à présent sur Playloud !"

                        />
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default ProfilPage
