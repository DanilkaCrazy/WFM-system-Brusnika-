import Layout from '../components/layout';
import AddAvatarSVG from '../components/svg/add-avatar-svg';
import UserAvatarSVG from '../components/svg/user-avatar-svg';
import { useAppDispatch, useAppSelector } from '../hooks';
import { logoutAction } from '../store/api-actions';
import { getUserData } from '../store/user-process/selectors';

export default function UserScreen(): JSX.Element { // лк сотрудника; загрузку фото сделаю позже
  const dispatch = useAppDispatch();

  const userData = useAppSelector(getUserData);

  // if (!userData) {
  //   return <LoadingScreen />;
  // }

  // const hanldeSaveButtonClick = () => {
  //   dispatch(logoutAction());
  // };

  const hanldeLogoutButtonClick = () => {
    dispatch(logoutAction());
  };

  return (
    <Layout>
      <article className="user">
        <div className="user__info">
          <div className='user__left-info'>
            <button className="user__avatar btn-reset">
              {userData.avatarUrl
                ? <img src={userData.avatarUrl} className="user__avatar-img" alt='Аватарка пользователся' />
                : <UserAvatarSVG />}
              <AddAvatarSVG />
            </button>
            <div className="user__role">
              {userData.role ?? 'Должность'}
            </div>
          </div>
          <div className="user__data">
            <div className="user__fio">{userData.first_name ?? 'Имя'}</div>
            <div className="user__fio">{userData.last_name ?? 'Фамилия'}</div>
            <div className="user__fio">{userData.patronymic ?? 'Отчество'}</div>
          </div>
        </div>
        <div className='user__btns'>
          {/* {newRole &&
            <button onClick={hanldeSaveButtonClick} className="user__save-btn btn-reset">Сохранить</button>} */}
          <button onClick={hanldeLogoutButtonClick} className="user__signout-btn btn-reset">Выйти</button>
        </div>
      </article>
    </Layout>
  );
}
