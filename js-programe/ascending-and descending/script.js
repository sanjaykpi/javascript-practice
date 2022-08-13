    //  as and des

    let a=[];
    let b=parseInt(prompt("ender tha value"));
    for(i=0;i<b;i++){
        a[i]=parseInt(prompt("ender tha value"));
    }
    a.sort(function(a,b){return a-b});
    console.log(a);
    a.sort(function(a,b){return b-a});
    console.log(a); 