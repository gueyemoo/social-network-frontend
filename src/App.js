import React, { useState } from 'react';
import Locale from 'react-jinke-music-player/lib/config/locale'

import './App.scss';

import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';



import Navbar from './components/Navbar/Navbar';
import Chat from './components/Chat/Chat';

import HomePage from './pages/HomePage/HomePage';
import ChatPage from './pages/ChatPage/ChatPage';
import DiscoverPage from './pages/DiscoverPage/DiscoverPage';
import MusicGenderPage from './pages/MusicGenderPage/MusicGenderPage';

import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'


function App() {

  const customLocale = {
    controllerTitle: 'Ouvrir',
  }
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

  const [childData, setChildData] = useState(false);

  const [login, setLogin] = useState(false);

  const onFinish = (values) => {
    console.log('Success:', values);
    if (values.username !== null && values.username !== '')
      setLogin(!login);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      {login === false ? (
        <div id="globale">
          <Form
            name="basic"
            labelCol={{
              span: 2,
            }}
            wrapperCol={{
              span: 4,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 2,
                span: 4,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 2,
                span: 4,
              }}
            >
              <Button type="primary" htmlType="submit">
                Se connecter
              </Button>
            </Form.Item>
          </Form>
          <hr></hr>
          <Button type="primary" class="insc" htmlType="submit">
            Créer un compte
          </Button>
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
