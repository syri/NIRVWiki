import React, { Component } from 'react';


interface INavigationHeaderProps {}
interface INavigationHeaderState {}

export default class NavigationFooter extends Component<INavigationHeaderProps, INavigationHeaderState> {
  render(): JSX.Element {
    return(
      <div id='navigation-footer'>
        <div id='navigation-footer-content' className='unselectable'>© NIRV Team, 2020</div>
      </div>
    );
  }
}
