//  show the cash out form

document.getElementById('btn-show-cash-out').addEventListener('click', function(){

    // show cash out button
    console.log('show cash out button');
    document.getElementById('cash-out-form').classList.remove('hidden');

    // hide the add money form
    document.getElementById('add-money-form').classList.add('hidden');
    
})

document.getElementById('btn-show-add-money').addEventListener('click', function (){
    document.getElementById('add-money-form').classList.remove('hidden');
    
    document.getElementById('cash-out-form').classList.add('hidden');
})