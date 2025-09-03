//your JS code here. If required.
const presentlevel=document.getElementById("level")
var count=1
if(presentlevel.parent==null){
	alert(`The level of the element is: ${count}`)
}
else{
	presentlevel=presentlevel.parent
	count++
}
