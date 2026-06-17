const countryName = decodeURIComponent(location.search.slice(1));

// console.log(countryName);


fetch('./data.json')
    .then((res) => res.json())
    .then((data) => {
        const country = data.find((c) => {
            return c.name === countryName
        });

        console.log(country);
    });