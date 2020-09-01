function checkEpost(txt){

    

 
    if (txt.indexOf("@")>-1){
        let indexVar = txt.indexOf("@");
        console.log(indexVar);
        let firstPart = txt.substring(0,indexVar);
        console.log(firstPart);
        let lengthIndex = txt.length-1;
        console.log(lengthIndex);
        let secondPart = txt.substring(indexVar,lengthIndex);
        console.log(secondPart);
        if (firstPart.indexOf(".")<0 || secondPart.indexOf(".")<0){
            return false;
        }
        if (txt.indexOf(' ')>-1){
            return false;
        }
        else {return true;}
    
    }else {return false;};
}