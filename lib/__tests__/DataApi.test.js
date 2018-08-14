import DataApi from 'state-api';
import {data} from '../testData';

describe('Jest Canary Test',()=> {
  test('Should Pass', () => {
    expect(true).toBe(true);
  });
});

const api = new DataApi(data);

describe('DataApi Test', () =>{
  test('Articles should be exposed as an Object', () =>{
    const articles = api.getArticles();
    const articleId = data.articles[0].id;
    const articleTitle = data.articles[0].title;

    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toBe(articleTitle);


  });
  test('Authors should be exposed as an Object', () =>{
    const authors = api.getAuthors();
    const authorId = data.authors[0].id;
    const authorFirstName = data.authors[0].firstName;
    expect(authors).toHaveProperty(authorId);
    expect(authors[authorId].firstName).toBe(authorFirstName);
  });
});