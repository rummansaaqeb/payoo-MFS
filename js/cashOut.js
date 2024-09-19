document.getElementById('btn-cash-out').addEventListener('click', function(event){    
    event.preventDefault();

    // Pin validation
    const cashOut = document.getElementById('input-cash-out').value;
    const pinNumber = document.getElementById('input-cash-out-pin-number').value;
    if(pinNumber === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        const cashOutNumber = parseFloat(cashOut);
        const newBalance = balanceNumber - cashOutNumber;

        // reducing balance
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed To Cash Out, Please Try Again!')
    }
})