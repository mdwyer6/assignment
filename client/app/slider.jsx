import React from 'react';
import { Link } from 'react-router';

class Slider extends React.Component {
  render () {
    return (
      <div className='slider'>
        {this.props.photos.map((arg, index) => (<Link to={`/?id=${index + 1}`} key={index}><img src={`..${arg.product_image_url}`} onClick={() => {this.props.updatePhoto(index)}} key={index} alt='' /></Link>))}
      </div>
    )
  }
}

export default Slider;