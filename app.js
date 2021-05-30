fetch('https://restcountries.eu/rest/v2/all')
  .then(res => res.json())
  .then(data => displaycountries(data))

const displaycountries = countries => {
  const countriesDiv = document.getElementById('countries')
  for (let i = 0; i < countries.length; i++) {
    const country = countries[i]
    const countryDiv = document.createElement('div')
    countryDiv.className = 'country'

    //   const h3 = document.createElement('h3')
    //   h3.innerText = country.name
    //   const p = document.createElement('p')
    //   p.innerText = country.capital
    // countryDiv.appendChild(h3)
    // countryDiv.appendChild(p)

    const countryInfo =
    `<h3 class= "country-name"> ${country.name}</h3>
        <p class="capital-name"> ${country.capital} </p>
        <button onclick="countrydetail('${country.name}')" >Details</button>`

    countryDiv.innerHTML = countryInfo
    countriesDiv.appendChild(countryDiv)
  }
}
const countrydetail = name => {
  const url = `https://restcountries.eu/rest/v2/name/${name}`
  fetch(url)
    .then(res => res.json())
    .then(data => renderInfo(data[0]))
}
const renderInfo = country => {
  console.log(country)
  const countryDiv = document.getElementById('countryDetail')
  countryDiv.innerHTML = `
  <h1>${country.name}</h1>
  <p>Population: ${country.population}</p>
  <p>Area: ${country.area}</p>
  <p>Region: ${country.region}</p>
  <img src = "${country.flag}">
  
  `
}
