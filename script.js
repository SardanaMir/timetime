const yakutskHours = document.querySelector('.yakutskHours');
const yakutskMinutes = document.querySelector('.yakutskMinutes');

const petersburgHours = document.querySelector('.petersburgHours');
const petersburgMinutes = document.querySelector('.petersburgMinutes');

const bishkekHours = document.querySelector('.bishkekHours');
const bishkekMinutes = document.querySelector('.bishkekMinutes');
const bishkekSeconds = document.querySelector('.bishkekSeconds');


function time(){
    fetch("https://worldtimeapi.org/api/timezone/Asia/Bishkek")
        .then(response => response.json())
        .then(data => {
        let bishkek = data['datetime']

        let bishkekHoursData = `${bishkek[11]}${bishkek[12]}`
        bishkekHours.innerHTML = bishkekHoursData

        let bishkekMinutesData = `${bishkek[14]}${bishkek[15]}`
        bishkekMinutes.innerHTML = bishkekMinutesData

        let bishkekSecondsData = `${bishkek[17]}${bishkek[18]}`
        bishkekSeconds.innerHTML = bishkekSecondsData
        console.log(bishkek)
        console.log(`${bishkek[11]}${bishkek[12]}`);
        })
        .catch(error => {
        console.log(error);
        });

    fetch("https://worldtimeapi.org/api/timezone/Asia/Yakutsk")
        .then(response => response.json())
        .then(data => {
        let yakutskTime = data['datetime']

        let yakutskHoursData = `${yakutskTime[11]}${yakutskTime[12]}`
        yakutskHours.innerHTML = yakutskHoursData

        let yakutskMinutesData = `${yakutskTime[14]}${yakutskTime[15]}`
        yakutskMinutes.innerHTML = yakutskMinutesData
        })
        .catch(error => {
        console.log(error);
        });

    fetch("https://worldtimeapi.org/api/timezone/Europe/Moscow")
        .then(response => response.json())
        .then(data => {
        let petersburgTime = data['datetime']

        let petersburgHoursData = `${petersburgTime[11]}${petersburgTime[12]}`
        petersburgHours.innerHTML = petersburgHoursData

        let petersburgMinutesData = `${petersburgTime[14]}${petersburgTime[15]}`
        petersburgMinutes.innerHTML = petersburgMinutesData
        })
        .catch(error => {
        // Обработка ошибок
        console.log(error);
        });

}

time()

