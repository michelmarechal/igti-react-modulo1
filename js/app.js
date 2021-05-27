const apiURL = 'https://api.covid19api.com/summary';

fetch(apiURL)
.then((data) => data.json())
.then((data) => {
    let paisDeOrigem = 'Brazil';
    const dadosBrasil = extractDataByCountryName(data.Countries, paisDeOrigem);
});

function extractDataByCountryName(array, countryName) {
    let countryData = {};
    array.forEach((country) => {
        if (country.Country == countryName) {
            countryData = {
                total: country.TotalConfirmed,
                mortes: country.TotalDeaths,
                recuperados: country.TotalRecovered
            };
        };
    });
    return countryData;
};

function renderData(data) {
    const nodeTotal = document.querySelector('#data-total');
    const nodeMortos = document.querySelector('#data-mortos');
    const nodeRecuperados = document.querySelector('#data-recuperados');


}