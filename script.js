"use strict";

//Je vais tout d'abord declarer trois variable : a=4,b=4,c=3 
//"a" sera notre expression de reference 
//Si "a" est égal a "b", alors faire un console log('égal à b')
//Si "a" est égal a "c", alors faire un console log('égal à b')
//Par défaut, il y a un console log("égal a rien")

let a =4;
let b=4;
let c=3;

switch(a){
    case b:
        console.log("égal à b");
        break;
    case c:
        console.log("égal à c");
        break;
    default:
        console.log("égal à rien");
}