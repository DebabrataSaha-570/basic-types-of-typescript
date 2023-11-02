{
//Type Alias for object
type Student = {
    name: string; 
    age: number;
    gender: string;
    address: string;
    contactNo?:string;
}



const student1:Student = {
    name: "Shuvo", 
    age: 23, 
    gender: 'male',
    contactNo: '017777777', 
    address: "noakhali"
}

const student2: Student = {
    name: "Mir", 
    age: 40, 
    gender: 'male', 
    address: 'ctg'
}

//................................

type UserName = string
type IsAdmin = boolean

const userName : UserName = "debabrata"
const isAdmin: IsAdmin = true

//..................................

// Type Alias for function
type Add = (num1: number, num2: number) => number;

const add: Add = (num1, num2) => num1 + num2; 


}