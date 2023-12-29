export type PlusSVGProps = {
  stroke?: string;
};

export default function PlusSVG({ stroke = 'black' }: PlusSVGProps): JSX.Element {
  return (
    <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.4502 21.4995H36.5502M21.5002 7.88281V35.1161" stroke={stroke} strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}
