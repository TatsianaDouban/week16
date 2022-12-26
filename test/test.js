const left = document.querySelector(".minus");
const right = document.querySelector (".plus");
let count = document.querySelector (".result")

right.addEventListener('click', function(){
    count.value++;
})

left.addEventListener('click', function(){
    count.value--;
})

