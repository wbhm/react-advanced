class StateApi{
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
    };
  }

  mapIntoObject(array) {
    return array.reduce((accumulator, currentItem) => {
      accumulator[currentItem.id] = currentItem;
      return accumulator;
    }, {});
  }

  lookupAuthor = (authorId) =>{
    return this.data.authors[authorId];
  };
  getState = () =>{
    return this.data;
  };
}

export default StateApi;