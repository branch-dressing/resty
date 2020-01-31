const fetchMyStuff = (url, route) => {
  return fetch(url, {
    method: route,
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json());
};

export default fetchMyStuff;