import React, { Component } from 'react';

import Logo from '../assets/logo-simple.png';


interface INavigationHeaderProps {}
interface INavigationHeaderState {}

export default class NavigationHeader extends Component<INavigationHeaderProps, INavigationHeaderState> {
  render(): JSX.Element {
    return(
      <div id='navigation-header'>
        <img id='navigation-header-logo' className='unselectable' src={Logo} alt='Logo' draggable={false} />
      </div>
    );
  }
}
