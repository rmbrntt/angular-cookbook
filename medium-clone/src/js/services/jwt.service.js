export default class JWT {
  constructor(AppConstants, $window) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._window = $window;
  }

  save(token){
    this._window.localStorage[this._AppConstants.jwtKey] = token;
  }

  get(){
    this._window.localStorage[this._AppConstants.jwtKey];
  }

  destroy(){
    this._window.localStorage.removeItem(this._AppConstants.jwtKey);
  }
}
