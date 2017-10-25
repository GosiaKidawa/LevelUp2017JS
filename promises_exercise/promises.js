var f1 = function () {
    // return new Promise(function (resolve, reject) {
            setTimeout(function () { console.log('1'); resolve(); }, 
            Math.floor((Math.random() * 1000) + 1));//do not edit
    // });
}
var f2 = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () { console.log('2');resolve(); }, 
        Math.floor((Math.random() * 1000) + 1));//do not edit
       
    });
}
var f3 = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () { console.log('3');resolve(); }, 
        Math.floor((Math.random() * 1000) + 1));//do not edit
    }); 
}
var f4 = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () { console.log('4');resolve(); }, 
        Math.floor((Math.random() * 1000) + 1));//do not edit
        
    });
}
var f5 = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () { console.log('5'); resolve(); }, 
        Math.floor((Math.random() * 1000) + 1));//do not edit
    });
}
f1()
    .then(f2)
    .then(f3)
    .then(f4)
    .then(f5)
// // f2();
// f3();
// f4();