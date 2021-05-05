var names=new Array();
names[0]="Yonela";
names[1]="Jimmy";
names[2]="John";
names[3]="jacob";
names[4]="Qubekani";
names[5]="Andile";
names[6]="Benny";
names[7]="Cindy";
names[8]="Sdumo";
names[9]="Joe";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}