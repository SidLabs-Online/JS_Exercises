
var createUser =  function (name) {
  var gender;
  
  return{
    setName: function (newName) {
      name = newName;
    },
    
    getName: function () {
      return name;
    },

    getGender: function () {
      return gender;
    },

    setGender: function (newGender) {
      if(typeof newGender === 'string' && (newGender.toLowerCase() === 'male' || newGender.toLowerCase() === 'female')){
        gender = newGender;
        
      }
    }
  }
}

// Creating x5 new users using a for loop & printing their details

let listOfUsers = {};// initializing a dictionary to store the users that are created below, P.S. the scope of this variable is kept as global!

for(var i=1; i<=5; i++){
  let userObj = createUser();
  userObj.setName(`Tango${i}`);
  userObj.setGender(`female`);
  listOfUsers[i]=[`${userObj.getName()}`,`${userObj.getGender()}`]
  console.log("");
  console.log(`${i}. ${userObj.getName()} : ${userObj.getGender()}`)
  
  }



// creating one new user at a time 

var user1 = createUser('Burnett');
user1.setGender("Female")
console.log("");
console.log("The first user is > "+user1.getName());
console.log("Gender : "+user1.getGender()); 

var user2 = createUser('Oliver');
user2.setGender('Female');
console.log("");
console.log("The Second user is > "+user2.getName());
console.log("Gender : "+user2.getGender());

var user3 = createUser('Alba');
user3.setGender('Female');
console.log("");
console.log("The third user is > "+user3.getName());
console.log("Gender : "+user3.getGender());

// An example of what you can now do with these users we created

console.log(user1.getName()+" greets "+user2.getName()+" and "+user3.getName()+"!");
console.log("");
console.log(listOfUsers); // printing the list of stored users created by the loop