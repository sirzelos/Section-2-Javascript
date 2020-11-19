function run(){
    function range(start,end,step){
        let a = []; 
        if(start<=end){
            for(let i = start;i<=end;i+=step){
                a.push(i);
            }
            return a;
        }
        else{
            for(let i = start;i>=end;i+=step){
                a.push(i);
            }
            return a;
        }
    }
    function sum(a){
        let sum = 0;
        for (let i = 0; i < a.length; i++) {
            sum+=a[i];
            
        }
        return sum;
    }
    let start = parseInt(document.getElementById("start").value);
    let end = parseInt(document.getElementById("end").value);
    let step = parseInt(document.getElementById("step").value);
    if(isNaN(start) || isNaN(end)){
        alert("กรุณาใส่ค่า start และ end ให้ครบ");
    }
    else{
        if(isNaN(step)){
            step=1;
        }
        if(start<end && step<=0){
            alert("เนื่องจาก start น้อยกว่า end กรุณาใส่ step มากกว่า 0");
        }
        else if (start>end && step>=0){
            alert("เนื่องจาก start น้อยกว่า end กรุณาใส่ step น้อยกว่า 0");
        }
        else{
        document.getElementById("range").innerHTML = range(start,end,step);
        document.getElementById("sum").innerHTML = sum(range(start,end,step));
        }
    }
    
}