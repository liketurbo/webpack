const randomString = (length = 15) => {
  let str = '';

  for (let i = 0; i < length; i += 10) {
    str += Math.random()
      .toString(36)
      .substring(2);
  }

  return str.substr(0, length);
};

export default randomString;
