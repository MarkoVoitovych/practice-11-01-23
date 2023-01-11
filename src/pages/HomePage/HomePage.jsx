import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelector';

function HomePage() {
  const user = useSelector(selectUser);
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <img src={user.img} width="320" alt={user.name} />
    </div>
  );
}

export default HomePage;
