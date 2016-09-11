/* Declare and Define the functions here that will make the function calls below work properly */
function first(array, callback) {
  callback(array[0]);
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

function last(array, callback) {
  callback(array[array.length - 1]);
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var numbers = [1,2,3,4,5];

function map(myArr, callback) {
	 return myArr.map(callback);
}
//Produces a new array of values by mapping each value in list through a transformation function
map(numbers, function(num)){
  return num * 2; //returns an array of [2,4,6,8,10]
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function uniq(myArr, callback) {
  var uniqArr = [];
  for (var name of myArr) {
    if (uniqArr.indexOf(name) === -1) {
      uniqArr.push(name);
    }
  }
  return callback(uniqArr)
}

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
function each(myArray, callback) {
  for (var item in myArray) {
    var indice = myArr.indexOf(item);
  }
  return callback(item, indice);
}


each(names, function(item, indice){
  console.log('The item in the ' + indice + 'position is ' + item)
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

function getUserById(idNum, array, callback) {
	for (var i = 0; i < array.length; i++) {
		if (array[i].id === idNum ) {
			var user = array[i];
		}
	}
	return callback(user);
}

getUserById('16t', users, function(user){
  console.log('The user with the id '+ user.id + ' has the email of ' + user.email + 'the name of ' + user.name + ' and the address of ' + user.address);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




//Looks through each value in the list, returning the first one that passes a truth test
var numbers  = [1, 2, 3, 4, 5, 6];

function find(array, callback) {
  
}


find(numbers, function(num){
  return num % 2 == 0; //should return 2
})
