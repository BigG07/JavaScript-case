<input type="text" id="numb">
<input type="button" value="Go!" id="calc">
<script>

function oddishOrEvenish(){

var numb=document.getElementById("numb").value;
 
numb=Number(numb);
 
var sum = 0;
while (numb) {
    sum += numb % 10;
    numb = Math.floor(numb / 10);
}
if(sum%2!==0)
{
window.alert("\"Odd\"");
}
else
{ 
window.alert("\"Even\"");
}
}
 
var calcBtn=document.getElementById("calc");
 
calcBtn.onclick=oddishOrEvenish;
 
</script>