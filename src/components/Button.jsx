import classNames from 'classnames';

const Button = ({ label, primaryBtn, signUp, normalBtn }) => {
  const buttonClasses = classNames(
    'py-[10px]',
    'px-[15px]',
    'cursor-pointer',
    'max-sm:text-[12px]',
    'text-[14px]',
    'hover:bg-text-color',
    'hover:text-black-color',
    {
      'bg-secondary-color': !primaryBtn,
      'py-[3px] px-[10px] rounded-[3px]': primaryBtn && signUp,
      'bg-primary-color text-white-color hover:bg-secondary-color hover:text-black-color rounded-[5px]': primaryBtn,
      'mt-2': !signUp,
      'rounded-[5px]': normalBtn,
      'font-bold': primaryBtn && !signUp
    }
  );

  return <button className={buttonClasses}>{label}</button>;
};

export default Button;
