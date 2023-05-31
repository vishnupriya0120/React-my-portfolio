import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import localforage from 'localforage';
import PropTypes from 'prop-types';

import actions from 'actions';
import { hasPermission, isEmpty } from 'helper';
import IconLoader from 'images/iconloader';
import Styles from './button.module.scss';

function Button({
  btnSize,
  btnColor,
  btnType,
  children,
  btnStyle,
  btnBorder,
  btnWidth,
  btnIconPos,
  link,
  disabled,
  loading,
  permissionUrl,
  permissions,
  ...other
}) {
  const [permission, setpermission] = useState(permissions);
  const classes = [
    Styles.button,
    Styles[btnSize],
    Styles[btnType],
    Styles[btnColor],
    Styles[btnStyle],
    Styles[btnBorder],
    Styles[btnWidth],
    Styles[btnIconPos],
    disabled && Styles.disable,
  ].join(' ');
  useEffect(async () => {
    const permit = await localforage.getItem('permissions');
    setpermission(permit);
  });
  if (link) {
    return (
      <>
        {isEmpty(permissionUrl) ||
        isEmpty(permission) ||
        hasPermission(permissionUrl, permission) ||
        (hasPermission(permissionUrl, permission) === false &&
          permissionUrl.type === 'disabled') ? (
          <Link
            to={link}
            className={[
              classes,
              hasPermission(permissionUrl, permission) === false &&
                permissionUrl.type === 'disabled' &&
                Styles.disable,
            ].join(' ')}
            {...other}
          >
            {loading && (
              <i className={Styles.loading}>
                <IconLoader />
              </i>
            )}
            {children}
          </Link>
        ) : null}
      </>
    );
  }
  return (
    <>
      {isEmpty(permissionUrl) ||
      isEmpty(permission) ||
      hasPermission(permissionUrl, permission) ||
      (hasPermission(permissionUrl, permission) === false && permissionUrl.type === 'disabled') ? (
        <button
          type="button"
          className={[
            classes,
            hasPermission(permissionUrl, permission) === false &&
              permissionUrl.type === 'disabled' &&
              Styles.disable,
          ].join(' ')}
          {...other}
        >
          {loading && (
            <i className={Styles.loading}>
              <IconLoader />
            </i>
          )}
          {children}
        </button>
      ) : null}
    </>
  );
}

Button.propTypes = {
  btnSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'titleRight', 'nopadding']),
  btnColor: PropTypes.oneOf([
    'primary',
    'secondary',
    'danger',
    'success',
    'warning',
    'dark',
    'light',
    'info',
    'lightblue',
    'transparent',
  ]),
  btnType: PropTypes.oneOf(['icon', 'text', 'textWithIcon', 'spinner', 'link']),
  btnStyle: PropTypes.oneOf(['solid', 'outline', 'transparent']),
  btnBorder: PropTypes.oneOf(['square', 'round']),
  btnWidth: PropTypes.oneOf(['auto', 'full']),
  btnIconPos: PropTypes.oneOf(['left', 'right']),
  disabled: PropTypes.bool,
  permissionUrl: PropTypes.shape,
  children: PropTypes.element,
  link: PropTypes.string,
  permissions: PropTypes.shape,
  loading: PropTypes.element,
};

Button.defaultProps = {
  btnSize: 'md',
  btnColor: 'primary',
  btnStyle: 'solid',
  btnType: 'textWithIcon',
  btnBorder: 'round',
  btnWidth: 'auto',
  btnIconPos: 'left',
  disabled: false,
  loading: false,
  children: null,
  permissionUrl: {},
  link: '',
  permissions: {},
};

const mapStateToProps = (state) => ({
  permissions: state.roleConfig.data,
});

export default connect(mapStateToProps, actions)(Button);
