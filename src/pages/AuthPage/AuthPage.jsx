import { useDispatch } from 'react-redux';
import { authWithGoogle } from 'redux/auth/authOperations';

function AuthPage() {
  const dispatch = useDispatch();

  const handleGooleAuth = () => {
    dispatch(authWithGoogle());
  };

  return (
    <>
      <div>AuthPage</div>
      <button onClick={handleGooleAuth}>GoogleAuth</button>
    </>
  );
}

export default AuthPage;
