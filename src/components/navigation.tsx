import React, { Component } from 'react';
import NavigationCategory from './navigationCategory';
import NavigationFooter from './navigationFooter';
import NavigationHeader from './navigationHeader';


interface INavigationProps {
  structure: IStructure;
}
interface INavigationState {}

export default class Navigation extends Component<INavigationProps, INavigationState> {
  getCategories(): React.ReactNode[] {
    let categories: React.ReactNode[] = [];

    if (this.props.structure.categories) {
      for (let category of this.props.structure.categories) {
        categories.push(<NavigationCategory key={category.name} path={category.path} name={category.name} pages={category.pages} />);
      }
    }

    return categories;
  }

  render(): JSX.Element {
    return(
      <div id='navigation'>
        <NavigationHeader />
        <div id='navigation-container'>
          <div id='navigation-content'>
            {this.getCategories()}
          </div>
          <NavigationFooter />
        </div>
      </div>
    );
  }
}
