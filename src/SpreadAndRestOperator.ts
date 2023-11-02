{
    //spread operator
    //Rest operator
     //destructuring in Typescript

     //Spread Operator in array
     const bros1: string[] = ['Mir', "Firoz", "Mizan"]
     const bros2: string[] = ["Tanmoy", "Nahid", "Rahat"]

     bros1.push(...bros2)

     //Spread operator in object

     const mentors1 = {
        typeScript : "mezba", 
        redux: "mir", 
        dbms: "mizan"
     }

     const mentors2 = {
        prisma : "firoz", 
        next: "tonmoy", 
        cloud: 'nahid'
     }

     const mentorList = {
        ...mentors1, 
        ...mentors2

     }
     

     //Rest operator

    const greetFriends = (...friends:string[]) => {
        
        friends.forEach((friend: string) => console.log(`Hi ${friend}`))
    }

    greetFriends('Abul', 'Kabul', 'Babul')

}