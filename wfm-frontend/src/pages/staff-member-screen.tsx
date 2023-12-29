/* eslint-disable no-nested-ternary */
import { useState } from 'react';
import Layout from '../components/layout';
import UserAvatarSVG from '../components/svg/user-avatar-svg';
import { useAppDispatch } from '../hooks';
import { changeUserDataAction, deleteUserDataAction } from '../store/api-actions';
import { Roles, RolesRU } from '../consts';
import Select from '../components/select';
import { Role } from '../types/role';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../app-routes';
import useStaffMemberByParamId from '../hooks/use-staff-member-by-param-id';
import StaffSVG from '../components/svg/staff-svg';
import LoadingScreen from './loading-screen';
import AddAvatarSVG from '../components/svg/add-avatar-svg';

export default function StaffMemberScreen(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const staffMemberData = useStaffMemberByParamId();

  const [editing, setEditing] = useState(false);
  const [newRole, setNewRole] = useState<string | undefined>(staffMemberData?.role && Roles[staffMemberData.role]);

  if (!staffMemberData) {
    return <LoadingScreen />;
  }

  const hanldeBackButtonClick = () => {
    navigate(AppRoutes.Staff.FullPath);
  };

  const hanldeEditButtonClick = () => {
    setEditing(true);
  };

  const hanldeSaveChangeButtonClick = () => {
    // добавить проверку на наличие изменений
    dispatch(changeUserDataAction({
      role: RolesRU[newRole as Role],
    }));
    setEditing(false);
  };

  const hanldeDeleteButtonClick = () => {
    dispatch(deleteUserDataAction({
      id: staffMemberData.id,
    }));
  };

  const avatarComponent = staffMemberData?.avatarUrl
    ? <img src={staffMemberData.avatarUrl} className="user__avatar-img" alt='Аватарка' />
    : <UserAvatarSVG />;

  return (
    <Layout>
      <article className="staff-member main">
        <div className="main__title">
          <StaffSVG stroke='black' />
          <h1 className="main__title-text title-reset">Сотрудники</h1>
        </div>
        {editing
          ?
          <>
            <div className="user__info">
              <div className='user__left-info'>
                <button className="user__avatar btn-reset">
                  {avatarComponent}
                  <AddAvatarSVG />
                </button>
                <div className="staff-member__role-field">
                  <Select
                    values={Object.keys(RolesRU)}
                    selectedValue={newRole}
                    setSelectedValue={setNewRole}
                    placeholder="Должность"
                    id='new-role'
                  />
                </div>
              </div>
              <div className="user__data">
                <div className="user__fio">{staffMemberData.first_name}</div>
                <div className="user__fio">{staffMemberData.last_name}</div>
                <div className="user__fio">{staffMemberData.patronymic}</div>
              </div>
            </div>
            <div className='user__btns'>
              <button onClick={hanldeSaveChangeButtonClick} className="user__save-btn btn-reset">Сохранить</button>
              <button onClick={hanldeDeleteButtonClick} className="user__signout-btn btn-reset">Удалить</button>
            </div>
          </>
          :
          <>
            <div className="user__info">
              <div className='user__left-info'>
                <div className="user__avatar" >{avatarComponent}</div>
                <div className="user__role">{Roles[staffMemberData.role]}</div>
              </div>
              <div className="user__data">
                <div className="user__fio">{staffMemberData.first_name}</div>
                <div className="user__fio">{staffMemberData.last_name}</div>
                <div className="user__fio">{staffMemberData.patronymic}</div>
              </div>
            </div>
            <div className='user__btns'>
              <button onClick={hanldeBackButtonClick} className="user__signout-btn btn-reset">Назад</button>
              <button onClick={hanldeEditButtonClick} className="user__save-btn btn-reset">Редактировать</button>
            </div>
          </>}
      </article>
    </Layout>
  );
}
