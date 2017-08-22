function QuoteConfig($stateProvider){
  'ngInject';

  $stateProvider
  .state('app.quote', {
    url: '/quote',
    templateUrl: 'quote/quote.html',
    controller: 'QuoteCtrl',
    controllerAs: '$ctrl'
  })
}

export default QuoteConfig;
