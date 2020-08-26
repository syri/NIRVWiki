import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';
import Navigation from './navigation';


interface IWikiPageProps {}
interface IWikiPageState {
  structure: IStructure;
  currentPage?: { page: IPage, content?: string };
}

export default class WikiPage extends Component<IWikiPageProps, IWikiPageState> {
  pagesDirectory: string;
  
  constructor(props: IWikiPageProps) {
    super(props);

    this.pagesDirectory = 'pages/';

    this.state = {
      structure: {}
    };
  }

  componentDidMount(): void {
    fetch('/structure.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ structure: data }, () => this.getPageContent());
      }
    );
  }

  getPageContent(): void {
    let pageToLoad = window.location.hash.substring(2);
    let foundPage = false;

    let loadFile = async (file: string) => {
      let response = await fetch(`/${file.trim()}`);
      
      return response.text();
    }

    if (pageToLoad && this.state.structure.categories) {
      for (let category of this.state.structure.categories) {
        for (let page of category.pages) {
          if (category.path + page.file.slice(0, -3) === pageToLoad) {
            loadFile(this.pagesDirectory + category.path + page.file).then(data => {
              this.setState({ currentPage: { page: { name: page.name, file: page.file }, content: data } });
            });

            foundPage = true;
          }
        }
      }
    }

    if (!foundPage && this.state.structure.categories) {
      if (window.location.hash !== '#/') window.location.hash = '#/';

      for (let category of this.state.structure.categories) {
        for (let page of category.pages) {
          if (page.home) loadFile(this.pagesDirectory + category.path + page.file).then(data => {
            this.setState({ currentPage: { page: { name: page.name, file: page.file }, content: data } })
          });
        }
      }
    }
  }

  render(): JSX.Element {
    return(
      <div id='wiki-page'>
        <Navigation structure={this.state.structure} />
        <div id='content'>
          <Markdown>{this.state.currentPage ? this.state.currentPage.content : ''}</Markdown>
        </div>
      </div>
    );
  }
}
