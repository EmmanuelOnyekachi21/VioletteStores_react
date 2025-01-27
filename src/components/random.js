console.log('generator.js loaded');
export default function generatorfxn (length = 10){
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    const RandomIndex = Math.floor(Math.random() * characters.length);
    result += characters[RandomIndex];
  }

  return result;
}
