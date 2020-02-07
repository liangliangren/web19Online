{
	function sum(){
		var sum=0
		for(var i=0;i<arguments.length;i++){
			sum+=arguments[i]
		}
		console.log(sum) //15
	}
	sum(1,2,3,4,5)
}

{
	function sumFn(...num){
		var sumNum=0;
		for(let j=0;j<num.length;j++){
			sumNum+=num[j]
		}
		console.log(sumNum)
	}
	sumFn(1,2,3,4,5)  //15
}
