function addTwo(num:number):number{
    return num+2
}

addTwo(345) 

const loginUser = (name:string,email:string) =>{
    console.log("login")
}

loginUser("fabricio","exameple@email.con")


const names = ["fabricio","maria","luis"]

names.map((name):string=>{
    return `Name: ${name}`
})


function consoleError(errmsg:string):void{
    console.log(errmsg)
}

function handleError(errmsg:string):never{
    throw new Error(errmsg)
}


export {}