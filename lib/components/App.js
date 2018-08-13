import React from 'react';
import DataApi from '../DataApi';
import {data} from '../testData';
import ArticleList from './ArticleList';


const api = new DataApi(data);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      authors: api.getAuthors(),
      articles: api.getArticles(),
    };
  }

  articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId],
  };

  render(){
    return(
      <ArticleList articles={this.state.articles} articleActions={this.articleActions}/>
    );
  }
}

export default App;