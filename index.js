// Example - 1:

var pet = function(name){
    var getName = function(){
        console.log("NAME--->", name)
        return name;
    }
    return getName;
};

myPet = pet('Vivie');

console.log("test 1-->", myPet);
console.log("test 2-->", myPet());

// Example - 2 :  An object containing methods for manipulating the inner variables of the outer function

var createPet = function(name){
    var sex;

    return {
        setName: function(newName){
            name = newName;
        },

        getName: function(){
            return name;
        },

        getSex: function(){
            return sex;
        },

        setSex: function(newSex){
            if(typeof newSex === 'string' && (newSex.toLowerCase() === 'male' || newSex.toLowerCase() === 'female'))
                sex = newSex;
        }
    }

};

var pet = createPet('Vivie');
console.log(pet.getName());
pet.setName('Shashi');
console.log(pet.getName());
pet.setSex('male');
console.log(pet.getSex());


// Example - 3: 
var getCode = (function(){
    var apiCode = '0]Eal(eh&2'; // A code we do not want outsiders to be able to modify...

    return function(){
        return apiCode;
    };

})();

console.log(getCode());

// 

function myConcat(separator) {
    var result = ''; // initialize list
    var i;
    // iterate through arguments
    for (i = 1; i < arguments.length; i++) {
       result += arguments[i] + separator;
    }
    return result;
 }

 console.log(myConcat(', ', 'red', 'orange', 'blue'));