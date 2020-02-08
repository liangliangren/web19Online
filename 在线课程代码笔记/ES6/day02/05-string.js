{
	var str="abcdefg";
	var str2="123"
	console.log(str.charAt(2))  //返回指定索引位置的字符
	console.log(str.charCodeAt(0)) //97  返回指定索引位置字符的Unicode编码
	console.log(str.concat(str2))	 //abcdefg123
	console.log(str.indexOf('c',1)) //返回指定字符的开始索引位置，第二个参数查询指定索引之后的字串，如果查询不到返回-1
	
	//match()  可以在字符串内检索指定的值，找到一个或者多个正则表达式的匹配项,返回一个数组
	var str3="abc1d2j3abc"
	console.log(str3.match(/\d+/g)) //[ '1', '2', '3' ]
	//replace() 在字符串中用一些字符替换另一些字符，或者说替换一个正则表达式的匹配的字串
	console.log(str3.replace(/abc/g,"CBA"))  //CBA1d2j3CBA
	
	//search() 用于检索字符串中指定的子字符串，或者检索与正则表达式相匹配的子字符串,返回匹配到字串的开始索引位置，匹配不到返回-1
	var str4="defga1bc"
	console.log(str4.search(/abc/))
	

	//split() 
	var str5="abcdefg"
	console.log(str5.split("")) //['a','b','c','d','e','f','g']
	
	//toLocaleUpperCase()转换成大写
	console.log(str5.toLocaleUpperCase())  //ABCDEFG
	var str6="ABCD"
	console.log(str6.toLocaleLowerCase())  //abcd
	
	//substr(startIndex,length)
	var str7="abcdefghijklmn"
	console.log(str7.substr(2,3)) //cde  //
	console.log(str7) //abcdefghijklmn
	//slice(stratIndex,endIndex) //不包含结束索引,endIndex可以为负数
	console.log(str7.slice(2,3))  //c  //
	//substring(stratIndex,endIndex) //参数不能为负数
	
}
