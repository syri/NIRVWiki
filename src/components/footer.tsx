import React, { Component } from 'react';


export default class Footer extends Component {
  render(): JSX.Element {
    return(
      <div id='footer'>
        <div id='footer-content' className='unselectable'>© NIRV Team, 2020</div>
      </div>
    );
  }
}
