const createImage = src => {
  const image = new Image();
  image.src = src;
  return image;
};

export default createImage;
