type TipButtonProps = {
  value: number;
};
export const Button = ({ value }: TipButtonProps) => {
  return <button type='button' className="tip-button">{value}%</button>;
};
