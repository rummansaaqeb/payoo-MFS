// add money to the account
/**
 * Step 1: Add event handler
 * prevent page reload after form submit
 * 
 * Step 2: get money to be added to the account balance
 * 
 *get the pin number
 *
 * step 3 : verify the pin number
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
    
    // Step 3 : Verify The Pin Number
    // wrong way to validate pin number
    if(pinNumberInput === '1234'){
        console.log("Adding money to your account");

        // Step 4: get the current balance

        const balance = document.getElementById('account-balance').innerText;
        console.log(balance)

        // Step 5: addMoneyInput with balance

        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);
        

        // step 6: update the balance in the UI/DOM

        document.getElementById('account-balance').innerText = newBalance;
        
    }
    else{
        alert("Failed To Add Money, Please Try Again")
    }
    
})
