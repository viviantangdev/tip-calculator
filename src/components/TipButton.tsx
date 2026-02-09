type TipButtonProps = {
  value: number;
  onClick: () => void;
  styling: string;
};
export const Button = ({ value, onClick , styling}: TipButtonProps) => {
  return (
    <button type='button' onClick={onClick} className={`tip-button ${styling}`}>
      {value}%
    </button>
  );
};
