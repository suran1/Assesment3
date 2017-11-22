/*=========================
    JavaScript Array Methods
=========================*/

/* Use this array for Q1 through Q3 */
var users = [
    {id:1, username: 'luke.sky', firstName: 'Luke', age: 20, race: 'human'},
    {id:2, username: 'leia.org', firstName: 'Leia', age: 20, race: 'human'},
    {id:3, username: 'han.solo', firstName: 'Han', age: 25, race: 'human'},
    {id:4, username: 'chewy', firstName: 'Chewbacca', age:200, race: 'wookie'} 
];

/*==============
    Q1 -  Use JavaScript to retrieve all the 'humans' in the array.
================*/
var humans = [];

var humans = users.filter(function(element, index, array){
  
        return element.race==='human';
    
});

console.log(humans);


test('q1', humans);



/*==============
    Q2 -  Use JavaScript to retrieve the object in the array with the 'id' equal to 2.
================*/
var leia;

var leia = users.filter(function(element, index, array){

return element.id=='2';
});

console.log(leia);

test('q2', leia);

/*==============
    Q3 - Use JavaScript to calculate the total age of all users.    
================*/
var totalAge = 0;
users.forEach(function(element, index, array){
totalAge+= element.age;
console.log(totalAge);
});




test('q3', totalAge);
/*==============
    Q4 - Use JavaScript to create a new array that contains only the username of each user
    Expected Output: userNames = ["luke.sky", "leia.org", "han.solo", "chewy"]
================*/
var userNames = [];

var userName= users.map(function(){
  return element.username; 

});

console.log(userName);




test('q4', userNames);

/*==============
    Q5 - Use JavaScript to sort this array of numbers ascending.
================*/
var numbers = [15,16,8,4,23,42]
numbers.sort(function(a,b){
    return (a-b);
});

console.log(numbers); // output [4, 8, 15, 16, 23, 42]


test('q5', numbers);

/*==============
    Q6 - Use JavaScript to replace all instances of the word 'lorem' in this string using regular expressions
================*/
var replacement = 'Lorem ipsum dolor sit lorem consectetur adipisicing lorem. Numquam, dicta repellendus excepturi consequatur sint ipsum quibusdam delectus lorem laborum eveniet fuga officiis nesciunt nemo ab dignissimos eos doloremque consectetur quod praesentium reprehenderit. Incidunt voluptate, quo rerum mollitia adipisci nam dignissimos, ex cupiditate accusamus cumque sunt corrupti lorem vlorem nemo explicabo.';
var re1 = /lorem/gi;
var newString= replacement.replace(re1, 'lorem');
console.log(newString);


test('q6', replacement);


/*==============
    Q7 - What is the difference between .forEach() and .map()
The Diffrence between .forEach and .map are given below.

*** Map is a function on the Array prototype that takes a callback function and 
replaces the current element in the array with whatever is returned from the callback function. 
The callback function receives 3 arguments from the filter function:
element - the current element in the array
index - the index of the current element in the array
origArray - the original array.


**** forEach() iterates over a list and applies some operation with side effect to each list member.
****forEach(). returns nothing.

**** map() iterates over a list, transforms each member of that list, and return another list of the same size with the transformed
members.
**** .map() returns a new Array  of Objects.

for example of Map() function. convert Fahrenheit to Celsius.

var fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

var celcius = fahrenheit.map(function(elem) {
    return Math.round((elem - 32) * 5 / 9);
}); 

console.log(celcius);  // [-18, 0, 7, 10, 24, 27, 37, 49]


================*/

/*==============
    Q8 - What is the difference between .filter() and .find()


The diference between .filter() and .find() are given below.

filter():- Filter is a function on the Array prototype that takes a callback function and will return a new array 
containing only the elements where the result of the callback was equal to true. 
The callback function receives 3 arguments from the filter function:
element - the current element in the array
index - the index of the current element in the array
origArray - the original array

forexample:- 

var numbers = [1, 2, 3, 4];

var newNumbers = numbers.filter(function(number){
    return (number % 2 !== 0);
}).map(function(number){
    return number * 2;
});

console.log("The doubled numbers are", newNumbers); 


find():- method returns the value of the first element in the array that satisfies the provided testing function.
  it only returs the first one found that matches.
It has also 3 parameter similar to .find() method such as 
element - the current element in the array
index - the index of the current element in the array
origArray - the original array
================*/


function test(id,result){
    document.getElementById(id).innerHTML = JSON.stringify(result);
}