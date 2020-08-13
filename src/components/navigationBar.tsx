import React, { Component } from 'react';
import Category from './category';
import Footer from './footer';


interface INavigationProps {
  structure: IStructure;
}
interface INavigationState {}

export default class NavigationBar extends Component<INavigationProps, INavigationState> {
  getCategories(): React.ReactNode[] {
    let categories: React.ReactNode[] = [];

    if (this.props.structure.categories) {
      for (let category of this.props.structure.categories) {
        categories.push(<Category key={category.name} path={category.path} name={category.name} pages={category.pages}></Category>);
      }
    }

    return categories;
  }

  render(): JSX.Element {
    return(
      <div id='navigation'>
        <div id='navigation-content'>
          {this.getCategories()}
        </div>
        <Footer />
      </div>
    );
  }
}
