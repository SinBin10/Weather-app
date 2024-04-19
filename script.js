const search = document.querySelector('.search-btn');
search.addEventListener('click',()=>{
    const cityname = document.querySelector('.search-box').value;
    async function fetchdata(){
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=f01dd81bf629c4ffb90341242993fcce&units=metric`;
        const res = await fetch(apiUrl);
        if(res.status === 404){
            console.log('Wrong city name...');
            return;
        }
        const data = await res.json();
        document.querySelector('.city').innerText = data.name;
        document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}&degc`;
        document.querySelector('.percent-num').innerText = data.main.humidity+"%";
        document.querySelector('.percent-wind').innerText = Math.round(data.wind.speed)+" km/h";
        document.querySelector('.sunny').src = `Images/${data.weather[0].main}.png`;
        console.log(data);
    }
    fetchdata();
});