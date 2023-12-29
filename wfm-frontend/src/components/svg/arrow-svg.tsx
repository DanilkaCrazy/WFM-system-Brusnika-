type ArrowSVGProps = {
  stroke?: string;
};

export default function ArrowSVG({ stroke = 'black' }: ArrowSVGProps): JSX.Element {
  return (
    <svg width="90" height="61" viewBox="0 0 90 61" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 30.5L82 30.5M82 30.5L56.3333 56M82 30.5L56.3333 5" stroke={stroke} strokeWidth="10" strokeLinecap="round" />
    </svg>
  );
}
