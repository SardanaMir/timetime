const yakutskHours = document.querySelector('.yakutskHours');
const yakutskMinutes = document.querySelector('.yakutskMinutes');

const petersburgHours = document.querySelector('.petersburgHours');
const petersburgMinutes = document.querySelector('.petersburgMinutes');
const petersburgSeconds = document.querySelector('.petersburgSeconds');

const bishkekHours = document.querySelector('.bishkekHours');
const bishkekMinutes = document.querySelector('.bishkekMinutes');
const bishkekSeconds = document.querySelector('.bishkekSeconds');

const asia = 'Asia';
const europe = 'Europe';

//interval
const oneSec = 1000;

function time(url, area, city, hours, minutes, seconds){
    fetch(`${url}/${area}/${city}`)
        .then(response => response.json())
        .then(data => {
        let datetime = data['datetime']
        hours.innerHTML = `${datetime[11]}${datetime[12]}`;
        minutes.innerHTML = `${datetime[14]}${datetime[15]}`;
        // seconds.innerHTML = `${datetime[17]}${datetime[18]}`;
        })
        .catch(error => {
            console.log(error);
        });
}

setInterval (() => {
    time(URL, europe, 'Moscow', petersburgHours, petersburgMinutes)
    time(URL, asia, 'Yakutsk', yakutskHours, yakutskMinutes)
    time(URL, asia, 'Bishkek', bishkekHours, bishkekMinutes)
}, oneSec);


