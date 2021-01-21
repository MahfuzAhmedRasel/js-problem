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

    // Hotel cost

    function hotelCost(days){
        var totalCost = 0;
        var  regulerPrice = 100;
        var  getDiscount = 80;
        var  bigDiscount = 50;
   
        if(days <= 0){
           console.log("Something is wrong Sir");
        }
        else if(days <= 10){
          return totalCost = days * regulerPrice;
        }
        else if(days <= 20){
           var regulerCost = 10 * regulerPrice;
           var longDays = days - 10;
           var offerCost = longDays * 80;
   
           return totalCost = regulerCost + offerCost;
        }
        else{
           var regulerCost = 10 * regulerPrice;
           var offerCost = 10 * getDiscount;
           var longDays = days - 20;
           var bigOfferCost = longDays * bigDiscount;
   
           return totalCost = regulerCost + offerCost + bigOfferCost
        }
     }
   
     var mahfuz = hotelCost(21);
     console.log(mahfuz);