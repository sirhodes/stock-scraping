const https = require('https');
const stockSymbols = [
  'TSLA'
];
stockSymbols.forEach(stockTicker => {
  https.get(
    `https://finance.yahoo.com/quote/${stockTicker}?p=${stockTicker}&.tsrc=fin-srch`,
    (res) => {
      res.on('data', d => {
        const matches = d.toString().match(/data-reactid=\"50\">(\d{1,}.\d{2})/);
        if (!matches) {
          return;
        }
        const [tagMatch, priceVal] = matches;
        if (tagMatch && priceVal) {
          console.log('%s | %s', stockTicker, priceVal);
        } else {
          
        }
      });
  });
});