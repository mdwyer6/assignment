import React from 'react';
import { Link } from 'react-router';

class Slider extends React.Component {
  render () {
    return (
      <nav className='slider'>
        {this.props.photos.map((arg, index) => (<Link to={`/?id=${index + 1}`} key={index}><img src={`..${arg.product_image_url}`} key={index} alt='' /></Link>))}
      </nav>
    )
  }
}

export default Slider;
