
let f1 = document.forms.f1;
console.log(f1)


// Option 1 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

f1.get.addEventListener('click', function(){
	if(f1.login.value){
		let login = f1.login.value;
	f1.loginMove.value = login;
	}
	f1.login.value ='';
})

//Option 2 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const form = document.querySelector('#f1');

// f1.addEventListener('submit', function(event){
// event.preventDefault();
// 	if(f1.login.value){
// 		let login = f1.login.value;
// 	f1.loginMove.value = login;
// 	}
// 	f1.login.value ='';
// })


let f2 = document.forms.f2;
console.log(f2)

f2.info.addEventListener('blur', function () {
	if (f2.info.value) {
		document.getElementsByName('info')[0].placeholder = f2.info.value;
	}
	// f2.info.value = '';
	f2.reset()
})

