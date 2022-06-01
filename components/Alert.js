import React from 'react';
import {useSelector} from 'react-redux';
import Text from './Text';

const Alert = ({position}) => {
  const alert = useSelector(state => state.form.alert);
  return (
    <>
      <div
        className={`${position} fixed z-50 -translate-x-1/2 left-1/2 top-14 ${
          !alert && 'invisible opacity-0'
        } w-max cursor-pointer rounded-lg p-3 mt-4 ${
          !alert?.error ? 'bg-green-400' : 'bg-red-400'
        } opacity-1 transition-opacity duration-300 ease-in-out`}
      >
        <Text
          level={6}
          weight="bold"
          className="mx-2 text-white font-regular"
          family="montserrat"
        >
          <span
            className={`far fa-lg mr-3 ${
              !alert?.error ? 'fa-check' : 'fa-times'
            }`}
          />
          {alert?.message}
        </Text>
      </div>
    </>
  );
};

export default Alert;
