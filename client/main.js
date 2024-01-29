const { default: axios } = require("axios");

const complimentBtn = document.querySelector("#complimentButton");
const fortuneBTn = document.querySelector("#getfortuneButton");
const adviceBtn = document.querySelector("#getadviceButton");
const hikingtrailBtn = document.querySelector("#hikingTrailButton");
const worldTimeBtn = document.querySelector("#worldtimeButton");

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

const getWorldTime = () => {
    axios.get(" http://worldtimeapi.org/api/timezone/Ameria/Los_Angeles")
        .then (res => {
            const data = res.data;
            alert(data);
        });
}

complimentBtn.addEventListener('click', getCompliment);
fortuneBTn.addEventListener('click', getFortune);
adviceBtn.addEventListener('click', getAdvice);
hikingtrailBtn.addEventListener('click', gethikingTrails);
worldTimeBtn.addEventListener('click', getWorldTime);
