
let a,sum,rem;

a=parseInt(prompt("enter the a value"));

sum=0;

while(a>0){

    a=parseInt(a);

    rem=a%10;

    sum=sum+rem;

    a=a/10;
}
console.log(sum);