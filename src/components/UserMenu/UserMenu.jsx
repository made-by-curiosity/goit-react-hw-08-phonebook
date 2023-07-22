import { useDispatch, useSelector } from 'react-redux';
import { LogOutBtn, UserName, UserWrapper } from './UserMenu.styled';
import { ImExit } from 'react-icons/im';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

export const UserMenu = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <UserWrapper>
      <p>
        Welcome, <UserName>{name}</UserName>
      </p>
      <LogOutBtn type="button" onClick={handleClick}>
        Logout <ImExit />
      </LogOutBtn>
    </UserWrapper>
  );
};
