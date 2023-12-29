import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '.';
import { getStaffMemberData } from '../store/staff-process/selectors';
import { UserData } from '../types/user-data';
import { fetchStaffMemberDataAction } from '../store/api-actions';

export default function useStaffMemberByParamId(): UserData | undefined {
  const dispatch = useAppDispatch();
  const { id: staffMemberId } = useParams();

  const staffMemberData = useAppSelector(getStaffMemberData);

  useEffect(() => {
    dispatch(fetchStaffMemberDataAction({
      staffMemberId: staffMemberId as string,
    }));
  }, [dispatch, staffMemberId]);

  return staffMemberData;
}
