// console.log('button clicking file added');
// document.getElementById('id').addEventListener('click', function(){})


// search: form submit reloading the page


// Step 1: Set event handler

// document.getElementById('btn-login')
//     .addEventListener('click', function(event){
//         // Event default behavior prevention
//         event.preventDefault(); // <---------- bhejal to beginners

//         // Step 3: get the phone number and the pin number

//         const phoneNumber = document.getElementById('phone-number').value;
//         const pinNumber = document.getElementById('pin-number').value;
//         console.log(phoneNumber, pinNumber);

//         // Step 4: validate phone and pin
//         // this is not the ultimate way this is the temporary way
//         if(phoneNumber === '5' && pinNumber === '1234'){
//             console.log('You are logged in');

//         }
//         else{
//             alert('Wrong Phone Number Or Pin')
//         }

//         // Step 5: allow user to enter the website

// })


document.getElementById('btn-login')
    .addEventListener('click', function (event) {
        event.preventDefault();
        
        
        // get phone number and pin

        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin-number').value;
        console.log(phoneNumber, pinNumber);
        
        // bad way to validate

        if(phoneNumber === '01300453284' && pinNumber === '1234'){
            console.log('you are logged in');
            window.location.href = './home.html'
            
        }
        else{
            alert('please enter the correct phone number or pin')
        }
    })