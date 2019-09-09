import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postCafe } from './actions/cafeActions';
import { Form, Container, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function NewCafe(props){
  const [cafeName, setCafeName] = useState('')
  const [cafeRating, setCafeRating] = useState(0)
  const [cafeFeatures, setCafeFeatures] = useState('')

  const handleClick = (info) => {
    info.preventDefault();

    const newCafe = {
      name: cafeName,
      rating: cafeRating,
      features: cafeFeatures
    }
    props.postCafe(newCafe)

  }

  return (
    <Container>
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Cafe</Form.Label>
            <Form.Control type="text" placeholder="Joe's Joe" onChange={(e) => setCafeName(e.target.value)} value={cafeName}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Rating</Form.Label>
            <Form.Control as="select" onChange={(e) => setCafeRating(e.target.value)} value={cafeRating}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Features</Form.Label>
            <Form.Control as="textarea" rows="3" onChange={(e) => setCafeFeatures(e.target.value)} value={cafeFeatures}/>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleClick}>
           Submit
         </Button>
        </Form>
      </div>
    </Container>
  )
}

NewCafe.propTypes = {
  postCafe: PropTypes.func.isRequired,
  cafe: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  cafe: state.cafe
})

export default connect(mapStateToProps, {
  postCafe
})(NewCafe);
