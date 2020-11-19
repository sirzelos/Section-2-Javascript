function run() {
    function convertToRoman(x){
        roman=''
        for(;;){
            if(x===0){
                break;
            }
            else if(x-1000>=0){
                x-=1000;
                roman = roman + 'M';
            }
            else if(x-900>=0){
                x-=900;
                roman = roman + 'CM';
            }
            else if(x-500>=0){
                x-=500;
                roman = roman+'D';
            }
            else if(x-400>=0){
                x-=400;
                roman = roman+'CD';
            }
            else if(x-100>=0){
                x-=100;
                roman = roman+'C';
            }
            else if (x-90>=0){
                x-=90;
                roman = roman +'XC';
            }
            else if(x-50>=0){
                x-=50;
                roman = roman +'L';
            }
            else if(x-40>=0){
                x-=40;
                roman = roman +'XL';
            }
            else if(x-10>=0){
                x-=10;
                roman = roman +'X';
            }
            else if(x-9>=0){
                x-=9;
                roman = roman +'IX';
            }
            else if(x-5>=0){
                x-=5;
                roman = roman +'V';
            }
            else if(x-4>=0){
                x-=4;
                roman = roman +'IV';
            }
            else {
                x-=1;
                roman = roman +'I';
            }
        }
        return roman;
    }
    let number = parseInt(document.getElementById("number").value)
    if(isNaN(number)){
        alert("กรุณาใส่ค่า Number");
    }
    else{
        document.getElementById("romanNumeral").innerHTML = convertToRoman(number);
    }
  }