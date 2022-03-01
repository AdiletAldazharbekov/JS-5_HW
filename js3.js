// 3)    Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. 
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
 
let arr1 =[10, 20, 30, 50, 235, 3000]
let listCol=''
for (let i of arr1) {
    let firstNum=String(i)[0]
    if(firstNum==1||firstNum==2||firstNum==5){
       listCol=listCol+(`${i}\n`)
    }
}
alert (listCol)