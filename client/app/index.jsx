import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, Link } from 'react-router'
import {observable} from "mobx"
import {observer} from "mobx-react"

import Slider from './slider.jsx';
import Display from './display.jsx';
import shows from '../shows.json';

@observer
class App extends React.Component {
  @observable currentInd = 0;

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.location.query.id) {
      this.currentInd = this.props.location.query.id - 1;
    }
  }

  componentWillReceiveProps(props) {
    if (props.location.query.id) {
      this.currentInd = props.location.query.id - 1;
    }
  }

  render () {
    return (
      <div>
        <Slider photos={shows} />
        <Display currentPhoto={shows[this.currentInd]} />
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