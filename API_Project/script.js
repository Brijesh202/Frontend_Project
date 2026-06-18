const countriesConatiner = document.querySelector('.countries-container');
const filterByRegion = document.querySelector('.filter-by-region');
const searchInput = document.querySelector('.search-container input');
const themeChanger = document.querySelector('.theme-changer');
const themeIcon = themeChanger.querySelector('i');
const themeText = themeChanger.querySelector('.theme-text');

let allCountries = [];

function renderCountries(countries){
    countriesConatiner.innerHTML = '';

    countries.forEach((country) => {
        console.log(country);
        const countryCard = document.createElement('a');
        countryCard.classList.add('country-card');
        countryCard.href = `./country.html?${country.name}`;

        const cardHTML = `
            <img src="${country.flags.svg}" alt="${country.name} flag">
            <div class="card-text">
                <h3 class="card-title">${country.name}</h3>
                <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
                <p><b>Region: </b>${country.region}</p>
                <p><b>Capital: </b>${country.capital}</p>
            </div>`;

        countryCard.innerHTML = cardHTML;

        countriesConatiner.append(countryCard);
    });
}


fetch('./data.json')
  .then((res) => res.json())
  .then((data) => {
    allCountries = data;
    renderCountries(allCountries);
});


filterByRegion.addEventListener('change',(e) => {
   // console.log(e.target.value);

   const selectedRegion = e.target.value;

   const filteredData = selectedRegion === 'All' || selectedRegion === '' ? allCountries : allCountries.filter((country) => country.region === selectedRegion);

   renderCountries(filteredData);
});



searchInput.addEventListener('input', (e) => {
    // console.log(e.target.value);
    const searchedCountry = allCountries.filter((country) => {
        return country.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    console.log(searchedCountry);

    renderCountries(searchedCountry);
})

themeChanger.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if(document.body.classList.contains('dark')){
        themeText.innerText = 'Light Mode';
        themeIcon.classList.remove('fa-regular', 'fa-moon');
        themeIcon.classList.add('fa-solid', 'fa-sun');
    }
    else{
        themeText.innerText = 'Dark Mode';
        themeIcon.classList.remove('fa-solid','fa-sun');
        themeIcon.classList.add('fa-regular','fa-moon');
    }
    
})