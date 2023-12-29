export type CalculatorSVGProps = {
  stroke?: string;
};

export default function CalculatorSVG({ stroke = 'white' }: CalculatorSVGProps): JSX.Element {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 16V11M16 16V21M16 16H11M16 16H21M37 16H27M37 30H27M37 34H27M16 32.071L19.5355 28.5356M16 32.071L12.4645 35.6066M16 32.071L12.4645 28.5356M16 32.071L19.5355 35.6066M10 6H38C40.2092 6 42 7.79086 42 10V38C42 40.2092 40.2092 42 38 42H10C7.79086 42 6 40.2092 6 38V10C6 7.79086 7.79086 6 10 6Z" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
