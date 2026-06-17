const countriesConatiner = document.querySelector('.countries-container');


fetch('./data.json')
  .then((res) => res.json())
  .then((data) => {
    data.forEach((country) => {
        console.log(country);
        const countryCard = document.createElement('a');
        countryCard.classList.add('country-card');
        countryCard.href = `./country.html?${country.name}`;

        const cardHTML = `
            <img src="${country.flags.svg}" alt="flag">
            <div class="card-text">
                <h3 class="card-title">${country.name}</h3>
                <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
                <p><b>Region: </b>${country.region}</p>
                <p><b>Capital: </b>${country.capital}</p>
            </div>`;

        countryCard.innerHTML = cardHTML;

        countriesConatiner.append(countryCard);
    })
  });



