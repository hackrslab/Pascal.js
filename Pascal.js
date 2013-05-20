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

  var matrix = Pascal.maxtrix = {},
      array = Pascal.array = {};
 
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

  var abs = Pascal.abs = function(number) {
    return Math.abs(number);
  };

  var pow = Pascal.pow = function(number,exp) {
    return Math.pow(number,exp);
  };

  var acos = Pascal.acos = function(number) {
    return Math.acos(number);
  };

  var asin = Pascal.asin = function(number) {
    return Math.asin(number);
  };

  var atan = Pascal.atan = function(number) {
    return Math.atan(number);
  };

  var atan2 = Pascal.atan2 = function(y,x) {
    return Math.atan2(y,x);
  };

  var cos = Pascal.cos = function(radians) {
    return Math.cos(radians);
  };

  var sin = Pascal.sin = function(radians) {
    return Math.sin(radians);
  };

  var tan = Pascal.tan = function(radians) {
    return Math.tan(radians);
  };

  var sqrt = Pascal.sqrt = function(number) {
    return Math.sqrt(number);
  };

  var exp = Pascal.exp = function(number) {
    return Math.exp(number);
  };

  var log = Pascal.log = function(a,b) {
    if(a <= 0) return NaN;
    return (typeof b === 'undefined') ? Math.log(a) : (b===1) ? 0 : Math.log(a) / Math.log(b);
  };

  var log10 = Pascal.log10 = function(a) {
    return log(a,10);
  };

  var log2 = Pascal.log2 = function(a) {
    return log(a,2);
  };

  var round = Pascal.round = function(number,digits) {
    if(isNaN(number)) return NaN;
    else number = Number(number);
    return (typeof digits === 'undefined' || isNaN(digits)) ? Math.round(number) : Math.round(number*pow(10,digits))/pow(10,digits);   
  };

  var ceil = Pascal.ceil = function(number,digits) {
    if(isNaN(number)) return NaN;
    else number = Number(number);
    return (typeof digits === 'undefined' || isNaN(digits)) ? Math.ceil(number) : Math.ceil(number*pow(10,digits))/pow(10,digits);   
  };

  var floor = Pascal.floor = function(number,digits) {
    if(isNaN(number)) return NaN;
    else number = Number(number);
    return (typeof digits === 'undefined' || isNaN(digits)) ? Math.floor(number) : Math.floor(number*pow(10,digits))/pow(10,digits);   
  };

  var fact = Pascal.fact = function(num) {
    if(isNaN(num)) return NaN;
    return (num < 0) ? -1 : (num === 0) ? 1 : parseInt(num * fact(num - 1),10);
  };

  var perm = Pascal.perm = function(n,r) {
    if(isNaN(n) || isNaN(r)) return NaN;
    if(n <= r) return fact(n);
    return (r===0) ? 1 : parseInt(n * perm(n-1,r-1),10); 
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

  var mean = Pascal.mean = function(data,fn) {
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
    average = mean(data);
    return mean(data,function(n){ return pow(n-average,2); });      
  };

  var stdev = Pascal.stdev = function(data,fn) {
    return round(sqrt(variance(data,fn)),2);
  };
  
  var median = Pascal.median = function(data,fn) {
    return quantile(data,0.5,fn);  
  };    

  var quantile = Pascal.quantile = function(data,p,fn) {
    var h , fh, N , i, q;
    
    if(typeof fn !== 'undefined') data = fnEach(data,fn);
    
    data = data.filter(isNumber).sort(ascSort);
    
    N = data.length;
    
    if(N === 0 ) return null;

    h = ((N - 1) * p) +1;
    hf = floor(h);
    i = hf -1;
    
    q = data[i] + ((h-hf)*(data[hf] - data[i]));
    
    return q;
  };

  var quartile = Pascal.quartile = function(data,fn) {
    var q1, q2, q3, q4;
    if(typeof fn !== 'undefined') data = fnEach(data,fn);
    
    data = data.filter(isNumber).sort(ascSort);
    
    q0 = min(data);
    q1 = quantile(data,0.25),
    q2 = quantile(data,0.5),
    q3 = quantile(data,0.75),
    q4 = max(data);

    return (data.length === 0 ) ? null : [q0,q1,q2,q3,q4];
  };

  var min = Pascal.min = function(data,fn) {
    if(typeof fn !== 'undefined') data = fnEach(data,fn);
    data = data.filter(isNumber);
    return (isEmpty(data)) ? null :  Math.min.apply(null,data);
  };

  var max = Pascal.max = function(data,fn) {
    if(typeof fn !== 'undefined') data = fnEach(data,fn);
    data = data.filter(isNumber);
    return (isEmpty(data)) ? null :  Math.max.apply(null,data);
  };
  
  var minmax = Pascal.minmax = function(data,fn) {
    if(typeof fn !== 'undefined') data = fnEach(data,fn);
    data = data.filter(isNumber);
    return (data.length ===0) ? null : (data.length === 1 ) ? [data,data] : [min(data), max(data)];
  };

}).call(this);