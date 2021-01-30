


// ====id-selector====
function $(targetID){
    return document.getElementById(targetID);
}

$("first-plus-btn").addEventListener("click", function(){
    hendleFirstTicket(true, "first-ticket-count");
});

$("first-minus-btn").addEventListener("click", function(){              
    hendleFirstTicket(false, "first-ticket-count"); 
});

$("economy-plus-btn").addEventListener("click", function(){              
    hendleFirstTicket(true, "economy-ticket-count"); 
});

$("economy-minus-btn").addEventListener("click", function(){                 
    hendleFirstTicket(false, "economy-ticket-count"); 
});

// convert string to number
function convertString(number){
    const inputvalue=$(number).value;
    const countValue=parseInt(inputvalue)
    return countValue
};

function hendleFirstTicket(quentity, id){
    const tricketCount=   convertString(id);
    let newTricketCount=tricketCount;

    if(quentity==true){
        newTricketCount=newTricketCount+1;
    }
    if(quentity==false && newTricketCount>=1 ){
        newTricketCount=newTricketCount-1;
    }

    $( id).value=newTricketCount;

    const first=  convertString("first-ticket-count");
    const economy=  convertString("economy-ticket-count");

    const totalCost = first*150+economy*100;

    $("subtotalAmount").innerText= "$" +totalCost;

    const vat= totalCost/10;
    $("vat").innerText="$"+vat;

    const grandTotal= totalCost+vat ;
    $("grandTotal").innerText="$"+grandTotal;
}