import React, { Component } from 'react';
import NavigationPage from './navigationPage';


interface INavigationCategoryProps {
  name: string;
  path: string;
  pages: IPage[];
}
interface INavigationCategoryState {
  visible: boolean;
}

export default class NavigationCategory extends Component<INavigationCategoryProps, INavigationCategoryState> {
  constructor(props: INavigationCategoryProps) {
    super(props);

    this.state = {
      visible: this.props.name === 'default' ? true : false
    };
  }

  componentDidMount(): void {
    let categorySaveValue = window.localStorage.getItem(`${this.props.name}-categoryOpen`);

    this.setState({ visible: JSON.parse(categorySaveValue ? categorySaveValue : 'false') });
  }

  getPages(): React.ReactNode[] {
    let pages: React.ReactNode[] = [];

    for (let page of this.props.pages) {
      pages.push(<NavigationPage key={page.name} category={this.props.path} name={page.name} file={page.file} />);
    }

    return pages;
  }

  toggleVisibility(): void {
    this.setState({ visible: !this.state.visible }, () => {
      window.localStorage.setItem(`${this.props.name}-categoryOpen`, JSON.stringify(this.state.visible));
    });
  }

  render(): JSX.Element {
    return (
      <div className='navigation-category unselectable'>
        {this.props.name !== 'default'
        ? <div className='navigation-category-name' onClick={() => this.toggleVisibility()}><span className='arrow'>{this.state.visible ? '▲' : '▼'}</span>{this.props.name}</div>
        : null}
        {this.state.visible || this.props.name === 'default' ? this.getPages() : null}
      </div>
    );
  }
}