type ButtonProps = {
  value: number;
};
export const Button = ({ value }: ButtonProps) => {
  return <button type='button'>{value}%</button>;
};
