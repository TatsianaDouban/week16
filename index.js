const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener('click', sum1);
// function addInput()

let numbers = [];

function sumInput() {
    
    let numb = Number(input.value);
    //проверкa на число
    if (Number.isNaN(numb)) {
        alert("Введите число");
        return;
    }

     numbers.push(input.value);
     // обнулить поле ввода после выведения
     input.value = ""; 
    printArray();
    sum1();
}

// функция для суммы
function sum1 () {
    let sum = 0;
    for (item of numbers){
        sum += item;
    }
    
   document.querySelector('.sum').textContent = sum;
   
   numbers.sort(function(a,b) {
    return a-b;
   });

}
document.querySelector(".sorted").textContent = numbers;

function printArray() {
    let sum = "";
    // перед обработкай добавим пустой текст еонтент, чтобы результат дописывался, а не выводился повторно
    for (let i = 0; i < numbers.length; i++) {
        let item = numbers[i];

        if (i > numbers.length - 1){
            sum += item + ", ";
    } else{
        sum += item + ".";
    }
}
// ВЫВОД НА ЭКРАН
    document.querySelector(".arrey").textContent = sum;
}
    
// смена фокуса. enter
input.addEventListener("change", sumInput);

