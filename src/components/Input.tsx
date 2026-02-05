type InputProps = {
  placeholder: string;
  iconSrc?: string;
  iconAlt?: string;
};

export const Input = ({ placeholder, iconSrc, iconAlt }: InputProps) => {
  return (
    <div className='flex rounded-md bg-quaternary-background has-[input:hover]:outline-2 has-[input:hover]:-outline-offset-2  has-[input:hover]:outline-accent has-[input:focus]:outline-2 has-[input:focus]:-outline-offset-2 has-[input:focus]:outline-accent'>
      {iconSrc && iconAlt ? (
        <img
          src={iconSrc}
          alt={iconAlt}
          className='select-none p-3 object-contain '
        />
      ) : (
        ''
      )}
      <input
        type='number'
        placeholder={placeholder}
        className='remove-arrow p-3 text-right hover:cursor-pointer focus:outline-none'
      />
    </div>
  );
};
