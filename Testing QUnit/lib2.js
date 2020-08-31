function checkEpost(txt){

    

 
    if (txt.indexOf("@")>-1){
        let indexVar = txt.indexOf("@");
        let firstPart = txt.substring(0,indexVar);
        let secondPart = txt.substring(indexVar,0);
        if (firstPart.indexOf(".")<0 || secondPart.indexOf(".")<0){
            return false;
        }
        if (txt.indexOf(' ')>-1){
            return false;
        }
    
    }else {return true;};

}