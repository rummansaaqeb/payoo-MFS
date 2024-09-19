/**
 * 1. addEventListener to the add money button (form submit)
 * make sure to preventDefault so that page doesn't reload
 * 2. get the money user wants to add
 * also get the pin number provided
 * verify the pin number 
 * for wrong pin number ==> alert failed to add
 * for right pin number allow to add the number to account balance
 * 
 * 4. get the current balance
 * 
 * 5. add the money to be added with the current balance 
 * 6. display/update the balance in the DOM/UI
 */


document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    // get money and the pin number
    const addMoney = document.getElementById('input-add-money').value;
    const pinNumber = document.getElementById('input-pin-number').value;
    if(pinNumber === '1234'){
        // add money to the account
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        const addMoneyNumber = parseFloat(addMoney);
        // new balance
        const newBalance = balanceNumber + addMoneyNumber;

        // update the DOM with updated Balance

        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to add money, Please try again')
    }
});
