let modalQt = 1;

const s = (el)=> document.querySelector(el);
const sa = (el)=> document.querySelectorAll(el);


pizzaJson.map((pizza, index)=>{
	let pizzaItem = s('.models .pizza-item').cloneNode(true);

	pizzaItem.setAttribute('data-key', index);
	pizzaItem.querySelector('.pizza-item--img img').src = pizza.img;
	pizzaItem.querySelector('.pizza-item--name').innerHTML = pizza.name;
	pizzaItem.querySelector('.pizza-item--desc').innerHTML = pizza.description;
	pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${pizza.price.toFixed(2)}`;
	
	// seleciona o link atarvez da tag A, adiciona um evento click, cria-se a função do evento 
	pizzaItem.querySelector('a').addEventListener('click', (e)=>{
		//desabilita a função padrão do envento, no caso ao clicar ele não atualiza a tela. 
		e.preventDefault();
		let key = e.target.closest('.pizza-item').getAttribute('data-key');
		modalQt = 1;
		s('.pizzaBig img').src = pizzaJson[key].img;
		s('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
		s('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
		s('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;
		s('.pizzaInfo--size.selected').classList.remove('selected');
		sa('.pizzaInfo--size').forEach((size, sizeIndex)=>{
			if(sizeIndex == 2){
				size.classList.add('selected');
			}
			size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
		});

		s('.pizzaInfo--qt').innerHTML = modalQt;

		s('.pizzaWindowArea').style.opacity = 0;
		s('.pizzaWindowArea').style.display = 'flex';
		setTimeout(()=>{
			s('.pizzaWindowArea').style.opacity = 1;
		}, 200)
		
	})

	s('.pizza-area').append(pizzaItem);
});

function closeModal (){
	s('.pizzaWindowArea').style.opacity = 0;
	setTimeout(()=>{
		s('.pizzaWindowArea').style.display = 'none';
	}, 200)
}

sa('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item)=>{
	item.addEventListener('click', closeModal);
})

s('.pizzaInfo--qtmenos').addEventListener('click', ()=>{
	if(modalQt > 1 ){
		modalQt--;
		s('.pizzaInfo--qt').innerHTML = modalQt;
	}
})

s('.pizzaInfo--qtmais').addEventListener('click', ()=>{
	modalQt++;
	s('.pizzaInfo--qt').innerHTML = modalQt;
})

sa('.pizzaInfo--size').forEach((size, sizeIndex)=>{
	size.addEventListener('click', (e)=>{
		s('.pizzaInfo--size.selected').classList.remove('selected');
		size.classList.add('selected');
	})
});