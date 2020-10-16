import quantityCountries from './quantityCountries';

function fetchCountries(searchQuery) {
  if (!searchQuery) {
    return;
  }
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

  return fetch(url)
    .then(res => res.json())
    .then(searchQuery => quantityCountries(searchQuery))
    .catch(error => console.log(error));
}

export default fetchCountries;
