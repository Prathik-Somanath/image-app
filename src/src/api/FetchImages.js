import axios from 'axios';

const fetchImages = (count = 3) => {
  const apiRoot = 'https://api.unsplash.com';
  const accessKey = 'nVcNALuZNoMjAmJmKvgm-3vTQyq8u3z5YqBbPNZdA5c';

  axios
    .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
    .then(res => {
      console.log('return data:', res.data);
      return res.data;
    })
    .catch(err => console.log('error in fetching images: ', err));
};

export default fetchImages;
