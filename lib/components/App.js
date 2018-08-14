import React from 'react';
import DataApi from 'state-api';
import ArticleList from './ArticleList';
import axios from 'axios';

class App extends React.Component {
  state = {
    articles: this.props.initialData.articles,
    authors: this.props.initialData.authors,
  };
  async componentDidMount(){
    const resp = await axios.get('/data');
    const api = new DataApi(resp.data);

    this. setState(()=>{
      return{
        articles: api.getArticles(),
        authors: api.getAuthors(),
      };
    });
  }

  articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId],
  };

  render(){
    //debugger; <- is data being retrieved twice??
    return(
      <ArticleList
        articles={this.state.articles}
        articleActions={this.articleActions} />
    );
  }
}

export default App;