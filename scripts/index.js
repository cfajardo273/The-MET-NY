import { getPaintingsByRegion } from './met-requests.js';
import { renderOnScreeen } from './render.js';

// Element
const form = document.querySelector('form');
const inputSearch = document.querySelector('input[type="search"]');
const paintingsSection = document.querySelector('#paintings');

const capitalise = (string) => string.replace(/^\w/, (c) => c.toUpperCase());

// Execution
const handleSubmit = async (event) => {
  event.preventDefault();
  const { value: searchstring } = inputSearch;

  const paintings = await getPaintingsByRegion(capitalise(searchstring));
  paintingsSection.innerHTML = '';
  renderOnScreeen(paintings);
};

// Event
form.addEventListener('submit', handleSubmit);
