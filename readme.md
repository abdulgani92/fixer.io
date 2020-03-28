Fixer API
Powered by 15+ exchange rate data sources, the Fixer API is capable of delivering real-time exchange rate data for 170 world currencies. 

Installing

Using npm:
$ npm install axios

Example

API KEY

To get your free api key, register on the following website https://fixer.io/product

Current Exchange Rates

const fixer = require('fixer.io');

const FIXER_API_KEY = ‘REPLACE_WITH_YOUR_FIXER_API_KEY’

(async ()=>{
    try{
        const response = await fixer.currentRates(FIXER_API_KEY);
        console.log(response);
    }catch(error){
        console.log(error);
    }
})();


For more details visit : https://fixer.io 


