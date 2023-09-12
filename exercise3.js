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
    const currencies = data.currencies;
    let currenciesHtml = "";

    for (const currencyCode in currencies) {
        const currency = currencies[currencyCode];
        currenciesHtml += `<b>Currency:</b> ${currencyCode}, Name: ${currency.name}, Symbol: ${currency.symbol}`;
    }

    document.getElementById("countryInfo").innerHTML = `<p><b>Name:</b> ${data.name.common}</p>
    <p><b>Member of UN:</b> ${data.unMember}</p>
    <p>${currenciesHtml}</p>
    <p><b>Capital:</b> ${data.capital}</p>
    <p><b>Borders:</b> ${data.borders}`
})