import classNames from 'classnames';

const Button = ({ label, primaryBtn, signUp, normalBtn }) => {
  const buttonClasses = classNames(
    'py-[10px]',
    'px-[15px]',
    'cursor-pointer',
    'max-sm:text-[10px]',
    'text-[14px]',
    'hover:bg-text-color',
    'hover:text-black-color',
    {
      'bg-secondary-color': !primaryBtn,
      'font-bold, py-[0.25rem]': primaryBtn && signUp,
      'bg-primary-color font-bold text-white-color hover:bg-secondary-color hover:text-black-color rounded-[5px]': primaryBtn,
      'mt-2': !signUp,
      'rounded-[5px]': normalBtn
    }
  );

  return <button className={buttonClasses}>{label}</button>;
};

export default Button;
