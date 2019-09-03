import api_key from '../../config.env';
export const API_URL = "https://pixabay.com/api/";
console.log("API_URL" , API_URL);

const checkResponse = response => {
    if (response.status !== 200) {
      console.log(`Error with the request! ${response.status}`);
      return;
    }
    return response.json();
  };

  export const getPixabayData = url => {
    return fetch(`${url}?key=${api_key}`)
      .then(checkResponse)
      .catch(err => {
        throw new Error(`fetch getUserData failed ${err}`);
      });
  };
