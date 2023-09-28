function getResponseFromAPI(success = true) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve('success');
    } else {
      reject(Error('error'));
    }
  });
}

export default getResponseFromAPI;
