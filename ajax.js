
//Read the 2 vectors 
function readVector(n,v1=[],v2=[]){
    for (let i=0; i < n ; i++){
        var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        v1[i]=Math.floor(((Math.random()*10))*plusOrMinus);
        v2[i]=Math.floor(((Math.random()*10))*plusOrMinus);
        console.log("vector a = ["+v1[i]+"] and vector b =["+v2[i]+"]")
    }
}

// calculate the dot_product
function dot_product(n,v1=[],v2=[]) {
    var ps  = 0;
    for (let i = 0; i <n; i++){
         ps = ps + v1[i] * v2[i];
    }
    return ps;
}

// verify if vectors are orthogonal or NOT
function ortho(o){
    if(o == 0){
        console.log("the dot_product = "+o+" and vectors are orthogonal")
    }else {
        console.log("the dot_product = "+o+" and vectors are NOT orthogonal")
    }
}

// calling functions
console.log("-----------------------------------------   Vectors -------------------------------------")
var number = 1
var tab1 = [];
var tab2 = [];
readVector(number,tab1,tab2)
ps = dot_product(number,tab1,tab2)
ortho(ps)
// calling functions
console.log("-----------------------------------------   Vectors -------------------------------------")
var x=3
var x1=[]
var x2=[]
readVector(x,x1,x2)
tt = dot_product(x,x1,x2)
ortho(tt)



