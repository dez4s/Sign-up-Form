const inputs = document.querySelectorAll('input:not([id="pass-confirm"])');

console.log(inputs);

inputs.forEach(input => {
    const paraInput = input.nextElementSibling;

    input.addEventListener('blur', (e) => {
        if (!e.target.validity.valid && e.target.value) {
            paraInput.textContent = e.target.title;
            if (!e.target.title) {
                paraInput.textContent = e.target.validationMessage;
            }
        }
    });

    input.addEventListener('input', (e) => {
        if (e.target.validity.valid) {
            paraInput.textContent = "";
        }
    })
});

const passConfirm = document.getElementById('pass-confirm');
const pass = document.getElementById('pass');
const paraConfirm = passConfirm.parentElement.lastElementChild;

// passConfirm.addEventListener('blur', (e) => {

//     if ((passConfirm.value !== pass.value) && pass.value) {
//         passConfirm.setCustomValidity('Passwords do not match');
//         paraConfirm.textContent = passConfirm.validationMessage;
//         passConfirm.style.border = "1px solid red";
//     } 
// });

passConfirm.addEventListener('input', () => {
    
    if ((passConfirm.value !== pass.value) && pass.value) {
        passConfirm.setCustomValidity('Passwords do not match');
        paraConfirm.textContent = passConfirm.validationMessage;
        passConfirm.style.border = "1px solid red";
    } 

    if ((passConfirm.value === pass.value) && pass.value && passConfirm.value) {
        passConfirm.setCustomValidity('');
        paraConfirm.textContent = "";
        passConfirm.style.border = "1px solid green";
    }

    if (!pass.value && passConfirm.value) {
        passConfirm.setCustomValidity('Please enter a password first');
        paraConfirm.textContent = passConfirm.validationMessage;
        passConfirm.style.border = "1px solid red";
    }
    
});

pass.addEventListener('input', () => {
    paraConfirm.textContent = "";
    if (passConfirm.value && (passConfirm.value === pass.value)) {
        passConfirm.setCustomValidity('');
        paraConfirm.textContent = "";
        passConfirm.style.border = "1px solid green";
    } else if ((passConfirm.value !== pass.value) && passConfirm.value) {
        passConfirm.setCustomValidity('Passwords do not match');
        paraConfirm.textContent = passConfirm.validationMessage;
        passConfirm.style.border = "1px solid red";
    } 
});