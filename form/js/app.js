
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	validate();
});
const setErrorFor=(input, message) =>  {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.classList.add('error')  ;
    formControl.classList.remove('success')  ;
    small.innerText = message;
}

const setSuccessFor=input=> {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.classList.add('success')  ;
    formControl.classList.remove('error')  ;
    small.innerText = '';

};
function validate(){
    const regexuser =/^(?:[a-zA-Z])[\w]{6,}$/;
    const regexpass =/^[-.\w]+@([\w-]+\.)+[\w-]{2,15}$/;
    const regexemail =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[^\W_]{6,10}$/;
    if(!regexuser.test(username.value)){
        setErrorFor(username, 'Username cannot be blank');
    }
    else {
        setSuccessFor(username);
    }
    if(!regexemail.test(email.value)){
        setErrorFor(email, 'Email cannot be blank');
    }
    else {
        setSuccessFor(email);
    }
    if(!regexpass.test(password.value)){
        setErrorFor(password, 'Password cannot be blank');
    }
    else {
        setSuccessFor(password);
    }
    
};
