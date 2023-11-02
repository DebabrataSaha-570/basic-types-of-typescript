{
    // Ternary Operator || Optional chaining || nullish coalescing operator

    // .................Ternary operator 
    const age: number = 18; 
     const isAdult = age >= 18 ? "adult" : "not adult"
    //  console.log({isAdult})


//.........................Nullish coalescing operator
// Null and undefined er upor kono decision make korte gele ei operator use kora hoy . 

const isAuthenticated = null; 

const result1 = isAuthenticated ?? "Guest" // nullish operator
const result2 = isAuthenticated ? isAuthenticated : "Guest" // ternary operator
// console.log({result1}, {result2});

//...............
// ternary and nullish operator example

type User = {
    name: string; 
    address: {
        city: string; 
        road: string; 
        presentAddress: string; 
        permanentAddress?: string //optional chaining
    }
}
const user: User = {
    name: "shuvo", 
    address: {
        city: 'ctg', 
        road: "Awesome road", 
        presentAddress: "ctg town",
    }
}

const permanentAddress = user?.address?.permanentAddress ?? "No Permanent Address"
console.log({permanentAddress});






    
}