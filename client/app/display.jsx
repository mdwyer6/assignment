import React from 'react';

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className='Display'>
        <h1>This be it</h1>
        <img src={`..${this.props.currentPhoto.product_image_url}`} />
        <p>{this.props.currentPhoto.episodes} episodes</p>
        <h2>{this.props.currentPhoto.title}</h2>
      </div>
    )
  }
}

export default Display;