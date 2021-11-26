import React, { useState } from 'react';

import './App.scss';

import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { Layout } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import { Row } from 'antd';
import { Col } from 'antd';



import Navbar from './components/Navbar/Navbar';
import Chat from './components/Chat/Chat';
import Signup from './components/Signup/Signup';

import HomePage from './pages/HomePage/HomePage';
import ChatPage from './pages/ChatPage/ChatPage';
import DiscoverPage from './pages/DiscoverPage/DiscoverPage';
import MusicGenderPage from './pages/MusicGenderPage/MusicGenderPage';

import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'


function App() {

  const audioList = [
    {
      name: 'No Time',
      singer: 'KSI feat Lil Durk',
      cover:
        'https://res.cloudinary.com/dfbypuwpt/image/upload/v1634130625/ksi_album_cover.jpg',
      musicSrc:
        'https://res.cloudinary.com/dfbypuwpt/video/upload/v1634130906/ksi-lildurk-no-time.mp3',
    },
    {
      name: 'Dorost Nemisham',
      singer: 'Sirvan Khosravi',
      cover:
        'https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg',
      musicSrc:
        'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3',
    },
  ]

  const location = useLocation();

  const [childData, setChildData] = useState(false);

  const [login, setLogin] = useState(false);

  const [signup, setSignup] = useState(false);

  const onFinish = (values) => {
    console.log('Success:', values);
    if (values.username !== null && values.username !== '')
      setLogin(!login);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const showForm = () => {
    setSignup(!signup);
  };

  return (
    <>
      {login === false ? (
        <div id="globale">
          <Row >
            <Col span={12}>
              <div id="divDescription">
                <h1 id='headerLogin'>PlayLoud</h1>
                <p id='headerDesc'>Avec PlayLoud, écoutez de la musique et partagez vos sensations avec votre entourage.</p>
              </div>
            </Col>

            <Col span={12}>

              {signup ? (
                console.log("inscription = " + signup),
                <div id="divForm"  >
                <Row type="flex" justify="center" align="center">
                  <Col span={16} >
                <Form
                  name="basic"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <legend>Inscrivez vous !</legend>
                  <Form.Item
                    label="Identifiant"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: 'Saisissez votre identifiant!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Mot de passe"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Saisissez votre mot de passe!',
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item
                    label="Confirmez le mot de passe"
                    name="confirm"
                    rules={[
                      {
                        required: true,
                        message: 'Confirmez votre mot de passe!',
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                      offset: 0,
                      span: 8,
                    }}
                  >
                    <Checkbox>
                        Se souvenir de moi</Checkbox>
                  </Form.Item>

                  <Form.Item
                    wrapperCol={{
                      offset: 0 ,
                      span: 4,
                    }}
                  >
                    <Button type="primary" htmlType="submit">
                      Créer votre compte
                    </Button>
                  </Form.Item>

                  <hr></hr>
                    <br/>
                  <Form.Item
                    wrapperCol={{
                      offset: 0,
                      span: 8,
                    }}
                  >
                    <label>Vous avez déjà un compte ?</label>
                    <Button type="secondary" onClick={showForm}>
                      Se connecter
                    </Button>
                  </Form.Item>
                </Form>
                </Col>
                </Row>
                </div>
              ) : (
                console.log("connection = " + signup),

          <div id="divForm"  >
            <Row type="flex" justify="center" align="center">
              <Col span={16} >
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <legend>Connectez vous !</legend>
              <Form.Item
                label="Identifiant"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Saisissez votre identifiant!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Mot de passe"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Saisissez votre mot de passe!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 0,
                  span: 8,
                }}
              >
                <Checkbox>
                    Se souvenir de moi</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 0 ,
                  span: 4,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Se connecter
                </Button>
              </Form.Item>

              <hr></hr>
                <br/>
              <Form.Item
                wrapperCol={{
                  offset: 0,
                  span: 8,
                }}
              >
                <label>Vous n'êtes pas inscrit ?</label>
                  <Button type="secondary" onClick={showForm}>
                    Créer un compte
                  </Button>
              </Form.Item>
            </Form>
            </Col>
            </Row>
          </div>
                )}
              
              </Col>
            </Row>

            
          </div>
        ) : (
        //if logged in        
        <div className="app">
          {/* set home page as default when rendering */}
          <Redirect exact from="/" to="/Home" />
          <Navbar passChildData={setChildData} />
          <div className="app-container">

            <div className="main" style={childData === false ? { width: '97%', overflow: 'hidden' } : { width: '80%', overflow: 'hidden' }} >
              <Layout className="layout-container">
                <div className="routes">
                  <Switch>
                    <Route exact path="/Home">
                      <HomePage />
                    </Route>
                    <Route exact path="/Chat">
                      <ChatPage />
                    </Route>
                    <Route exact path="/Discover">
                      <DiscoverPage />
                    </Route>
                    <Route path="/Discover/:id" component={MusicGenderPage} />

                  </Switch>
                </div>
              </Layout>
            </div>
            {childData ? (
              <Fade duration={1000} right={true} >
                <div className="chat">
                  <Chat />
                </div>
              </Fade>
            ) : (
              <Slide left>
                <div className="chatClose">
                  <p>C</p>
                  <p>H</p>
                  <p>A</p>
                  <p>T</p>
                </div>
              </Slide>
            )}
            <div className="footer">
              <ReactJkMusicPlayer mobileMediaQuery="(max-width: 1024px)" audioLists={audioList} />
            </div>
          </div>
        </div >
      )}
    </>
  );
}

export default App;
