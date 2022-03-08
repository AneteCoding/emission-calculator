export function search(city) {

    return new Promise((resolve, reject) => {
        fetch(`https://greatcirclemapper.p.rapidapi.com/airports/search/${city}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "greatcirclemapper.p.rapidapi.com",
                "x-rapidapi-key": "371b810738msh6b3976b89e4c200p1e1728jsn4e68ed677b97"
            }
        })
            .then(response => response.json())

            .then(data => {
                const res = data.length > 0 ? data[0] : null;
                resolve(res);
            })
            .catch(err => {
                reject(err)

            });
    })


}