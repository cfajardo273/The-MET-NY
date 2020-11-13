const template = document.querySelector('#painting');

export const renderOnScreeen = (paintings) => {
  const paintingsSection = document.querySelector('#paintings');
  paintings.forEach((painting) => {
    const {
      title,
      primaryImage,
      artistDisplayName,
      objectBeginDate,
      medium,
      dimensions,
    } = painting;

    console.log({ painting });

    const clone = template.content.cloneNode(true);

    // image
    const img = clone.querySelector('img');
    img.setAttribute('alt', title);
    img.setAttribute('src', primaryImage);

    // title
    const titleElement = clone.querySelector('#title');
    titleElement.innerText = title;

    // artist
    const artist = clone.querySelector('#artist');
    artist.innerText = artistDisplayName;

    // date
    const date = clone.querySelector('#date');
    date.innerText = objectBeginDate;

    // medium
    const mediumElement = clone.querySelector('#medium');
    mediumElement.innerText = medium;

    // Dimensions
    const dimensionsElement = clone.querySelector('#dimensions');
    dimensionsElement.innerText = dimensions;

    paintingsSection.appendChild(clone);
  });
};
