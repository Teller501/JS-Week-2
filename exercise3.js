async function getCountry(code){
    try{
        const res = await fetch(`https://countries.plaul.dk/api/countries/${code}`)
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

document.getElementById("layer2").addEventListener("click", async (ev) => {
    ev.preventDefault;
    const data = await getCountry(ev.target.id);
    
})