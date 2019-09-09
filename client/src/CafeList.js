import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap'
import { connect } from 'react-redux';
import { getCafes } from './actions/cafeActions';
import PropTypes from 'prop-types';

function CafeList(props) {
  // const [allCafes, updateCafes] = useState([])

  useEffect(() => {
    return props.getCafes
  }, []);

  return (
    <div>
      <ListGroup>
        {props.cafe.cafes.map((cafe) => {
          return <ListGroup.Item>{cafe.name}</ListGroup.Item>
        })}
      </ListGroup>
    </div>
  )
}

CafeList.propTypes = {
  getCafes: PropTypes.func.isRequired,
  cafe: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  cafe: state.cafe
})

export default connect(mapStateToProps, { getCafes })(CafeList)
