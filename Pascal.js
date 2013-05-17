/*
Copyright (c) 2013 Insanehong and other contributors

MIT LISENCE

Pascal.js
*/
(function() {
    
  var root = this;
     
  var previousPascal = root.Pascal,
      undef = 'undefined';

   var Pascal  = function(obj) {
      if (obj instanceof Pascal) return obj;
      if (!(this instanceof Pascal)) return new Pascal(obj);  
   };

   if(typeof exports !== 'undefined') {
      if(typeof module !== 'undefined' && moduel.exports) {
         exports = module.exports = Pascal;  
      }
      exports.Pascal = Pascal;
   } else {
    root.Pascal = Pascal; 
   }

   Pascal.VERSION = '0.1.0';

  function ascSort(a,b) {
    return (a < b) ? -1 : (a > b) ? 1 : 0;
  }

  function descSort(a,b) {
    return (b < a) ? -1 : (b > a) ? 1 : 0;
  }

  function isNumber(n) {
    return (typeof n !== 'undefined' && n!==null && !isNaN(n)) ? true : false;
  }

  function isEmpty(array) {
    return (typeof array === 'undefined' || array.length === 0 || array ===null) ? true : false;
  }

  function fnEach(array,fn) {
    var tmep =[],
        length = array.length,
        i;

    for(i=0; i < length; i++) tmep.push(fn.call(array,array[i],i)) ;  
    return tmep;    
  }

  var round = Pascal.round = function(number,dec) {
    if(isNaN(number)) return NaN;
    else number = Number(number);
    return (typeof dec === 'undefined' || isNaN(dec)) ? Math.round(number) : Math.round(number*Math.pow(10,dec))/Math.pow(10,dec);   
  };

  var ceil = Pascal.ceil = function(number,dec) {
    if(isNaN(number)) return NaN;
    else number = Number(number);
    return (typeof dec === 'undefined' || isNaN(dec)) ? Math.ceil(number) : Math.ceil(number*Math.pow(10,dec))/Math.pow(10,dec);   
  };

  var floor = Pascal.floor = function(number,dec) {
    if(isNaN(number)) return NaN;
    else number = Number(number);
    return (typeof dec === 'undefined' || isNaN(dec)) ? Math.floor(number) : Math.floor(number*Math.pow(10,dec))/Math.pow(10,dec);   
  };

  var fact = Pascal.fact = function(num) {
    if(isNaN(num)) return NaN;
    return (num < 0) ? -1 : (num === 0) ? 1 : parseInt(num * fact(num - 1),10);
  };

  var perm = Pascal.perm = function(n,r) {
    if(isNaN(n) || isNaN(r)) return NaN
    if(n <= r) return fact(n);
    return (r===0) ? 1 : parseInt(n * perm(n-1,r-1)); 
  };

  var sum = Pascal.sum =  function(data,fn) {
    var total = 0,
        leng = 0,
        result,
        i;
    
    if(typeof fn === 'undefined') {
      data = data.filter(isNumber);
      leng = data.length;
      for(i=0; i < leng; i++) {
        total+= Number(data[i]);
      }
    } else {
      leng = data.length;
      for(i=0; i < leng; i++) total+=(isNaN(result = fn.call(data,data[i],i))) ? 0 : Number(result);    
    }  
    
    return total;
  };

  var avg = Pascal.avg = function(data,fn) {
    var total=0,
        i,
        result;

    if(typeof fn !== 'undefined') data = fnEach(data,fn);

    data = data.filter(isNumber);
    total = sum(data);
    return round(total/data.length,2);
  };

  var variance = Pascal.variance = function(data,fn) {
    var average;
    
    if(typeof fn !== 'undefined') data = fnEach(data,fn);
    average = avg(data);
    return avg(data,function(n){ return Math.pow(n-average,2); });      
  };

  var stdev = Pascal.stdev = function(data,fn) {
    return round(Math.sqrt(variance(data,fn)),2);
  };
  
  var median = Pascal.median = function(data,fn) {
    var leng ,
        middle;
    
    if(typeof fn !== 'undefined') data = fnEach(data,fn);

    data = data.filter(isNumber).sort(ascSort);

    if(isEmpty(data)) return null;

    leng = data.length;
    
    if(leng < 2) return avg(data);
        
    if(leng%2 === 0 ) {
      middle = leng/2;
      return avg([data[middle],data[middle-1]]);
    } else {
      middle = leng - floor(leng/2)-1;
      return data[middle];
    }
  };    

  var min = Pascal.min = function(data,fn) {
    if(typeof fn !== 'undefined') data = fnEach(data,fn);
    data = data.filter(isNumber);
    return (isEmpty(data)) ? null :  Math.min.apply(null,data); ;
  };

  var max = Pascal.max = function(data,fn) {
    if(typeof fn !== 'undefined') data = fnEach(data,fn);
    data = data.filter(isNumber);
    return (isEmpty(data)) ? null :  Math.max.apply(null,data); ;
  };
  
}).call(this);