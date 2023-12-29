export type UserAvatarSVGProps = {
  fill?: string;
  stroke?: string;
};

export default function UserAvatarSVG({ fill = '#5B5E5F', stroke = 'white' }: UserAvatarSVGProps): JSX.Element {
  return (
    <svg width="270" height="270" viewBox="0 0 270 270" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="270" height="270" rx="40" fill={fill} />
      <path
        d="M134.997 151.875C96.0964 151.875 63.3444 178.2 53.5845 214.008C50.3168 225.997 60.6957 236.25 73.1221 236.25H196.872C209.298 236.25 219.678 225.997 216.41 214.008C206.65 178.2 173.898 151.875 134.997 151.875Z"
        stroke={stroke} strokeWidth="0.5" strokeLinecap="round"
      />
      <path
        d="M174.372 78.75C174.372 100.496 156.743 118.125 134.997 118.125C113.25 118.125 95.6221 100.496 95.6221 78.75C95.6221 57.0038 113.25 39.375 134.997 39.375C156.743 39.375 174.372 57.0038 174.372 78.75Z"
        stroke={stroke} strokeWidth="0.5" strokeLinecap="round"
      />
    </svg>
  );
}
