const createImage = (src, srcSet) => {
  const image = new Image();
  image.src = src;
  image.srcset = srcSet;
  return image;
};

export default createImage;
