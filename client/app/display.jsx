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
        <h2>This be it</h2>
      </div>
    )
  }
}

export default Display;