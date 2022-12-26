const form = document.querySelector("form");
const result = document.querySelector(".result");// обьявили вытянули с дом результат

// сделаем отдельный массив с ценами
const Q7= [4000,12000];
const Q3 = [2000,6000];

form.addEventListener("submit", function(evt){
    evt.preventDefault();
  
   let sum = 0;

   //проверка выбора типа авто
   const model = document.querySelector('select[name="model"]');
   const fuel = document.querySelector('select[name="fuel"]');

   if (model.value === "Q7")  {
    sum += Q7[fuel.value];
   } else if (model.value === "Q3") {
    sum += Q3[fuel.value];   
   }  

// проверка типа БУ
const deliveryRadios = document.querySelectorAll('input[name="delivery"]');
console.log(deliveryRadios);
if (deliveryRadios[0].checked) { 
    sum += 150;
} else if (deliveryRadios[1].checked){
    sum += 300;
}


// + стоимость резины
   const wheel = document.querySelector('input[name="wheel"]');
   if (wheel.value === "YES") {
    sum = sum + 300;
   }


   result.textContent = "итоговая сумма" + sum + "$"; // выводим на экран результат

});