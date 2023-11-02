//typeScript e function lekhar niyom

//Normal Function
function add(num1:number, num2:number){
    return num1 + num2
}

add(3, 5)


//Arrow function
const addArrow = (num1:number, num2:number = 10):number => num1 + num2

//Method (function in a object)

const poorUser = {
    name: "shuvo", 
    balance: 0, 
    addBalance(balance:number) : string{
        return `My new balance is: ${this.balance} + ${balance}`
    }
}

//Map

const arr: number[] = [1, 4, 10]

const newArray:number[] = arr.map((element:number) : number => element * element)