let obj = {};
obj.name ="ralle";
obj.year = 1995;
obj.speak = function () {
    console.log(this.name);
    console.log(this);
 
    return "my Name is "+this.name+" and "+this.year;
console.log(person);

}
const person = {};