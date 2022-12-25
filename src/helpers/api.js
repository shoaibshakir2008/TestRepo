export const postAPi = (url, requestPacket, successHandler, errorHandler) => {
  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestPacket),
  })
    .then(response => response.json())
    .then(data => {
      successHandler(data);
    })
    .catch(error => errorHandler(error));
};

export const getAPi = (url, successHandler, errorHandler) => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      successHandler(data);
    })
    .catch(error => errorHandler(error));
};
