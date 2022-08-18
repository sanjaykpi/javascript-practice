let mark=parseInt(prompt("ender tha mark"));
if(mark>=90 && mark<100){
    console.log("your grade is o");
}
else if(mark>=80 && mark<90){
    console.log("your grade is a");
}
else if(mark>=60 && mark<80){
    console.log("your grade is b");
}
else if(mark>=35 && mark<60){
    console.log("your grade is c");
}
else if(mark<35 && mark>=0){
    console.log("your grade is fail");
}
else{
    console.log("your number is unvalid");
}