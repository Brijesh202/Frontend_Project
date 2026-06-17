const countryName = decodeURIComponent(location.search.slice(1));

// const countryName = new URLSearchParams(location.search).get('name');

const flagImage = document.querySelector('.country-details img');
const countryNameh1 = document.querySelector('.country-details h1');
const nativeName = document.querySelector('.native-name');
const population = document.querySelector('.population');
const region = document.querySelector('.region');
const subRegion = document.querySelector('.sub-region');
const capital = document.querySelector('.capital');
const topLevelDomain = document.querySelector('.top-level-domain');
const currencies = document.querySelector('.currencies');
const language = document.querySelector('.language');
// console.log(countryName);
const borderCountries = document.querySelector('.border-countries');


fetch('./data.json')
    .then((res) => res.json())
    .then((data) => {
        const country = data.find((c) => {
            return c.name === countryName
        });
        console.log(country);

        flagImage.src = country.flags.svg;
        countryNameh1.innerText = country.name;
        nativeName.innerText = country.nativeName;
        population.innerText = country.population.toLocaleString('en-IN');
        region.innerText = country.region;
        subRegion.innerText = country.subregion;
        if(country.capital){
            capital.innerText = (country.capital);
        };
        topLevelDomain.innerText = country.topLevelDomain;
        if(country.currencies){
            currencies.innerText = (country.currencies).map((currency) => currency.name).join(', ');
        };
       if(country.languages){
         language.innerText = (country.languages).map((language) => language.name).join(', ');
       };


       if(country.borders){
        country.borders.forEach((borderCode) => {
            console.log(borderCode);
            const borderCountry = data.find((a) => {
                return a.alpha3Code == borderCode
            });

            console.log(borderCountry.name);
            const borderCountryTag = document.createElement('a');
            borderCountryTag.innerText = borderCountry.name;
            borderCountryTag.href = `country.html?${encodeURIComponent(borderCountry.name)}`;

            // console.log(borderCountryTag);
            borderCountries.append(borderCountryTag);
        })
       }
    });