let a=10,b=8,c=6
if(a<=b && a<=c){
    if(b<=c){
        console.log(a,b,c);
    }
    else{
        console.log(a,c,b);
    }

}
else if(b<=a && b<=c){
    if(a<=c){
        console.log(b,a,c);
    }
    else{
        console.log(b,c,a);
    }
}
else{
    if(a<=b){
        console.log(c,a,b);
    }
    else{
        console.log(c,b,a);
    }
}