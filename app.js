// alert("hi welcome to my new assigment")

/////////////////////////////////////////////////////
var a=["a","b", "c", "d", "e", "f", "g","h",];////////
/////////////////////////////////////////////////////
var b=["a","b", "c", "d", "e", "f", "g","h",];////////
/////////////////////////////////////////////////////
var c=["a","b", "c", "d", "e", "f", "g","h",];//////
////////////////////////////////////////////////////
var d=["a","b", "c", "d", "e", "f", "g","h",];//////
///////////////////////////////////////////////////
var e=["a","b", "c", "d", "e", "f", "g","h",];/////
///////////////////////////////////////////////////
var f=["a","b", "c", "d", "e", "f", "g","h",];/////
///////////////////////////////////////////////////
var g=["a","b", "c", "d", "e", "f", "g","h",];///////
///////////////////////////////////////////////////

// a.pop();
// console.log(a)
var b = a.splice(0 , 3);
console.log(b);
console.log(a);


var i = a.indexOf("d");
console.log(a[i]);
//////////////////////

 b.shift("a");
 
console.log(b);



////////////////////////

c.unshift("a");
console.log(c);

/////////////////////

d.push("abc");
console.log(d);
///////////////////////////

// e.slice(1 , 3);
// var b = e.slice(1,3);
// console.log(e);
//  var b=  e.length;
//  console.log(b);

///////////////////////

var i= e.indexOf("d");
console.log(i);
////////////////////////////
var i = e.indexOf("f");
console.log(e[i]);

 ///////////////////////////


// for(var i=1; i<10; i++ ){
//     console.log("2 x" + (i+0) + "=" + "1" +(i+1));
// }

var a= prompt("enter table number here");
for( var i=1; i<=10; i++){
    var b= i*a;
    console.log( `${a} * ${i} = ${b}`)
}

var a= prompt("enter table number");
for( var i=1; i<=10; i++){

   var b= i*a;

console.log(`${a} * ${i} = ${b}`)
}

var q= prompt("enter value here")
for(var i=1; i<=15; i++){
var b =i*q;
console.log(`${q} * ${i} = ${b}`)
}



//  var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
//  var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
//  var fullNames = [];
//  for (var i = 0; i < firstNames.length; i++) {
//  for (var j = 0; j < lastNames.length; j++) {
//  fullNames.push(firstNames[i] + lastNames[j]);

//  }
//  }















