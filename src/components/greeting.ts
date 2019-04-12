type Lang = 'us' | 'es';
const greeting = (lang?: Lang) => {
  const randInt = Math.floor(Math.random() * 11);

  if (lang === 'us') return `Hello ${randInt}`;
  else return `Hola ${randInt}`;
};

export default greeting;
