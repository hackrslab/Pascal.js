/**
 * Pascal.js
 * https://github.com/insanehong/Pascal.js
 *
 * Pascal.js is ans extendsive math library for javascript.
 * This library is designed to help people of web developer who are development of Statistics,Chart library, office application and analytics.
 *  
 * Copyright (c) 2013 Insanehong and other contributors
 * 
 * Contributors
 *
 * Special Thanks @Geekdani, @J2P_
 * 
 * MIT LISENCE
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
    if(typeof module !== 'undefined' && module.exports) {
       exports = module.exports = Pascal;  
    }
    exports.Pascal = Pascal;
  } 

  if (typeof require !=='undefined' && typeof define !== 'undefined') {
    define(function() { return Pascal; });
  } 

  if(typeof window !== 'undefined') {
    root.Pascal = Pascal; 
  }

  Pascal.VERSION = '0.2.1';

  var matrix = Pascal.maxtrix = {},
      array = Pascal.array = {},
      PI = Pascal.PI = Math.PI,
      E = Pascal.E = Math.E,
      abs = Pascal.abs = Math.abs,
      pow = Pascal.pow = Math.pow,
      acos = Pascal.acos = Math.acos,
      asin = Pascal.asin = Math.asin,
      atan = Pascal.atan = Math.atan,
      atan2 = Pascal.atan2 = Math.atan2,
      cos = Pascal.cos = Math.cos,
      sin = Pascal.sin = Math.sin,
      tan = Pascal.tan = Math.tan,
      sqrt = Pascal.sqrt = Math.sqrt,
      exp = Pascal.exp = Math.exp;
      
  function ascending(a,b) {
    return (a < b) ? -1 : (a > b) ? 1 : 0;
  }

  function descending(a,b) {
    return (b < a) ? -1 : (b > a) ? 1 : 0;
  }

  function isNumber(n) {
    return (typeof n !== 'undefined' && n!==null && !isNaN(n)) ? true : false;
  }

  function isArray(array) {
    return (Object.prototype.toString.call(array) === '[object Array]') ? true : false;  
  }

  function isEmpty(array) {
    return (typeof array === 'undefined' || array.length === 0 || array ===null) ? true : false;
  }

  function isESL(number) {
    var epsilon = abs(number - floor(number)) ;
    if(isFinite(number)) {
      return ( epsilon > 0.9999999 || epsilon < 0.0000001) ? true : false;
    }

    return false;
  }
  
  function originfn(n) {
    return n;
  }

  var arrayMap = Pascal.arrayMap = function(array,fn) {
    var tmep =[],
        length = array.length,
        i;

    for(i=0; i < length; i++) tmep.push(fn.call(array,array[i],i)) ;  
    return tmep;    
  };

  var log = Pascal.log = function(exp,base) {
    return (typeof base === 'undefined' || !isNumber(base)) ? Math.log(exp) : (base===1) ? 0 : Math.log(exp) / Math.log(base);
  };

  var log10 = Pascal.log10 = function(exp) {
    return log(exp,10);
  };

  var log2 = Pascal.log2 = function(exp) {
    return log(exp,2);
  };

  var round = Pascal.round = function(number,digits) {
    return (digits === 'undefined' || isNaN(digits)) ? Math.round(number) : Math.round(number*pow(10,digits))/pow(10,digits);  
  };

  var ceil = Pascal.ceil = function(number,digits) {
    return (digits === 'undefined' || isNaN(digits)) ? Math.ceil(number) : Math.ceil(number*pow(10,digits))/pow(10,digits);  
  };

  var floor = Pascal.floor = function(number,digits) {
    return (digits === 'undefined' || isNaN(digits)) ? Math.floor(number) : Math.floor(number*pow(10,digits))/pow(10,digits);  
  };

  var min = Pascal.min = function(array,fn) {
    var mapfn = fn || originfn;
    return Math.min.apply(null, array.map(mapfn).filter(isNumber));
  };

  var max = Pascal.max = function(array,fn) {
    var mapfn = fn || originfn;
    return Math.max.apply(null, array.map(mapfn).filter(isNumber));
  };
  
  var minmax = Pascal.minmax = function(array,fn) {
    return [min(array,fn), max(array,fn)];
  };

  var random = Pascal.random = function(min,max) {
    return floor(Math.random() * (Number(max) - Number(min) + 1)) + Number(min);
  };

  var gamma = Pascal.gamma = function(number) {
    var g = 7,
        p = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905,
            -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7],
        x = p[0],
        length = p.length,
        i=1, 
        t, 
        rs;

    if(!isNumber(number)) return NaN;
    else Number(number);    
    
    if(number < 0.5 ) return PI / ( sin(PI * number) * gamma(1 - number));
    
    number -= 1;
    t = number + g + 0.5;
    
    for ( ; i < length; i++) x += p[i] / (number + i );
       
    rs = parseFloat(sqrt(2 * PI) * pow(t, (number + 0.5)) * exp(-t) * x);
    return (isESL(rs)) ? round(rs,7) : rs;
  };

  var beta = Pascal.beta = function(a,b) {
    return (a < 0 || b < 0) ? NaN : (gamma(a) * gamma(b)) / gamma(a+b);
  };

  var fact = Pascal.fact = function(number) {
    if(!isNumber(number)) return NaN;
    else number = Number(number);

    return (number < 0) ? -1 : (number === 0) ? 1 : gamma(number+1);
  };

  var perm = Pascal.perm = function(n,r) {
    if(isNaN(n) || isNaN(r)) return NaN;
    else {
      n = Number(n);
      r = Number(r); 
    }

    if(n <= r) return fact(n);
    return (r===0) ? 1 : parseInt(n * perm(n-1,r-1),10); 
  };

  var sum = Pascal.sum =  function(array,fn) {
    var total = 0,
        leng = 0,
        result,
        i,
        mapfn = fn || originfn;
    
    array = array.map(mapfn).filter(isNumber);
    leng = array.length;
    for(i=0; i < leng; i++) {
      total+= Number(array[i]);
    }
    
    return total;
  };

  var mean = Pascal.mean = function(array,fn) {
    var total=0,
        i,
        result,
        mapfn = fn || originfn;

    array = array.map(mapfn).filter(isNumber);
    total = sum(array);
    return total / array.length;
  };

  var variance = Pascal.variance = function(array,fn) {
    var vmean,
        sumstd,
        mapfn = fn || originfn;
    
    array = array.map(mapfn).filter(isNumber);
    
    vmean = mean(array);
    sumstd = sum(array,function(n) { return pow(n-vmean,2); });
    return sumstd / (array.length -1); 
  };

  var varp = Pascal.varp = function(array,fn) {
    var powmean,
        meanpow,
        mapfn = fn || originfn;
    
    array = array.map(mapfn).filter(isNumber);
    meanpow = pow(mean(array),2);
    powmean = mean(array,function(n){ return pow(n,2); });    

    return powmean - meanpow;       
  };

  var stdev = Pascal.stdev = function(array,fn) {
    return sqrt(variance(array,fn));
  };

  var stdevp = Pascal.stdevp = function(array,fn) {
    return sqrt(varp(array,fn));
  };
  
  var median = Pascal.median = function(array,fn) {
    return quantile(array,0.5,fn);  
  };    

  var quantile = Pascal.quantile = function(array,p,fn) {
    var h,
        fh,
        N,
        i,
        q,
        mapfn = fn || originfn;
    
    array = array.map(mapfn).filter(isNumber).sort(ascending);
 
    N = array.length;
    
    if(N === 0 ) return null;

    h = ((N - 1) * p) +1;
    hf = floor(h);
    i = hf -1;
    
    q = Number(array[i]) + ((h-hf)*(Number(array[hf]) - Number(array[i])));
    
    return q;
  };

  var quartile = Pascal.quartile = function(array,fn) {
    var q1,
        q2,
        q3,
        q4,
        mapfn = fn || originfn;
    
    
    array = array.map(mapfn).filter(isNumber).sort(ascending);
    
    q0 = min(array);
    q1 = quantile(array,0.25),
    q2 = quantile(array,0.5),
    q3 = quantile(array,0.75),
    q4 = max(array);

    return (array.length === 0 ) ? null : [q0,q1,q2,q3,q4];
  };

  var cov = Pascal.cov = function(arrayX,arrayY) {
    var X = arrayX.filter(isNumber),
        Y = arrayY.filter(isNumber),
        meanX = mean(X),
        meanY = mean(Y),
        covData = [],
        i = 0, total=0;

    if(X.length !== Y.length || X.length===0) return NaN;

    for( ; i < X.length ; i++ ) {
      covData.push( (X[i] - meanX) * (Y[i] - meanY) );
    }    

    total = sum(covData);
    return total / (X.length -1) ;  
  };
  
  var covp = Pascal.covp = function(arrayX,arrayY) {
    var X = arrayX.filter(isNumber),
        Y = arrayY.filter(isNumber),
        XY = [],
        temp = 0;

    if(X.length !== Y.length || X.length===0) return NaN;

    for(var i = 0; i < X.length ; i++ ) {
      XY.push(X[i] * Y[i]);
    }    

    var meanX = mean(X),
        meanY = mean(Y),
        meanXY = mean(XY);
    
    return meanXY -  (meanX * meanY) ;  
  };

  var corr = Pascal.corr = function(arrayX,arrayY) {
    var X = arrayX.filter(isNumber),
        Y = arrayY.filter(isNumber);

    return cov(X,Y) / ( stdev(X) * stdev(Y) ) ;
  };

}).call(this);