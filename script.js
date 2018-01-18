var validationForm = document.createElement('FORM');
validationForm.name = 'login';
validationForm.onsubmit = validate;

var age = document.createElement('INPUT');
age.name = 'age';
age.type = 'number';
age.className = 'form-control';
age.placeholder = 'Input your age';
validationForm.appendChild(age);

var username = document.createElement('INPUT');
username.name = 'username';
username.type = 'text';
username.className = 'form-control';
username.placeholder = 'Input your username. e.g. user_myname';
validationForm.appendChild(username);

var date = document.createElement('INPUT');
date.name = 'date';
date.type = 'text';
date.placeholder = 'Input current date: dd/mm/yyyy';
date.className = 'form-control';
validationForm.appendChild(date);

var submit = document.createElement('INPUT');
submit.name = 'submit';
submit.type = 'submit';
submit.className = 'btn btn-success';
submit.value = 'Validate Me';
validationForm.appendChild(submit);

window.onload = function() {
    document.body.appendChild(validationForm);
};






function validate(form) {
    var username = document.forms['login']["username"].value;
    var age = document.forms['login']["age"].value;
    var date = document.forms['login']["date"].value;
if (age == "" || date == "" || username == "") {
    alert("Please fill in all fields");
    return false;
    
} 
if (! /^[0-9]+$/.test(age)) {
    alert("Age can contain only numbers");
    return false;
    }
    
if (!username.startsWith('user_')) {
    alert("Username must start with 'user_'");
    return false;
    
}
if (date !== moment().format('DD/MM/YYYY') && moment()){
alert('Please, input current date in this format: dd/mm/yyyy');
return false;
}

alert("Validation completed successfully");
}
