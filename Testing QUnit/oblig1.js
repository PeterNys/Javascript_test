function 
mainFunction(txt){
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
function yearFunction(txt){
    let year = txt.substr(6,4);
    if (year.parseInt=NaN){return false};
    return true;
}
function monthFunction(txt){
    let month = txt.substr(3,2);
    if (month.parseInt=NaN){return false};
    if (month>'12'||month<'01'){console.log("month is incorrect");return false;}
    return true;
}
function dayFunction(txt){
    let day = txt.substr(0,2);
    if (day.parseInt=NaN){return false};
    if (day>)
}