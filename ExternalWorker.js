i=0;
function increvalue(){
	i++;
	postMessage(i);
	setTimeout("increvalue()",500);
}
increvalue();