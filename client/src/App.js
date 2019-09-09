import React from 'react';
import './App.css';
import { Form, Container } from 'react-bootstrap';
import CafeList from './CafeList';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CafeList />
        <Container>
          <div >
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Cafe</Form.Label>
                <Form.Control type="text" placeholder="Joe's Joe" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Rating</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Features</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
            </Form>
          </div>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
