import React, { Component } from 'react';

import Logo from '../assets/logo-simple.png';


interface IHeaderPageProps {}
interface IHeaderPageState {}

export default class Header extends Component<IHeaderPageProps, IHeaderPageState> {
  private navigationOpen: boolean;

  constructor(props: IHeaderPageProps) {
    super(props);

    this.navigationOpen = true;

    window.addEventListener('resize', () => this.resize());
    window.addEventListener('orientationchange', () => this.resize());
  }

  componentDidMount(): void {
    this.resize();
  }

  componentWillUnmount(): void {
    window.removeEventListener('resize', () => this.resize());
    window.removeEventListener('orientationchange', () => this.resize());
  }

  toggleNavigation(): void {
    if (this.navigationOpen) this.hideNavigation(true);
    else this.showNavigation(true);
  }

  showNavigation(setContentVisibility: boolean = false): void {
    let navigationBar = document.getElementById('navigation');
    let wikiPageContent = document.getElementById('content');

    this.navigationOpen = true;

    if (navigationBar) navigationBar.style.display = 'flex';
    if (wikiPageContent && setContentVisibility) wikiPageContent.style.display = 'none';
  }

  hideNavigation(setContentVisibility: boolean = false): void {
    let navigationBar = document.getElementById('navigation');
    let wikiPageContent = document.getElementById('content');

    this.navigationOpen = false;

    if (navigationBar) navigationBar.style.display = 'none';
    if (wikiPageContent && setContentVisibility) wikiPageContent.style.display = 'flex';
  }

  resize(): void {
    if (window.innerWidth <= 425) this.hideNavigation();

    if (!this.navigationOpen && window.innerWidth > 425) {
      let wikiPageContent = document.getElementById('content');

      this.showNavigation();

      if (wikiPageContent) wikiPageContent.style.display = 'block';
    }
  }

  onHeaderClicked() {
    window.location.hash = '#/';
    window.location.reload();
  }

  render(): JSX.Element {
    return(
      <div id='header' className='unselectable'>
        <div id='header-menu' onClick={() => this.toggleNavigation()}>☰</div>
        <img id='header-logo' src={Logo} alt='Logo' />
        <h1 onClick={() => this.onHeaderClicked()}>NIRV Wiki</h1>
      </div>
    );
  }
}

