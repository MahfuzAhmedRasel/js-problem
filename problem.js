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

