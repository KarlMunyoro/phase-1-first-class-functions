let receivesAFunction = (callback) =>{
    callback();
}
 let namedfunc=function(){}

 let returnsANamedFunction = () =>{
    return namedfunc;
 }

let returnsAnAnonymousFunction = ()=>{
    return function(){console.log("Hello World!");}
}


console.log(returnsAnAnonymousFunction());