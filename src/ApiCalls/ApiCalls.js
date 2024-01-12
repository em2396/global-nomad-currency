
function getCurrency() {
    return  fetch('https://v6.exchangerate-api.com/v6/516b2360d76d3364e8dc234b/latest/USD')
        .then(response => {
            if(!response.ok) {
                console.log('error');
            }
            return response.json();
        });
};

export { getCurrency }