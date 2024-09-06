
function Result(){
    var amount = document.getElementById('amount').value;
    var tip = document.getElementById('tip').value;
    
    amount = parseFloat(amount);
    tip  = parseFloat(tip);

    const tipGave = tip *(amount /100);

    const total = tipGave + amount;
    
   
    
     document.getElementById('para').innerText = tipGave + " The Tip "  + "\n" +total +" " +"The total bill of user";
}








