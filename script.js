const s = (el)=> document.querySelector(el);
const sa = (el)=> document.querySelectorAll(el);


pizzaJson.map((pizza, index)=>{
	let pizzaItem = s('.models .pizza-item').cloneNode(true);
	pizzaItem.querySelector('.pizza-item--img img').src = pizza.img;
	pizzaItem.querySelector('.pizza-item--name').innerHTML = pizza.name;
	pizzaItem.querySelector('.pizza-item--desc').innerHTML = pizza.description;
	pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${pizza.price.toFixed(2)}`;
	s('.pizza-area').append(pizzaItem);
});