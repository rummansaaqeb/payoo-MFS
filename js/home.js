// add money to the account
/**
 * Step 1: Add event handler
 * prevent page reload after form submit
 * 
 * Step 2: get money to be added to the account balance
 */

// Step 1: Add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function(event){
    // Prevent Page reload after form submit
    event.preventDefault();

    // Step 2: get money to be added to the account balance

    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    // get the pin number provided

    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);
    
})
