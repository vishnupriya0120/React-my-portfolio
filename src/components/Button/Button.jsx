import React from 'react'
import PropTypes from 'prop-types';
import Styles from './button.module.scss'

function Button({
  btnSize,
  label,
  btnColor,
  btnStyle,
 })
{
  const classes = [
    Styles.button,
    Styles[btnSize],
    Styles[btnColor],
    Styles[btnStyle],
  ].join(' ');
  return (
    <> 
    <button type='button'  className={[classes].join(' ')}>{label}</button>
    </>
  
  );
}

export default Button

Button.propTypes = {
  btnSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  btnColor: PropTypes.oneOf([
    'primary',
    'secondary',
    'danger',
    'success',
    'dark',
    'light',
  ]),
  btnStyle: PropTypes.oneOf(['solid','transparent','outline'])
};
Button.defaultProps = {
  btnSize: 'sm',
  btnColor: 'primary',
  btnStyle: 'solid'
};
