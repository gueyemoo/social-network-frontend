
import React, { useState } from 'react';

import { Form, Input, Button, Checkbox } from 'antd';

import { Row } from 'antd';
import { Col } from 'antd';

  const Signup = (props) => {
    
    const [login, setLogin] = useState(false);
    const [signup, setSignup] = useState(false);

    const onFinish = (values) => {
      console.log('Success:', values);
      if (values.username !== null && values.username !== '')
        setLogin(!login);
        props.passChildData2(login);
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
  
    const showForm = () => {
      setSignup(!signup);
      onChange(signup);
    };

    function onChange(signup) {
      console.log(`switch to ${signup}`);
      props.passChildData(signup);
  }

    return (
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
                offset: 0,
                span: 4,
              }}
            >
              <Button type="primary" onClick={showForm}>
                Créer votre compte
              </Button>
            </Form.Item>
    
            <hr></hr>
            <br />
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
    )
  };

export default Signup;