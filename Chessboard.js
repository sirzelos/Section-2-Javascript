let size = 8;
let row = '';
for(let i = 1;i<=size;i++){
    let row = '';
    if(i%2!==0){
        for(let j = 1;j<=size;j++){
            if(j%2!==0){
                row+='#';
            }
            else{
                row+=' ';
            }
        }  
        console.log(row);   
    }
    else{
        for(let j = 1;j<=size;j++){ 
            if(j%2!==0){
                row+=' ';
            }
            else{
                row+='#';
            }
        }
        console.log(row);          
    }
}