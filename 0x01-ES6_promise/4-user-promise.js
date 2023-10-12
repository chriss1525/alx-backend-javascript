function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    if (!firstName || !lastName) {
      reject(new Error('You need to provide first and last name'));
    }
    resolve({
      firstName,
      lastName,
    });
  });
}

export default signUpUser;
