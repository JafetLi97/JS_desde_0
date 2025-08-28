function User(){
    this.name = 'Juanito';
}


User.prototype.login = function () {
    console.log('Usuario logueado desde el prototipo');
}
const user1 = new User();
const user2 = new User();

user1.login();

console.log(user1); 