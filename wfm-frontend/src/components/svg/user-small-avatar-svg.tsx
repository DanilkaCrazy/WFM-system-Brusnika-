export type UserSmallAvatarSVGProps = {
  fill?: string;
  stroke?: string;
};

export default function UserSmallAvatarSVG({ fill = '#B0B0B0', stroke = 'white' }: UserSmallAvatarSVGProps): JSX.Element {
  return (
    <svg width="118" height="118" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="118" height="118" rx="40" fill={fill} />
      <path d="M58.9984 66.375C41.9975 66.375 27.6837 77.88 23.4183 93.5293C21.9901 98.7689 26.5261 103.25 31.9569 103.25H86.04C91.471 103.25 96.0071 98.7689 94.5788 93.5293C90.3136 77.88 75.9997 66.375 58.9984 66.375Z" stroke={stroke} strokeWidth="1.25" strokeLinecap="round" />
      <path d="M76.207 34.4173C76.207 43.9212 68.5026 51.6256 58.9987 51.6256C49.4947 51.6256 41.7905 43.9212 41.7905 34.4173C41.7905 24.9134 49.4947 17.209 58.9987 17.209C68.5026 17.209 76.207 24.9134 76.207 34.4173Z" stroke={stroke} strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}
