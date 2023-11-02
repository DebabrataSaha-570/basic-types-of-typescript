{
    //destructuring

//Object destructuring

const user = {
    id: 345, 
    name: {
        firstName: "Shuvo", 
        lastName: "Saha"
    }, 
    contactNo: "018888888", 
    address: "Noakhali"
}

const {contactNo, name:{firstName: prothomName}} = user;

}

//Array destructuring

const myFriends = ['chandler', 'joey', 'ross', 'rachel', 'monica']

const[,,bestFriend, ...rest] = myFriends;

console.log(bestFriend)