function selectStolpe(indexPar){
    if (chosenBar==indexPar){
        
        chosenBar=undefined;
        disableVar='disabled';
        show();
        return;}
    chosenBar = indexPar;
    console.log("fungerer",chosenBar);
    inputValue = numbers[chosenBar];
    disableVar = '';
    show();
    
}
function removeStolpe(){
    numbers.splice(chosenBar,1);
    show();
}
function changeStolpe(thisPar){
    if (inputValue>10||inputValue<1){
       alert("You can only change from 1 to 10");
        return;
        
    }
    numbers[chosenBar]=inputValue;
    show();
}
function addStolpe(){
    if (inputValue>10||inputValue<1){
        return alert("You can only change from 1 to 10");
    }
    numbers.push(inputValue);
    show();
}