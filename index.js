
const BASE_URL = `https://data.fixer.io/api`;
const axios = require('axios').default;
const KEY_UNDEFIND_ERROR = {
    "success": false,
    "error": {
        "code": 101,
        "info": "No API Key was specified or an invalid API Key was specified."
    }
}

exports.currentRates = (API_KEY) => {
    return new Promise(async (resolve, reject) => {
        
        //if api key is not passed...
        if (API_KEY === undefined) {
            reject(KEY_UNDEFIND_ERROR);
        }

        //Making Api Call if Key is passed...
        try {
            const result = await axios.get(`${BASE_URL}/latest?access_key=${API_KEY}`);
            resolve(result.data);
        } catch (error) {
            console.log(error);
            reject(error.response);
        }
    });
}