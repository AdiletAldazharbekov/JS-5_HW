// 4)    Создайте массив и  заполните  его через цикл    
//  пример > [ 10, 20,  30, 40, 50, 60, 70, 80, 90, 100]
 
let arr2=[]
for (let i=0; i<=100; i+=10){
    arr2.push(i)
}
arr2.shift()
alert('1-Массив выведен в Консоль')
console.log('1 вариант')
console.log(arr2)




let arr3=[]
for (let i=0; i<10; i++){
    arr3.push((i+1)*10)
}
alert('2-Массив выведен в Консоль')
console.log('\n2 вариант')
console.log(arr3)