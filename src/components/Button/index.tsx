import React, { useMemo } from 'react';
import { generateIcon } from '../../utils/icons';
import Icon, { IconConfig } from '../Icon';

export type ButtonType
  = 'default' | 'primary' | 'secondary' | 'info' | 'warning' | 'success' | 'light' | 'dark';
export type ButtonSize = 'small' | 'large' | 'medium';

export interface ButtonComponentProps
  extends React.DetailedHTMLProps<
    React.BaseHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color?: ButtonType;
  disabled?: boolean;
  icon?: IconConfig;
  loading?: boolean;
  loadingIcon?: IconConfig;
  outlined?: boolean;
  size?: ButtonSize;
  htmlType?: 'submit' | 'reset' | 'button';
}

const Button: React.FC<ButtonComponentProps> = ({
  icon,
  loading = false,
  loadingIcon = <Icon name="faSpinner" spin={true} />,
  children,
  color = 'default',
  disabled = false,
  outlined = false,
  size = 'medium',
  className = '',
  htmlType = 'button',
  ...props
}) => {
  const classNames = useMemo(() => {
    const baseClassNames = new Set(['btn']);
    baseClassNames.add(outlined ? `btn-outline-${color}` : `btn-${color}`);
    if (loading || disabled) {
      baseClassNames.add('disabled');
    }
    if (className) {
      for (const currentClassName of className.trim().split(/\s+/)) {
        baseClassNames.add(currentClassName);
      }
    }
    return Array.from(baseClassNames).join(' ');
  }, [loading, disabled, outlined, color]);

  return (
    <button
      type={htmlType}
      className={classNames}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? generateIcon(loadingIcon) : generateIcon(icon)}
      {children}
    </button>
  );
};

export default Button;
