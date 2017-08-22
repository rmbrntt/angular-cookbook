export default class QuoteService {
  constructor($http) {
    'ngInject';

    this._$http = $http;

  }

  get() {
    return this._$http({
      url: 'http://127.0.0.1:8000/api/quotes',
      method:'GET'
    }).then(res => { console.log(res.data); return res.data})
  };

}
