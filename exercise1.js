async function asyncFetch(id){
    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        if(res.status >= 400){
            const error = new Error(`Error ${res.status} ${res.statusText}`)
            throw error
        }
        const data = await res.json()
        return data;
    }catch(err){
        console.log(err.message)
    }
}

document.getElementById("submitGet").addEventListener("click", async (ev) => {
    ev.preventDefault();
    const userId = document.getElementById("userId").value;
    console.log(userId)
    const data = await asyncFetch(userId)
    console.log(data.address)
    document.getElementById("userInfo").innerHTML = `<p>${data.name}</p>
    <p>Phone: ${data.phone}</p><br>
    <h1>Address</h1>
    <p>Street: ${data.address.street}</p>
    <p>City: ${data.address.city}</p>
    <p>ZIP: ${data.address.zipcode}</p>
    <p>GEO (lat,lon): ${data.address.geo.lat}, ${data.address.geo.lng}</p>`
})