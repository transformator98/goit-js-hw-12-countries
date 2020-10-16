import error from './notification';
import updateCountriesMarkup from './update-countries-markup';
import updateCountryMarkup from './update-countriy-markup';

function quantityCountries(countries) {
  if (countries.length === 1) {
    updateCountryMarkup(countries);
  }

  if (countries.length > 1 && countries.length < 11) {
    updateCountriesMarkup(countries);
  }

  if (countries.length > 11) {
    error({
      text: 'To manymatches found. Please enter a more specific query!',
    });
  }
}

export default quantityCountries;
