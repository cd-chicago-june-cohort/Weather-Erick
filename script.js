$(document).ready(function() {

    var link = 'http://api.openweathermap.org/data/2.5/weather?q=';
    var city;
    var key = '310a01adc437746e310273be3584d6dc'; 
    var appid = '&appid=';
    var k;
    var f;
    var newTemp;

    $('form').submit(function() {
        
        city = $('#text').val();

        function conversion(current){
            current = ((current-273.15)*1.8)+32;
            return Math.floor(current);
        }

        $.get((link+city+appid+key), function(res) {
        
            console.log(res);
            k = res.main.temp;
            f = conversion(k);

            $('#weatherInfo').html('');
            $('#weatherInfo').append('<h1>' + city + '</h1>');
            $('#weatherInfo').append('<h3 id="city">Temperature:&nbsp' + f + '</h3>');
        }, 'json');
        return false;
    });
});