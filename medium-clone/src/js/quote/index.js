import angular from 'angular';

let quoteModule = angular.module('app.quote', []);

import QuoteCtrl from './quote.controller';
quoteModule.controller('QuoteCtrl', QuoteCtrl);

import QuoteConfig from './quote.config';
quoteModule.config(QuoteConfig);

export default quoteModule;
