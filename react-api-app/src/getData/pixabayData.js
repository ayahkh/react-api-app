


  export const getPixabayData = url => {
    return fetch(`${url}`)
    .then(results=>{
      return results.json();
  }).then(data=>{
      return data.hits;        
  })
  };
