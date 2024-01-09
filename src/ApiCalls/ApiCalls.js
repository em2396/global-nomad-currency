
function getCurrency() {
    return  fetch('https://v6.exchangerate-api.com/v6/516b2360d76d3364e8dc234b/latest/USD')
        .then(response => {
            if(!response.ok) {
                console.log('error')
            }
            return response.json();
        })
}

function getConversion() {
    //will need to input two parameters and use string interpolation
   return fetch('https://v6.exchangerate-api.com/v6/516b2360d76d3364e8dc234b/pair/EUR/GBP')
        .then(response => {
            if(!response.ok) {
                console.log('err') 
            }
            return response.json()
        })
}

//Currency data
//base_code
// : 
// "USD"
// conversion_rates
// : 
// {USD: 1, AED: 3.6725, AFN: 71.3091, ALL: 96.2333, AMD: 405.4346, …}
// documentation
// : 
// "https://www.exchangerate-api.com/docs"
// result
// : 
// "success"
// terms_of_use
// : 
// "https://www.exchangerate-api.com/terms"
// time_last_update_unix
// : 
// 1704672001
// time_last_update_utc
// : 
// "Mon, 08 Jan 2024 00:00:01 +0000"
// time_next_update_unix
// : 
// 1704758401
// time_next_update_utc
// : 
// "Tue, 09 Jan 2024 00:00:01 +0000"
// [[Prototype]]
// : 
// Object

//conversion data
//{
//     "result": "success",
//     "documentation": "https://www.exchangerate-api.com/docs",
//     "terms_of_use": "https://www.exchangerate-api.com/terms",
//     "time_last_update_unix": 1704672001,
//     "time_last_update_utc": "Mon, 08 Jan 2024 00:00:01 +0000",
//     "time_next_update_unix": 1704758401,
//     "time_next_update_utc": "Tue, 09 Jan 2024 00:00:01 +0000",
//     "base_code": "EUR",
//     "target_code": "GBP",
//     "conversion_rate": 0.861
// }

export { getCurrency, getConversion }