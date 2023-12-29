export type AddAvatarSVGProps = {
  fill?: string;
  stroke?: string;
};

export default function AddAvatarSVG({ fill = '#5B5E5F99', stroke = 'white' }: AddAvatarSVGProps): JSX.Element {
  return (
    <svg className="add-avatar-svg" width="270" height="270" viewBox="0 0 270 270" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="270" height="270" rx="40" fill={fill} />
      <path d="M90 131H180M135 86V176" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
