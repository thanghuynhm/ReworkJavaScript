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
const fibonacci = (n) => {
  if (n === 1 || n === 2) {
    return 1
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}
const sumFibo = (n) => {
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum += fibonacci(i)
  }
  return sum
}
console.log(sumFibo(1))