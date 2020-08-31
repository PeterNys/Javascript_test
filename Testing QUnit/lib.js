

function fixText(txt){
    var trimmedText =txt.trim().toLowerCase();
    let firstLetter = trimmedText.charAt(0).toUpperCase();
    let lastPart = trimmedText.substring(1);
    trimmedText = firstLetter+lastPart;
    return trimmedText;
     
}