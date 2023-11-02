{

 // Union and Intersection types

// Ekta khamba (|) hole union type ar ekta and (&) hole intersection type

//union types

//..............................
type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'
type FullStackDeveloper = 'frontendDeveloper' | "expertDeveloper"
type Developer = FrontendDeveloper | FullStackDeveloper

const newDeveloper : FrontendDeveloper = 'juniorDeveloper'
//.................................

type User = {
    name: string; 
    email: string; 
    gender: "male" | "female"; 
    bloodGroup: "O+" | "B+" | "AB+"
}

const user1: User = {
    name: "shuvo", 
    gender: "male", 
    bloodGroup: "B+"
}


// Intersection types (&)

type DeveloperFrontEnd = {
    skills : string[]; 
    designation1: "Frontend Developer"
}
type DeveloperBackEnd = {
    skills : string[]
    designation2 : "Backend Developer"
}

type DeveloperFullStack = DeveloperFrontEnd & DeveloperBackEnd

const Developer: DeveloperFullStack = {
    skills: ["HTML", 'CSS', 'EXPRESS'], 
    designation1: "Frontend Developer",  
    designation2: "Backend Developer"
} 






}