import moreCountriesTpl from '../templates/moreCountries.hbs';
import refs from './refs';

function updateCountriesMarkup(countries) {
  const moreMarkUp = moreCountriesTpl(countries);

  refs.countriesContainer.insertAdjacentHTML('beforeend', moreMarkUp);
}

export default updateCountriesMarkup;
