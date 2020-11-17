const BASE_URL = 'https://collectionapi.metmuseum.org/public/collection/v1';

const getObjetcsIdsByRegion = async (region) => {
  const response = await fetch(
    `${BASE_URL}/search?geoLocation=${region}&q=painting&hasImages=true`,
  );
  const { objectIDs } = await response.json();
  return objectIDs;
};

const getPaintingById = async (id) => {
  const response = await fetch(`${BASE_URL}/objects/${id}`);
  return await response.json();
};

export const getPaintingsByRegion = async (region) => {
  const objectIDs = await getObjetcsIdsByRegion(region);

  const paintings = await Promise.all(
    objectIDs.map(async (id) => await getPaintingById(id)),
  );

  return paintings;
};

