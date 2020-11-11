import { getPaintingsByRegion } from './met-requests.js';
import { renderOnScreeen } from './render.js';

// Element
const form = document.querySelector('form');
const inputSearch = document.querySelector('input[type="search"]');

const capitalise = (string) => string.replace(/^\w/, (c) => c.toUpperCase());

// Execution
const handleSubmit = async (event) => {
  event.preventDefault();
  const { value: searchstring } = inputSearch;

  const paintings = await getPaintingsByRegion(capitalise(searchstring));
  renderOnScreeen(paintings);
};

// Event
form.addEventListener('submit', handleSubmit);
