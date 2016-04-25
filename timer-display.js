'use strict';

import React, {
  Text,
  Component
} from 'react-native';

import moment from 'moment';
require('moment-duration-format');

export default class TimerDisplay extends Component {
  render() {
    return (
      <Text>
        {moment.duration(this.props.timeLeft, 'seconds').format('mm:ss', { trim: false })}
      </Text>
    );
  }
}

TimerDisplay.propTypes = {
  timeLeft: React.PropTypes.number.isRequired
};

