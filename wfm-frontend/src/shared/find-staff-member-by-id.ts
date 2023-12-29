import { UserData } from '../types/user-data';

export default function findStaffMemeberById(staffData: UserData[] | undefined,
  id: string | undefined): UserData | undefined {
  if (!staffData || !id) {
    return undefined;
  }
  return staffData.find((staffMemberData) => staffMemberData.id === id);
}
