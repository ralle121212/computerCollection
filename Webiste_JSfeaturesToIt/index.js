  let input = () => {
let input1 = parseInt(document.getElementById('input1').value);
let input2 = parseInt(document.getElementById('input2').value); 

const myButton = document.querySelectorAll('button');

 let add = document.getElementById('add')

    if (myButton === add){
       result = input1 + input2
    } else if(myButton == sub) {
        result = input1 - input2
    } else if(myButton == multi){
       result = input1 * input2
    } else if (myButton == divid){
      result =  input1 / input2
    }
     document.getElementById("result").innerHTML = "Here is your result" + result;
}

