import React from 'react';

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <section className='display'>
        <figure>
          <img src={`..${this.props.currentPhoto.product_image_url}`} />
        </figure>
        <figcaption>
          <p>{this.props.currentPhoto.episodes} EPISODES</p>
          <h2>{this.props.currentPhoto.title.toUpperCase()}</h2>
        </figcaption>
      </section>
    )
  }
}

export default Display;