function myfunction(){
	for( i=30; i<=300; ++i){
		if ( i % 7 == 0){
			console.log(i + "=>" +"abc ahihi");
		}else if ( i % 13 == 0 ){
			console.log(i + "=>"+"xyz" );
		}else if ( (i % 7 ==0) && (i % 13 == 0)){
			console.log(i + "=>" + "a-z có mới lạ");
		}else{
			console.log(i + "=>" + "khong có gi");
		}

	}
}
myfunction();