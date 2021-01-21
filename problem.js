// https://github.com/MahfuzAhmedRasel/js-problem

    // kilometerToMeter
function kilometerToMeter(kilometer){
    var  meter = 1;

    if(kilometer < 0){
         console.log("Wrong Input");
    }
    else{
        meter = kilometer*1000;
        return meter;
    }
}
    // Budget Calculator

function budgetCalculator(gori, phone, laptop) {
    var totalPrice = 0;
    var goriPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;
    
    if(gori < 0 || phone < 0 || laptop < 0){
        console.log("Missing Something, Plesae check Agin");
    }
    else{
        totalPrice = gori*goriPrice + phone*phonePrice + laptop*laptopPrice;
        return totalPrice;
    }
  }