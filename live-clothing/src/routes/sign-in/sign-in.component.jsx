import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../utils/firebase";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUserPopup = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div>
      <h1>sign in page</h1>
      <button onClick={logGoogleUserPopup}>Sign in with Google Popup</button>
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default SignIn;
