let arr = [10,20,30,];
let res = arr.filter(arrFilter);

function arrFilter(item){
return item <= 10;

}

console.log(res);

var xhr = new XMLHttpRequest();


xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.responseType= 'json';
xhr.send();
xhr.onload = function () {
    var responseobj = xhr.response;
    var res = responseobj.filter(function(item){
        return item.continents == 'Asia';
    });
    var finalResult =  res.map( function(item){
     return item.name.common;
     });

}
var copy = [];
responseobj.forEach(function(item)) {
    copy.push(`${item.name.common}, ${item.capital},${item.flag}`);
console.log(copy);

}

 
     

