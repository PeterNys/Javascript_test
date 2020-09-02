
function dayFunction(txt){
    let year='1993';
    let month='02';
    day = txt.substr(0,2);
    if (day.parseInt=NaN){return false};
    if (day<1){return false};
    if (day=='31'&&(month=='1'||month=='3'||month=='5'||month=='7'||month=='8'||month=='10'||month=='12')){
        return true;
    }
    if (day<='30'&&month!='02'){return true;}
    if (day=='29' && isLeapYear(year)){
        return true;
    }
    if (day<='28'){return true;}
    return false;
    }