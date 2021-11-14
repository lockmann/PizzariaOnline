const s = (el)=> document.querySelector(el);
const sa = (el)=> document.querySelectorAll(el);


pizzaJson.map((pizza, index)=>{
	let pizzaItem = s('.models .pizza-item').cloneNode(true);
	pizzaItem.querySelector('.pizza-item--img img').src = pizza.img;
	pizzaItem.querySelector('.pizza-item--name').innerHTML = pizza.name;
	pizzaItem.querySelector('.pizza-item--desc').innerHTML = pizza.description;
	pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${pizza.price.toFixed(2)}`;
	
	// seleciona o link atarvez da tag A, adiciona um evento click, cria-se a função do evento 
	pizzaItem.querySelector('a').addEventListener('click', (e)=>{
		//desabilita a função padrão do envento, no caso ao clicar ele não atualiza a tela. 
		e.preventDefault();


		s('.pizzaWindowArea').style.opacity = 0;
		s('.pizzaWindowArea').style.display = 'flex';
		setTimeout(()=>{
			s('.pizzaWindowArea').style.opacity = 1;
		}, 200)
		
	})

	s('.pizza-area').append(pizzaItem);
});