async function asyncFetch(){
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users/12321321')
        if(res.status >= 400){
            const error = new Error(`Error ${res.status} ${res.statusText}`)
            throw error
        }
        const data = await res.json()
        console.log(data)
    }catch(err){
        console.log(err.message)
    }
}

asyncFetch();