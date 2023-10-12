import signupUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstname, lastname, filename) {
  return Promise.allSettled([
    signupUser(firstname, lastname),
    uploadPhoto(filename),
  ]).then((results) => results => {
    return results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason, 
    }));
  });
}
