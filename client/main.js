const complimentBtn = document.querySelector("#complimentButton");
const fortuneBTn = document.querySelector("#getfortuneButton");
const adviceBtn = document.querySelector("#getadviceButton");
const hikingtrailBtn = document.querySelector("#hikingTrailButton");
const worldTimeBtn = document.querySelector("#worldtimeButton");
const weatherBtn = document.querySelector('#weatherButton');

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune")
        .then (res => {
            const data = res.data;
            alert(data);
        });
};

const getAdvice = () => {
    axios.get("http://localhost:4000/api/advice")
        .then (res => {
            const data = res.data;
            alert(data);
        });
};

const gethikingTrails = () => {
    axios.get("http://localhost:4000/api/hikingtrail")
        .then (res => {
            const data = res.data;
            alert(data);
        });
};

const getWeather = () => {
    axios.get('https://api.open-meteo.com/v1/forecast?latitude=34.0522&longitude=-118.2437&hourly=temperature_2m')
        .then(res => {
            const temperature = res.data.hourly.temperature_2m[0];
            alert(`The current temperature in Los Angeles is ${temperature} C`);
        })
}

const getWorldTime = () => {
    axios.get("http://worldtimeapi.org/api/timezone/America/Los_Angeles")
        .then (res => {
            const datetime = new Date(res.data.datetime);
            alert(`The current time in Los Angeles is ${datetime.toLocaleString()}`);
        });
}

complimentBtn.addEventListener('click', getCompliment);
fortuneBTn.addEventListener('click', getFortune);
adviceBtn.addEventListener('click', getAdvice);
hikingtrailBtn.addEventListener('click', gethikingTrails);
worldTimeBtn.addEventListener('click', getWorldTime);
weatherBtn.addEventListener('click', getWeather);
