let myButton = document.getElementById("myButton")
let myInput = document.getElementById("myInput")
let myId = document.getElementById("myId")

function calculate() {

    let myNum = Number(myInput.value);
    let myNewNum = [];
    while (myNum  > 1 ){
        if (myNum % 2 === 0 ) {
            myNum = myNum / 2;


        }
        else {
            myNum=3*myNum+1;}

        myNewNum.push(myNum)
    }


    myId.innerText= myNewNum;
}