var log = function(msg){
    console.log("Log:" , msg);
}

var add = function(num1, num2){
    var sum = num1 + num2;
}

var async = function(){
    setTimeout(function(){log("later, called before")}, 2000)
}

log("Sum : " + add(3,4));
async();
log("before");