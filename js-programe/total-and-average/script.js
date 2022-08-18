    //  total and average
let a=[];
let s,j=0;
s=parseInt(prompt('user value'));
for(i=0;i<s;i++){
a[i]=parseInt(prompt('user value'));
   sum=a[i]+j;
   j=sum;
}
avr=j/s
console.log(a);
console.log(j);
console.log(avr);
