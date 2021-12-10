/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from 'react-router-dom';
import { HomeOutlined, GlobalOutlined, BookOutlined, UploadOutlined, UserOutlined, BellOutlined, LogoutOutlined } from '@ant-design/icons';
import { Input, Switch } from 'antd';

const { Search } = Input;

const NavBar = (props) => {

    function onChange(checked) {
        console.log(`switch to ${checked}`);
        props.passChildData(checked);
    }

    return (
        <nav className="navbar">

            <ul className="navbar-list-container" style={{marginBottom: '0'}}>
                <div className="navbar-container">
                    <h2>PlayLoud</h2>
                    <div className="navbar-container-left-side">
                        <li className="navbar-item-list">
                            <NavLink exact to="/Home" activeClassName="active"> <HomeOutlined style={{ fontSize: '24px' }} /> Accueil</NavLink>
                        </li>

                        <li className="navbar-item-list">
                            <NavLink exact to="/Discover" activeClassName="active"> <GlobalOutlined style={{ fontSize: '24px', marginRight: 5 }} />Découverte</NavLink>
                        </li>

                        <li className="navbar-item-list">
                            <NavLink exact to="/Bibliotheque" activeClassName="active"> <BookOutlined style={{ fontSize: '24px' }} />Bibliothèque</NavLink>
                        </li>
                    </div>

                    <Search placeholder="search your song" onSearch={''} className="searchbox" style={{ width: 300, margin: '10px auto' }} />

                    <Switch defaultChecked={false} checkedChildren={<p>chat ouvert</p>} unCheckedChildren={<p>chat fermer</p>} onChange={onChange} className="switch-button"/>

                    <div className="navbar-container-right-side">
                        <li className="navbar-item-list">
                            <NavLink exact to="/Upload" activeClassName="active"> <UploadOutlined style={{ fontSize: '24px' }} /> Upload</NavLink>
                        </li>

                        <li className="navbar-item-list">
                            <NavLink exact to="/Profil" activeClassName="active"> <UserOutlined style={{ fontSize: '24px' }} />Profil</NavLink>
                        </li>

                        <li className="navbar-item-list">
                            <NavLink to="/Profil"><BellOutlined style={{ fontSize: '24px' }} /> </NavLink>
                            <ul className="navbar-list-container" style={{zIndex:100}}>
                                <li className="navbar-item-list"><NavLink exact to="/Bibliotheque">Consultez vos sons écoutez récemment </NavLink> <hr/></li>
                                <li className="navbar-item-list"><NavLink exact to="/Chat">Vous avez reçu un nouveau message de Benjamin</NavLink> <hr/></li>
                                <li className="navbar-item-list"><NavLink exact to="/Discover/1">Ecoutez les derniers sons RnB du moments</NavLink></li>
                            </ul>
                        </li>

                        <li className="navbar-item-list">
                            <a href="" title="Se déconnecter"><LogoutOutlined style={{ fontSize: '24px' }} /> </a>
                        </li>
                    </div>
                </div>
            </ul>
        </nav>
    )
}

export default NavBar
