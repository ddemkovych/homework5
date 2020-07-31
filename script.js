// Масив який юзаємо під функції
const number = [-2, 9, 15, -1, 6, 2, 55, 11, 78 ];



//1 Рамдомний масив
const getRandomArray = (length, min , max) => {
    let newArr = [];
    for (let i = 0; i < number.length ; i++){
    newArr[i] = Math.floor(Math.random() * (max - min + 1) + max );
    }
  return newArr;
};


//3 Cереднє арифметичне
const getAverage = (...number) => {
   let arrFilter = number.filter(item => item % 1 === 0);
   let result = arrFilter.reduce((a, b) => (a + b)) / arrFilter.length;
  return result.toFixed(0);
};


//5 Фільтрує парні числа
const filterEvenNumbers = (...numbers) =>{
  return number.filter((number) => number % 1=== 0 && number % 2);
};


//6 Кількість чисел більших за 0
const countPositiveNumbers = (...numbers) =>{
 return numbers.filter(item => item > 0).length;
};


//7 Які діляться  на 5
function getDividedByFive  (...numbers){
  return numbers.filter(item => item % 5 === 0);
};


//9 Розбиває кожне слово на умовні склади по 3 букви
const divideByThree = (word) => {
  let result =[];
  for(let i = 0; i <= word.length; i = i + 3){
   result.push(word.toLowerCase().slice(i, i + 3));
  }
return  result;
};









document.writeln(`<p>№1: <span>Рамдомний масив = </span>  [${(getRandomArray)(15, 8, 30)}]</p>`)
document.writeln(`<p>№3: <span>Cереднє арифметичне =</span>  [${getAverage(...number)}]</p>`)
document.writeln(`<p>№5: <span>Фільтрує парні числа = </span>   [${filterEvenNumbers(...number)}]</p>`)
document.writeln(`<p>№6: <span>Кількість чисел більших за 0 =</span>   [${countPositiveNumbers(...number)}]</p>`)
document.writeln(`<p>№7: <span>Які діляться  на 5 =</span> [${getDividedByFive(...number)}]</p>`)
document.writeln(`<p>№9: <span>Розбиває кожне слово на умовні склади по 3 букви =</span>  [${divideByThree("secretary")}]</p>`)























/*callback
function haveCalculeshen( cb){
  console.log(`hello my frend`)
  cb && cb();
}
function sayHello(){
  console.log('hello');
}
haveCalculeshen();

haveCalculeshen(sayHello);*/

//.forEach










