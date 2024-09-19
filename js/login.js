// console.log('button clicking file added');
// document.getElementById('id').addEventListener('click', function(){})


// search: form submit reloading the page


// Step 1: Set event handler

document.getElementById('btn-login')
    .addEventListener('click', function(event){
        // Event default behavior prevention
        event.preventDefault(); // <---------- bhejal to beginners
        console.log('login button clicked');

        // Step 3: get the phone number

        const phoneNumber = document.getElementById('phone-number').value;
        console.log(phoneNumber)
        
})