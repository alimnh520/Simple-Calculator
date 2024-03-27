let getBtns = document.querySelectorAll(".btn");
let inputBox = document.querySelector(".main-display");
let multiply = document.querySelector(".multiply");
let division = document.querySelector(".division");

multiply.onmouseover = () => {
  multiply.innerHTML = "*";
}
multiply.onmouseout = () => {
  multiply.innerHTML = "×";
}
division.onmouseover = () => {
  division.innerHTML = "/";
}
division.onmouseout = () => {
  division.innerHTML = "÷";
}

let string = "";
getBtns.forEach((element) => {
  element.addEventListener("click",() => {
      if(element.innerHTML == "AC") {
        string = "";
        inputBox.value = string;
      } else if(element.innerHTML == "DEL"){
        string = string.slice(0,string.length - 1);
        inputBox.value = string;
      } else if (element.innerHTML == "=") {
        string = eval(string);
        inputBox.value = string;
      } else {
        string = string + element.innerHTML;
        inputBox.value = string;
      }
  });
});

