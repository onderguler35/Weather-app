var apiKey = '0d508fa81be5321b90982c140877c396';
var city = $('#search-input');
var searchButton = $('#search-button');
var baseURL = 'https://api.openweathermap.org/data/2.5/'
var currentURL = baseURL + 'weather?appid=0d508fa81be5321b90982c140877c396&units=metric&q=+${city}';
var forecastURL= baseURL + 'forecast?appid=0d508fa81be5321b90982c140877c396}&units=metric&';

searchButton.click(function (event) {
        event.preventDefault();
        $.get(currentURL+ city)
        .then(function(currentData){
            console.log(currentData);
        })

})
