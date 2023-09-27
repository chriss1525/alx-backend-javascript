function getResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve('success');
    } else {
      reject(Error('error'));
  }
  });
}
