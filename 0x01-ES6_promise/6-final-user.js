import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// call previous functions.
// return an array with the following structure:
// [
//   {
//   status: status_of_the_promise,
//   value: value or error returned by the Promise
//   },
//   ...
//   ]

export default function handleProfileSignup (firstName, lastName, fileName) {
  const user = signupUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  const result = [];

  return Promise.allSettled([user, photo]).then((results) => {
    results.map(({ status, value, reason }) => (
      result.push({
        status,
        value: status === 'rejected' ? reason.toString() : value
      })
    ));
    return result;
  });
}
