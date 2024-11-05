function calc(){
    let euro = euroField.value;
    let result = euro * 0.981;
    usd.value = result.toFixed(2).replace('.',',');
}
function calcUs(){
    let usdValue = usd.value;
    let result = usdValue * 1.019;
    euroField.value = result;
}
