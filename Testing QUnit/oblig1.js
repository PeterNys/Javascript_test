function mainFunction(txt){
lengthFunction(txt);
punctumFunction(txt);
}

function lengthFunction(txt){
    if (txt.length==10){
        return true;
    }
    return false;

}
function punctumFunction(txt){
    if (txt.charAt(2)==="." && txt.charAt(5)==="."){
        return true;
    }
    return false;
}
function atLeastFourFunction(txt){
    let year = txt.substr(6,9);
    console.log((year >= '0000',year <= '9999' ))
    if (year >= '0000' && year <= '9999'){
        return true;        
    }
    return false;
}