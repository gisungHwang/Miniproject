var min_num, max_num, count = 0
var num1 = parseInt(prompt("첫번째 수를 입력하세요."));
var num2 = parseInt(prompt("두번째 수를 입력하세요."));

if(num1 > num2){
    var max_num = num1;
    var min_num = num2;
}else{
    var max_num = num2;
    var min_num = num1;
}

alert("큰 수는"+max_num);
alert("작은 수는"+min_num);


for(var i=min_num; i <= max_num; i++){
    for(var j = 2; j <= i; j++){
        if(i%j==0) {
            break;
        }
    }

    if(i == j){
        console.log(i);
        count++;

    }

}
console.log(`소수의 총 개수는 ${count}`);





