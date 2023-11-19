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

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      const arr = [];
      results.forEach((result) => {
        arr.push(result);
      });
      return arr;
    });
  }
