class PicturesService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.URL = 'http://jsonplaceholder.typicode.com';
  }

  list() {
    return this.$http.get(`${this.URL}/photos`).then(result => result.data);
  }

  album(id) {
    return this.$http.get(`${this.URL}/albums/${id}/photos`).then(result => result.data);
  }

  detail(id) {
    return this.$http.get(`${this.URL}/photos/${id}`).then(result => result.data);
  }
}

export default PicturesService;
