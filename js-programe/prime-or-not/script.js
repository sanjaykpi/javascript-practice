
 let a=parseInt(prompt("enter the A value"));
 let b=0;

 if(a===1){
    console.log("not prime number");
 }
 else if(a>1){

    for(i=2;i<a;i++){
        if(a%2==0)
        b=1;
        break;
    }
 }
 if(b==1){
    console.log("not a prime number");
 }
 else{
    console.log("prime number");
 }
 

