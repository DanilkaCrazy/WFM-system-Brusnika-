import Layout from '../components/layout';
import StaffSVG from '../components/svg/staff-svg';
import { fetchStaffDataAction } from '../store/api-actions';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getStaffData } from '../store/staff-process/selectors';
import { generatePath, useNavigate } from 'react-router-dom';
import { AppRoutes } from '../app-routes';
import UserSmallAvatarSVG from '../components/svg/user-small-avatar-svg';
import { Roles } from '../consts';
import LoadingScreen from './loading-screen';

export default function StaffScreen(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const staffData = useAppSelector(getStaffData);

  useEffect(() => {
    dispatch(fetchStaffDataAction());
  }, [dispatch]);

  if (!staffData) {
    return <LoadingScreen />;
  }

  const handleEditButtonClick = (staffMemberId: string) => {
    navigate(generatePath(AppRoutes.StaffMember.FullPath, { id: staffMemberId }));
  };

  return (
    <Layout>
      <article className="staff main">
        <div className="main__title">
          <StaffSVG stroke='black' />
          <h1 className="main__title-text title-reset">Сотрудники</h1>
        </div>
        <ul className="staff__list list-reset">
          {staffData.map((staffMember) => (
            <li key={staffMember.id} className="staff__member">
              <div className="staff__member-avatar">
                {staffMember.avatarUrl
                  ? <img src={staffMember.avatarUrl} className="staff__member-avatar-img" alt='Аватарка' />
                  : <UserSmallAvatarSVG />}
              </div>
              <div className="staff__member-info">
                <span className="staff__member-fio">
                  {`${staffMember.first_name} ${staffMember.last_name} ${staffMember.patronymic}`}
                </span>
                <span className="staff__member-role">
                  {Roles[staffMember.role]}
                </span>
              </div>
              <button onClick={() => handleEditButtonClick(staffMember.id)} className="staff__member-edit-btn btn-reset">
                Редактировать
              </button>
            </li>
          ))}
        </ul>
      </article>
    </Layout>
  );
}
