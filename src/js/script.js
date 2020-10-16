import refs from './refs';
import fetchCountries from './fetchCountries';

const debounce = require('lodash.debounce');

refs.countriesInput.addEventListener(
  'input',
  debounce(event => {
    event.preventDefault();
    refs.countriesContainer.innerHTML = '';

    const inputValue = event.target.value;

    fetchCountries(inputValue);
  }, 500),
);
