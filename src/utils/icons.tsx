import React from 'react';
import Icon, { IconConfig, IconName, IconDescription, IconType } from '../components/Icon';

export const generateIcon = (config: IconConfig): JSX.Element => {
  if (!config) { return null }
  if (typeof config === 'string') {
    return <Icon name={config as IconName} className="icon" />;
  } else if (React.isValidElement(config)) {
    return <>{React.Children.map(config, (child) => child)}</>;
  } else {
    const { name, type = 'regular' } = config as IconDescription;
    if (name && type) {
      return <Icon name={name as IconName} type={type as IconType} className="icon" />;
    }
  }
  return null;
};
