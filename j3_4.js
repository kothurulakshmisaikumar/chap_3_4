// let ob ={
//     last_name : "kothuru",
//     first_name : "lakshmi",
//     middle_name : "sai kumar",
//     phone_name : 3434625598,
//     address :"1541 lycee place"
// }
// console.log(ob["last_name"]);
// console.log(ob["first_name"]);
// for (a in ob){
//     console.log(a);
//     console.log(ob[a]);
// }
// let rr= [77,99,88,2000];
// for(let b of rr)
// {
//     console.log(b);
// }
// let o1 ={
//     lakshmi :100,
//     shah : 0,
//     zaiem : 93
// }
// for (let b in o1){
//     console.log("they key is ",b,":",o1[b]);
// }
// console.log(Object.entries(o1));
// for(let i=0;i<Object.keys(o1).length;i++){
//    console.log(o1[Object.keys(o1)[i]]);
// }
// let r =25;
// do {
// n=Number(prompt("enter the number"));
// if (r !== n){
//    console.log("try again");
// }
// }
// while (r !== n )
// let a =[1,2,3,4,5,6];
// let b=[];
// for (i=(a.length-1);i>=0;i--){
//    b.push(a[i])
// }
// console.log(b);
// let a =[10,20,30,40,50];
// let p=a.reduce((b,c)=>{
// console.log(b,c);
// return b+c;
// },0) / a.length
// console.log(p);
// let b =[100,200,300,400,500]
// let y=b.reduce(function (b,c,d,e){
//  return b-c;
// })
// console.log(y);
// let p = [1,2,3,4,5,6];
// let r = p.reduce((b,c)=>{
// c=c*c;
// return b+c;
// },0)
// console.log(r);

// const results = [
//   {
//     name: "Zaiem",
//     marks: [88, 89, 98, 85, 67],
//   },
//   {
//     name: "Lakshmi",
//     marks: [23, 9, 38, 40, 67],
//   },
//   {
//     name: "Ashraf",
//     marks: [28, 59, 68, 25, 77],
//   },
//   {
//     name: "Shiva",
//     marks: [34, 56, 38, 75, 87],
//   },
//   {
//     name: "Faraz",
//     marks: [8, 9, 18, 45, 67],
//   },
// ];
// const top = (results) => {
//   let tt = 0;
//   let q = results.map((element) => {
//     let per =
//       element.marks.reduce((b, c) => {
//         return b + c;
//       }, 0) / 5;
//     if (per > tt) {
//       tt = per;
//     }
//     return { ...element, per };
//   });

//   return q;
// };
// console.log(top(results));
// let rrrr = "JIm";

// let test = {
//   rrrr,
// };

// console.log(test);

// const age = [2, 14, 45, 34, 33, 1, 2];

// console.log(age.filter((a) => a < 18));
// console.log(age.reduce((a, b) => a + b));
/* write a function for mean of 5 numbers */
// let ar = [100, 300, 400, 500, 200];
// const mean = (ar) => {
//   let sum = 0;
//   for (let i = 0; i < ar.length; i++) {
//     sum += ar[i];
//   }
//   return sum / ar.length;
// };
// console.log(mean(ar));

// console.log(ar.reduce((a, b) => a + b) / ar.length);

// console.log(ar.reduce(function ab(a, b) {
//  console.log(a);
//   return a+1;
// }));
// let r ='lakshmi \'sai ';
// console.log(r);
// let p = "lakshhmii \" narrr" ;
// console.log(p);
// let p = "lakshmi \r kumar";
// console.log(p);
// let naa= "lakshmi sai kumar";
// console.log(naa.toUpperCase());
// console.log(naa);
// let rr ="KOTHURU";
// console.log(rr.toLowerCase());
// console.log(rr.length);
// console.log(rr.slice(1,4));
// let rr1= "kothuru jjjjj";
// console.log(rr1.replace("jjjjj","lakshmi"));
// console.log(rr1);
// let n1 ="laskhmi";
// let n2 ="kothuru";
// let n3 ="sai kumar";
// console.log(n1.concat(n2," ","kkkk"));
// let p ="    lakshmi sai kothuru lakshmi jjj kk    ";
// console.log(p.trim( ));
// console.log(p);
// console.log("laskhmi\'".length);
// let r="java sai react";
// console.log(r.includes("java"));
// console.log(r.endsWith("ct",9));
// let y ="lakshmi sai kumar";
// console.log(y.endsWith("kumar",2));
// let r = "kumarLAk";
// let l = r.length;
// let p = "";
// for (let i = 0; i < l; i++) {
//   let asc = r[i].charCodeAt();
//   if (asc >= 65 && asc <= 90) {
//     p += String.fromCharCode(asc);
//   } else if (asc >= 97 && asc <= 122) {
//     p += String.fromCharCode(asc - 32);
//   }
// }
// console.log(p);

// let rrrr = "please give us 1000";
// console.log(rrrr.slice("please give us ".length));

