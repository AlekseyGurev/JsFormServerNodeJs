function createForm(){
	document.getElementById('form-container').innerHTML = '';
	
	let form = document.createElement("form");
	form.setAttribute('method',"post");
	form.setAttribute('action',"post.php");
	form.classList.add('style-form');

	var emailInput = document.createElement("input");
	emailInput.type = "text";
	emailInput.name = "email";
	emailInput.id = "email";
	emailInput.classList.add('style-form__input');

	var emailLabel = document.createElement("label");
	emailLabel.innerHTML = 'Введите Ваш email / Your email:';
	emailLabel.for="email";

	var containerEmail = document.createElement("p");
	containerEmail.appendChild(emailLabel);
	containerEmail.appendChild(emailInput);


	var inputSubmit = document.createElement("a");
	inputSubmit.innerHTML ="Войти / Зарегистрироваться";
	inputSubmit.id ='button';
	inputSubmit.classList.add('input-submit');
	inputSubmit.onclick = function (){
		if (emailInput.value != ''){
      send_email();
		}
	}

	var containerSubmit = document.createElement("p");
	containerSubmit.appendChild(inputSubmit);

  form.appendChild(containerEmail);
	form.appendChild(containerSubmit);
	
	document.getElementById('form-container').appendChild(form);
}

function send_email(){
	var formData = {
    email: document.getElementById('email').value,
		surname:' ',
    name:' ',
    data: new Date().toJSON().slice(0,10).replace(/-/g,'.')
	}
	// console.log(formData);
	post('http://192.168.3.143:8585/api/user', JSON.stringify(formData), function (data){
		var result = JSON.parse(data);
		console.log(result);
		if (result.result == 'success'){
			// console.log(result);
			// qtlOnFormSent();
		}
		else{
			// console.log(result.result);
		}
	});
}

function post(url, data, callback){
	var request = new XMLHttpRequest();
	request.open('POST', url, true);
	request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
	request.onload = function() {
	  if (request.status >= 200 && request.status < 400) {
			console.log('Свя');
		if (callback) callback(request.responseText);
	  } else {
		  console.error('POST: Error loading ', request.status);
	  }
	};
	request.onerror = function() {
	  console.error('POST: Conn error ', url);
	};
	request.send(data);
}

createForm();