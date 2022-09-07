
function numero(){
    let num=prompt("What number do you want to check", 0);
    for(let i=0,i<=num,i++){
        for(let n=0,n<i,n++){
            if(i%n==0){
            continue
        }
        alert(i);
    }
}
}


