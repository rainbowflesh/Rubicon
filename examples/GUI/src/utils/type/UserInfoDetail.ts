export interface NetEaseUserInfo {
  account: Account;
  code: number;
  profile: Profile;
}

export interface Account {
  anonimousUser: boolean;
  ban: number;
  baoyueVersion: number;
  createTime: number;
  donateVersion: number;
  id: number;
  paidFee: boolean;
  status: number;
  tokenVersion: number;
  type: number;
  userName: string;
  vipType: number;
  whitelistAuthority: number;
}

export interface Profile {
  accountStatus: number;
  accountType: number;
  anchor: boolean;
  authStatus: number;
  authenticated: boolean;
  authenticationTypes: number;
  authority: number;
  avatarDetail: any;
  avatarImgId: number;
  avatarUrl: string;
  backgroundImgId: number;
  backgroundUrl: string;
  birthday: number;
  city: number;
  createTime: number;
  defaultAvatar: boolean;
  description: any;
  detailDescription: any;
  djStatus: number;
  expertTags: any;
  experts: any;
  followed: boolean;
  gender: number;
  lastLoginIP: string;
  lastLoginTime: number;
  locationStatus: number;
  mutual: boolean;
  nickname: string;
  province: number;
  remarkName: any;
  shortUserName: string;
  signature: any;
  userId: number;
  userName: string;
  userType: number;
  vipType: number;
  viptypeVersion: number;
}
