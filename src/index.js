import './sass/styles.scss';

import refs from './js/refs';
import fetchCountries from './js/fetchCountries';

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
