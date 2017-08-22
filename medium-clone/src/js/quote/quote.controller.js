class QuoteCtrl {
  constructor(Quote){
    'ngInject';

    this._Quote = Quote;
  }

  getQuote() {
    return this._Quote.get().then(
      data => {this.quote = data[0]},
      err => {this.errors}
    )
  }
}

export default QuoteCtrl;
