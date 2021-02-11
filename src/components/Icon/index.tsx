import React, { useMemo, useRef } from 'react';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import * as regularIcons from '@fortawesome/free-regular-svg-icons';
import * as brandsIcons from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type SolidIconName = Exclude<keyof typeof solidIcons, 'fa' | 'fas'>;
export type BrandsIconName = Exclude<keyof typeof brandsIcons, 'fa' | 'fab'>;
export type RegularIconName = Exclude<keyof typeof regularIcons, 'fa' | 'far'>;
export type IconType = 'solid' | 'brands' | 'regular';
export type IconName = SolidIconName | BrandsIconName | RegularIconName;

export interface IconComponentProps {
  type?: IconType;
  name: IconName;
  className?: string;
}

const iconsMap = {
  solid: solidIcons,
  regular: regularIcons,
  brands: brandsIcons,
};

const Icon: React.FC<IconComponentProps> = ({
  type = 'regular',
  name,
  className = '',
}) => {
  const iconComponent = useMemo(() => {
    return iconsMap[type][name];
  }, [type, name]);
  const ref = useRef(null);

  return (
    iconComponent ? <FontAwesomeIcon className={className} icon={iconsMap[type][name]} /> : null
  );
};

export default Icon;
