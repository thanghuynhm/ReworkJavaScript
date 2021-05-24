// Tìm Ước chung của một số nguyên dương cách 1 
// function uocNguyenDuong(n){
//     var result = [];
//     for(let i = 1;i <= n;i++){
//         if(n % i === 0){
//             result.push(i);
//         }
//     }
//     return result;
// }
// console.log(uocNguyenDuong(8));

// Tìm Ước chung của một số nguyên dương cách 2
// const uocNguyenDuong = (n)=>{
//     let i = 1 ;
//     var result = [];
//     while(i <= n ){
//         if(n % i === 0){
//             result.push(i)
//         }
//         i++
//     }
//     return result;
// }
// console.log(uocNguyenDuong(8));

// Viết hàm nhận vào số nguyên dương n và return lại tổng tất cả ước số nguyên dương của nó

// const sumUoc = (n) =>{
//     let i = 1 ;
//     var sum = 0;
//     while(i <= n ){
//         if(n % i === 0){
//            sum = sum + i ;      ///// Cách 1   
//         }
//         i++
//     }
//     return sum;
// }
// console.log(sumUoc(4))

// function sumUoc(n){
//     var sum = 0;
//     for( let i = 1; i <= n ;i++){
//         if(n % i ===0){
//             sum = sum + i;              ///// Cách 2 
//         }
//     }
//     return sum;
// }
// console.log(sumUoc(8))



// Viết hàm kiểm tra số nguyên dương n có phải số nguyên tố hay không
    // const checkSoNT = (n) => {
    //     if(n < 2 ){
    //         return false;       
    //     }
    //     for (let i = 2; i <= n/2; i++){
    //         if (n % i === 0){
    //             return false
    //         }  
           
    //     }
    //     return true
    // }  
    // console.log(checkSoNT(3))


// Viết hàm tính tổng các chữ số của số nguyên dương n
    // const tongSoNguyenDuong = (n)=> {
    //     var sum = 0;
    //     if(n < 1 ){
    //       return false
    //     }
    //     for(let i = 0 ; i <= n ; i++ ){
    //         if(n % i === 0 ){
    //             sum = sum + i;
    //         }   
            
    //     }
    //     return sum
    // }
    // console.log(tongSoNguyenDuong(100))

 

// Viết chương trình nhập tháng, năm. Hãy cho biết tháng đó có bao nhiêu ngày. Biết rằng năm nhuận là năm chia hết cho 400 hoặc chia hết cho 4 nhưng không chia hết cho 100.
//  const demNgay = (thang,nam) =>{
//   const namNhuan = (nam) => {
//     if(nam % 400 === 0){
//       return true
//     }
//     if (nam % 4 === 0 && nam % 100 !== 0) {
//       return true
//     }
//     return false
//   }
//   if ([1, 3, 5, 7, 8, 10, 12].includes(thang)) {
//     return 31
//   } else if ([4, 6, 9, 11].includes(thang)) {
//     return 30
//   } else {
//     if (namNhuan(nam)) {
//       return 29
//     }
//     return 28
//   }

//  } 
//  console.log(demNgay(2,2024))
 
// Viết hàm in bảng cửu chương ra màn hình
  // const bangCuuChuong = (n) =>{
  //   var result = ''
  //   for(let i = 1 ; i <= n ; i++){
  //     if(n === 1){
  //       result = result + `Bảng số ${n}`
  //     }else{
  //       // result += `Bảng số ${n}`
  //       result = result + `Bảng số ${n}`
  //     }
  //     for (j = 1; j <= 10; j++) {
  //       // result += `\n${n} x ${j} = ${n * j}`
  //       result = result +  `\n${n} x ${j} = ${n * j}`
  //     }
  //     return result
  //   }
    
  // }
  // console.log( bangCuuChuong(2))
// Tìm số fibonacci thứ n. Cụ thể, các số đầu tiên của dãy Fibonacci là 1, 1, 2, 3, 5, 8, 13...
// const fibonacci = (n) => {
//   if (n === 1 || n === 2) {
//     return 1
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2)
// }
// console.log(fibonacci(10))
// Tính tổng n số fibonacci đầu tiên
// const fibonacci = (n) => {
//   if (n === 1 || n === 2) {
//     return 1
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2)
// }
// const sumFibo = (n) => {
//   let sum = 0
//   for (let i = 1; i <= n; i++) {
//     sum += fibonacci(i)
//   }
//   return sum
// }
// console.log(sumFibo(1))


// const findNumber1 = () => {
//   const result = []
//   for (let i = 0; i < 10; i++) {
//     if (i % 2 === 1) {
//       result.push(i)                             // Không Call Back FUNCTION
//     }
//   }
//   return result
// }
// findNumber1()

// const findNumber2 = (n , func) =>{

//   const result = [];

//   for(let i = 0; i <= n ; i++){
//     if(func(i)){
//       result.push(i)
//     }                                                             // Call Back FUNCTION
    
//   }
//   return result
  

// }
// console.log(findNumber2(10, (n) => n % 2 === 1 )) 
// console.log(findNumber2(10, (n) => n % 2 === 0 )) 
// console.log(findNumber2(10, (n) => n % 3 === 2 )) 

// Viết hàm tìm giá trị lớn nhất trong mảng 1 chiều các số thực

// const findMax = (arr) => {
//   let max = arr[0]
//    for(let i = 1; i < arr.length; i++){
//       if(arr[i] > max){
//         max = arr[i]
//       }
//    }
//    return max
// }

// console.log(findMax([0, 30, 12, 22, 40, 31]))

// iết hàm kiểm tra trong mảng các số nguyên có tồn tại giá trị chẵn nhỏ hơn 2004 hay không

// const checkSN = (arr) =>{

//   for(let i = 0; i < arr.length;i++){
//     if(arr[i] % 2 === 0 || arr[i] < 2004  ){
//       return true  
//     }
//   }
//   return false
// }
// console.log(checkSN([10000, 2025, 2005, 4000]))

// Viết hàm sắp xếp mảng 1 chiều các số thực tăng dần
// const sapXep = (arr)=>{
//     console.log(arr.sort())
// }
// sapXep([6,1,5,9,3])


// Viết hàm tính tổng các phần tử trong mảng


// const sum = (array) => {
//   let result = 0
//   array.forEach((item) => { // cách 1
//     result += item
//   })
//   return result
// }

// const sumArr = (array) => {
//   let rs = 0
//   for(let i = 0 ; i < array.length;i++){
//    rs += array[i]
//   }                                      // Cách 2 
//   return rs
// }
// console.log(sumArr([1,2,4]))

// iết hàm nhận vào 2 mảng a, b. Return về 1 mảng mới chứa các giá trị chỉ xuất hiện 1 trong 2 mảng.

// const checkTwoArr = (arr1,arr2)=>{
//   let result = [];
//   arr1.forEach((item) => {
//     if(!arr2.includes(item)){
//       result.push(item)
//     }
//   });

//   arr2.forEach((item)=>{
//     if(!arr1.includes(item)){ // Tìm tất cả các phần tử có trong mảng A nhưng không có trong mảng b.Và ngược lại
//                               // sau đó đưa vào 1 mảng mới
//       result.push(item)
//     }
//   })
//   return result
// }
// console.log(checkTwoArr([1,5,6,3],[5,2,6,4]))

// Viết hàm nhận vào 1 string và trả về một Capitalize string. Ví dụ: 'du thanh duoc' -> 'Du Thanh Duoc'

// function toUpper(str) {
//   return str
//       .toLowerCase()
//       .split(' ')
//       .map(function(Word) {
//           return Word[0].toUpperCase() + Word.substr(1); // Cách 1
//       })
//       .join(' ');
//    }
//    console.log(toUpper("du thanh duoc"))

// const Capitalize = (str) => str.split('')
// .map((item)=> item
// .charAt(0)                            Cách 2
// .toUpperCase() + item.slice(1))
// .join('')


// Viết hàm nhận vào 1 string và trả về một reverse string. Ví dụ: 'duoc' -> 'coud'
//  const reverStr = (str) => {
//   var arrayOfchars = str.split("") // Chuyển 1 chuỗi sang 1 mảng các kí tự

//   var strToArray = arrayOfchars.reverse() // Đảo các kí tự trong mảng

//   var newStr = strToArray.join("")  // Gộp các kí tự trong mảng thàng String
  
//     return newStr; // Cách 1 
//  }  
// console.log( reverStr('duoc')) 

// const reverse1 = (str) => {
//   if (str.length === 0) {
//     return str
//   }
//   return str.charAt(str.length - 1) + reverse1(str.slice(0, str.length - 1))
// }
// const reverse2 = (str) => [...str].reverse().join('')
// const reverse3 = (str) => {
//   let result = ''
//   for (let i = 0; i < str.length; i++) {
//     result += str.charAt(str.length - i - 1)
//   }
//   return result /// Cách 2 
// }
// console.log( reverse1('duoc')) 

// Viết hàm tìm chữ lặp lại nhiều nhất trong đoạn string.

// const checkLoopChart = (str) =>{
//   const obj = {}
//   let result = ''

//   str.split('').forEach((item,index) => { // Hàm Split tách các phần tử trong chuỗi thành 1 mảng các kí tự
   
//       if(index === 0){
//         result = item
//       }
//       if(!obj[item]){
        
//         obj[item] = 1
//       }else{
//         obj[item] += 1
//       }
//       if(obj[item] > obj[result]){
//         result = item
//       }
//   })

//  return result

// }
// console.log(checkLoopChart('hello')) 

// Viết hàm thay thế những chữ không muốn trong 1 đoạn. Ví dụ replace('du thanh duoc', ['duoc', 'thanh'], 'hello') thì return về du hello hello
// const replace = (str,array,target) => {

//   const newArr = array.map(item => item.toLowerCase()) // cho các phần tử trong mảng 
//   const strToArr = str.split('') //Chuyển String thành mảng các kí tự
//   strToArr.map((item,index)=>{
//     if(newArr.includes(item.toLowerCase())){ // so sáng newArr và strToArr
//       strToArr[index] = target // Replace here
//     } 
//   })
//   return strToArr.join() // Gộp các phần tử thành mảng//
//   //// Đây Là cách 1 dùng theo bth cách 2 bên dưới
// }
// const replace = (string, array, target) => {
//   const tempArray = array.map(item => item.toLowerCase())
//   const stringToArray = string.split(' ')
//   stringToArray.map((item, index) => {
//     if (tempArray.includes(item.toLowerCase())) {
//       stringToArray[index] = target
//     }
//   })
//   return stringToArray.join(' ')}
  // console.log(replace('du thanh duoc', ['duoc', 'thanh'], 'hello'))

// Áp Dụng Regex vào bài toán trên
// const replace2 = (str,arr,target) => {
 
//   return str.replace(new RegExp(arr.join('|'),'gi'),target)

// }
// console.log(replace2('du thanh duoc', ['duoc', 'thanh'], 'hello'))

// Viết hàm xử lý

// const input = [
//   { name: 'A', age: 1 },
//   { name: 'B', age: 2 },
//   { name: 'C', age: 3 }
// ]

// const showobj = (input) =>{
//   const result = {name:[], age:[]}
//   input.forEach((item) =>{
//     result.name.push(item.name)
//     result.age.push(item.age)
//   })
//   return result
// }
// console.log(showobj(input))

// Viết hàm tính tổng tiền lương, nếu object rổng thì tổng là 0
// const input = {
//   An: 100,
//   My: 200,
//   Nga: 300,
//   Huy: 150
// }
// const sumSalary = (input) => {
//  let rs = 0 
//  for(const value in input){
//   rs += input[value]
// }
// return rs
// }
//  console.log(sumSalary(input))

/// Bài khó
// const input = [
//   {
//     name: 'Tivi',
//     price: 500
//   },
//   {
//     name: 'Dien thoai',
//     price: 100
//   },
//   {
//     name: 'Quan ao',
//     price: 80
//   }
// ]
// const handle = (input,key) => {
//   return input.sort((a,b) => {
//     // console.log(b[key])
//     if(isNaN(a[key])){
//       if(a[key] > b[key]){
//         return 1
//       }
//       if(a[key] < b[key]){
//         return -1
//       }                            /// Cách 1
//       return 0
//     }
//     return a[key] - b[key]
//   })

// }
// console.log(handle(input,'price'))

// const handle = (input, key) => {
//   return [...input].sort((a, b) => {
//     if (isNaN(a[key])) {
//       if (a[key] > b[key]) {
//         return 1
//       }
//       if (a[key] < b[key]) {
//         return -1            // Cách 2
//       }
//       return 0
//     }
//     return a[key] - b[key]
//   })
// }

// Viết hàm trả về 1 mảng mới chứa những bất động sản có giá trên 100
// const input = [
//   {
//     name: 'Khu 1',
//     price: 500
//   },
//   {
//     name: 'Khu 2',
//     price: 100
//   },
//   {
//     name: 'Khu 3',
//     price: 80
//   }
// ]
// const priceBds = ( input) => {
//      return input.filter((item) => {
//        return item.price >= 100
//      })
// }
// console.log(priceBds(input))