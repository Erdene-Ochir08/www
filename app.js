// API -> tusgailan hadgalsan medeeleliig holbogch
// fetch() -> api ruu huselt ywuulna
// promise -> nadad hariu irne gesen amlalt
// .then() -> promise 
// response -> 200 : approved, 404,300,500 : error
// json() -> zambaraagui medeeleliig tsegtstei gargaj irne
fetch('https://fakestoreapi.com/products').then(
	response => response.json()
).then(
	product =>{
		console.log(product);
		console.log(product[0].title);
		console.log(product[product.length-1].rating.rate);
	}
);
// name,temp,description,wind speed
var input = document.getElementsByTagName('input')[0];
var country = document.querySelector(".name");
var temp = document.querySelector(".temp");
var desc = document.querySelector(".desc");
var speed = document.querySelector(".speed");
function srch(){
	var city = input.value;
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9ac1f5c2d6508db3c616a0d1f80a08fd`).then(
		response => response.json()
	).then(
		data => {
			country.innerText= data.name;
			temp.innerText= data.main.temp;
			desc.innerText= data.weather[0].description;
			speed.innerText= data.wind.speed;
			document.getElementsByTagName('img')[0].style.width="300px";
			//Sunny,Rain,Clouds,Snow,Haze
			switch(data.weather[0].main){
				case "Clouds":
					document.getElementsByTagName('img')[0].src="cloud.png";
					break;
			}
		}
	);
}
