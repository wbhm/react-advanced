class DataApi{
  constructor(rawData) {
    this.rawData = rawData;
  }

  mapIntoObject(array) {
    return array.reduce((accumulator, currentItem) => {
      accumulator[currentItem.id] = currentItem;
      return accumulator;
    }, {});
  }

  getArticles(){
    return this.mapIntoObject(this.rawData.articles);
  }
  getAuthors(){
    return this.mapIntoObject(this.rawData.authors);
  }
}

export default DataApi;