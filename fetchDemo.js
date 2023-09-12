fetch('https://jsonplaceholder.typicode.com/users/14')
.then(res => {
    // console.log(res)
    if(res.status >= 400){
        const error = new Error(`Error ${res.status} ${res.statusText}`)
        throw error
    }
    return res.json()
})
.then(data => {
    console.log(data)
})
.catch(err => {
    console.log(err.message)
})