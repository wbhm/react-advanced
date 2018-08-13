import React from 'react';
import ArticleList from '../ArticleList';
import renderer from 'react-test-renderer';
//import * as jest from 'jest';

describe('ArticleList Tests', ()=>{
  const testProps = {
    articles: {
      a: {id: 'a'},
      b: {id: 'b'},
    },
    articleActions: {
      lookupAuthor:  jest.fn(() => ({})),
    }
  };
  it('renders correctly', ()=>{
    const tree = renderer.create(
      <ArticleList {...testProps}/>
    ).toJSON();
    console.log(tree);
  });
});