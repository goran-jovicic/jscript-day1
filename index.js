// class Form {
//     constructor(data) {
//         this.originalData = data; 
//         this.errors = new Errors();
//         for(let key in data){
//             this[key] = data[key];
//         }
//     }

//     data(){
//         var data = {};
//         for(let key in this.originalData){
//             data[key] = this[key];
//         }

//         return data;
//     }
    
//     reset(){
//         console.log(this.errors);
//         this.errors.clear()
//         for(let key in this.originalData){
//             this[key] = this.originalData[key];
//         }
//     } 
    
//     async submit(){
//             try{
//                 let promise = await this.server()
//                 this.onSuccess(promise)
//             }catch(error){
//                 this.onFail(error)
//             }
//     } 
    
//     server(){
//         return new Promise((resolve,reject)=> {
//             setTimeout(()=> {
//             Math.random() > 0.5
//             ?resolve({ message:'Sucessfully logged in!'})
//             :reject({ username:'Username is invalid' })
//             },5000)
//         })
//     }

//     onSuccess({message}){
//         alert(message);

//         this.reset();
//     } 
    
//     onFail(error){
//         console.log('Error occured');
//         this.errors.record(error);
//     }
// }

// class Errors {
//     constructor(){
//         this.errors = {};
//     }

//     has(field){
//         return this.errors.hasOwnProperty(field);
//     }

//     any(){
//         return Object.keys(this.errors).length > 0;
//     }
    
//     get(field){
//         return this.errors[field];
//     }

//     record(error){
//         this.errors = {...this.errors, ...error};
//     }

//     clear(field){
//         if(field){
//             delete this.errors[field];

//             return;
//         }

//         this.errors = {};
//     }
// }


// // // console.log(errors);
// // var errors = new Errors();
// // errors.record({username:'Username is required'})
// // console.log(errors.any());
// // console.log(errors.has('username'));
// // console.log(errors.get('username'));
// // errors.clear('username');
// // console.log(errors.has('username'));
// // var form = new Form(object);
// // console.log(form.data());
// // console.log(form);
// // var form = new Form({username:'',password: ''})
// // form.username = 'goran';
// // form.password = 'jovicic';
// // // console.log(form);
// // // console.log(form);
// // // form.reset();
// // // console.log(form)
// // // form.submit();
// // form.reset()
// // console.log(form)
// // form.submit();
// // form.onSuccess(form)


// 1. Napisati funkciju koja izbacuje duplikate iz niza koristeći `reduce`.
// 2. Napisati funkciju koja izbacuje 'null', '0', '""', 'false', 'undefined' i 'NaN' iz niza.
// 3. Napisati funkciju koja sortira niz objekata po zadatom ključu.


// 4. Napisati funkciju koja vraća nasumično odabran član niza.


// 5. Napisati funkciju koja pomera element niza na zadatu poziciju, a element na toj poziciji prebacuje na poziciju pomerenog elementa.


// 6. Napisati funkciju koja generiše niz u zadatom rasponu. Probati rešiti sa i bez `for` petlje.

// 7. Napisati funkciju koja pronalazi najveći broj u nizu.


// 8. Napisati funkciju koja radi “partition” niza na parne i neparne brojeve.


// 9. Napisati funkciju koja "meša" niz.


// 10. Napisati funkciju koja vraća razliku između dva niza. ( Elemente koje drugi niz ne sadrži )

// Array.prototype.removeDuplicates = function(){
//     return this.reduce((result,nextItem)=>result.includes(nextItem) ? result : result.concat(nextItem),[]);
// }

// arr = [1,2,3,4,4,3];

// console.log(arr.removeDuplicates());

// noBS = (arr) => {
//     let newArr = arr.filter(function(value,index,arr){
//         if(value !== false){
//             return value;
//         };
//     })
//     return newArr;
// } 

// arr = [1,2,NaN,undefined,0,null];

// console.log(noBS(arr));

// var niz = [1,2,3,4,5,6,7];

// var newNiz = niz[Math.floor(Math.random() * niz.length)]

// console.log(newNiz);
// var rand = myArray[Math.floor(Math.random() * myArray.length)];





