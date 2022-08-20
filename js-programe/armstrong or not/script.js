
let a,b,rem,d;

d=0;

b=parseInt(prompt("enter 3 digit value"));
a=b;

while(a>0){

    rem=a%10;

    d+=rem*rem*rem;
    a=parseInt(a/10);
}
if(d==b){
    console.log("this number is armstrong",b);
}
else{
    console.log("this number is not armstrong",b);
}
