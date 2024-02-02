import classNames from 'classnames';

//import icon
import {AiOutlineSearch} from 'react-icons/ai'

const Button = ({ label, primaryBtn, signUp, normalBtn, searchBtn}) => {
  const buttonClasses = classNames(
    'py-[10px]',
    'px-[15px]',
    'cursor-pointer',
    'text-[14px]',
    'hover:bg-text-color',
    'hover:text-black-color',
    {
      'flex justify-center w-full gap-1 self-center': searchBtn,
      'bg-secondary-color': !primaryBtn,
      'py-[3px] px-[10px] rounded-[3px]': primaryBtn && signUp,
      'bg-primary-color text-white-color hover:bg-secondary-color hover:text-black-color rounded-[5px]': primaryBtn,
      'mt-2': !signUp,
      'rounded-[5px]': normalBtn,
      'font-bold': primaryBtn && !signUp
    }
  );

  return <button className={buttonClasses}>
    {searchBtn && <AiOutlineSearch className='text-xl'/>}
    {label}
    </button>;
};

export default Button;
