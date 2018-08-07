// an array of scientist data with date of birth and date of passing on
const scientists = [
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  ];

// filter scientist list to show those that were born in the 1600's

//const scientists_born1600s = scientists.filter(function(scientist){
//    if (scientist.year >= 1600 && scientist.year < 1699) {
//        return true;
//    }
//});

const firstDOB = scientists.map(scientist => scientist.first + scientist.passed);
console.table(firstDOB);


//console.log(scientists_born1600s);
//console.table(scientists_born1600s);