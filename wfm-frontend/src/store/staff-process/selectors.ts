import { NameSpace } from '../../consts';
import { State } from '../../types/state';
import { UserData } from '../../types/user-data';

export const getStaffData = (state: State): UserData[] | undefined => state[NameSpace.Staff].staff;
export const getStaffMemberData = (state: State): UserData | undefined => state[NameSpace.Staff].staffMember;
