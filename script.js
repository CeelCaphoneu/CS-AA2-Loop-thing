for(let f = 1, j = 1; f <= 4108; f=f*2+j, j=j-1){
	document.write(parseInt(f));
	if (f < 4108){
		document.write(", ")
	}
}
let d = 1;
while (d <= 51){
	document.write(d);
	if (d < 51){
		document.write(", ")
	}
	d=d+2;
}
let t = 2;
do{
	document.write(t);
	if (t < 50){
		document.write(", ")
	}
	t = t+2;
}while(t <= 50);