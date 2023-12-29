export type UserSVGProps = {
  stroke?: string;
};

export default function UserSVG({ stroke = 'white' }: UserSVGProps): JSX.Element {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.9994 27C17.0838 27 11.2612 31.68 9.52614 38.0458C8.9452 40.1772 10.7903 42 12.9995 42H34.9994C37.2086 42 39.0538 40.1772 38.4728 38.0458C36.7378 31.68 30.9152 27 23.9994 27Z" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      <path d="M30.9994 14C30.9994 17.866 27.8654 21 23.9994 21C20.1334 21 16.9995 17.866 16.9995 14C16.9995 10.134 20.1334 7 23.9994 7C27.8654 7 30.9994 10.134 30.9994 14Z" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
