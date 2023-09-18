async function getData() {
    try {
        const res = await fetch(`http://localhost:8080/regioner`)
        if (res.status >= 400) {
            const error = new Error(`Error ${res.status} ${res.statusText}`)
            throw error
        }
        const data = await res.json()
        return data
    } catch (err) {
        console.log(err.message)
    }
}

function processData(data) {
    const tab = data.map((d) => {
        return `<tr><th>${d.kode}</th><th>${d.navn}</th><th><a href=${d.href}>${d.href}</th></tr>`
    }).join("")
    document.getElementById("tbl1").innerHTML = tab;
}

async function init() {
    const data = await getData();
    processData(data);

    document.getElementById("abv-btn").addEventListener("click", async (ev) => {
        ev.preventDefault();
        const abvValue = document.getElementById("filter-abv").value;
        const filteredBeers = data.filter((beer) => beer.abv > abvValue);
        processData(filteredBeers);
    });
}

init();
