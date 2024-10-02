const request = require('request');

const options = {
  method: 'GET',
  url: 'https://yh-finance.p.rapidapi.com/stock/v3/get-statistics',
  qs: {symbol: 'JD'},
  headers: {
    'x-rapidapi-key': 'cba0f61474msh5dd63d1fa7db0edp1c5222jsn0858d4b85ca7',
    'x-rapidapi-host': 'yh-finance.p.rapidapi.com'
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});