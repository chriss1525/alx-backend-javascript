import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      console.log(values[0].body, values[1].body.firstName, values[1].body.lastName);
    })
    .catch(() => console.log('Signup system offline'));
}
