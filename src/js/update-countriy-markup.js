import countriesTpl from '../templates/countries.hbs';
import refs from './refs';

function updateCountryMarkup(countries) {
  const markup = countriesTpl(countries);
  refs.countriesContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateCountryMarkup;
