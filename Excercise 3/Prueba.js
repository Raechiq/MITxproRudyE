isString = function(x1,x2,x3){
    if(typeof x1=== "string" && typeof x2=== "string" && typeof x1=== "string"){
  
      return "strings"
    } else if(typeof x1!== "string" && typeof x2!== "string" && typeof x1!== "string"){
      return "not strings"
    };
          
    }
  console.log(isString("a","b","c"));