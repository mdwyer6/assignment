import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, Link } from 'react-router'

import Slider from './slider.jsx';
import Display from './display.jsx';
import shows from '../shows.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.updatePhoto = this.updatePhoto.bind(this);
  	this.state = {
  		currentIndex: 0
  	}
  }

  componentWillMount() {
    if (this.props.location.query.id) {
      this.setState({currentIndex: this.props.location.query.id - 1});
    }
  }

  updatePhoto(index) {
    this.setState({currentIndex: index});
  }

  render () {
    return (
      <div>
        <Slider photos={shows} updatePhoto={this.updatePhoto} />
        <Display currentPhoto={shows[this.state.currentIndex]} />
      </div>
    )
  }
}
 
const router = (
  <Router history={browserHistory}>
    <Route path='/' component={App} />
  </Router>
)

render(router, document.getElementById('app'));