{
// nullable types
const searchName = (value: string | null) => {
    if(value){
        console.log('Searching');
    }
    else{
        console.log('There is nothing to search')
    }
}

searchName(null)

// unknown types (type Of)
// user ki type er data pathabe oita jodi sure vabe na jana jay tokhon typeOf use korte hobe. 

const getSpeedInMeterPerSecond = (value: unknown) =>{
    if(typeof value === "number"){
        const convertedSpeed = (value * 1000)/3600
        console.log("The speed is", convertedSpeed, 'ms^-1');
    }
    if(typeof value === 'string'){
        const [result, unit] = value.split(' ')
        const convertedSpeed = (parseFloat(result) * 1000)/3600
        console.log("The speed is", convertedSpeed, 'ms^-1');
    }
    else{
        console.log("wrong input");
    }
}

getSpeedInMeterPerSecond("1000 kmh^-1")


//Never type
// jodi ami sure hoi je kono function kono din kono type return korbe na, tokhon never type use korbo

const  throwError = (msg:string): never => {
    throw new Error(msg)
}

throwError("mushkill se error hogaya")


}