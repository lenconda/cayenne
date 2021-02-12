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

export interface IconDescription {
  name: IconName;
  type?: IconType;
}

export type IconConfig = IconName | React.ReactNode | IconDescription;

export interface IconComponentProps {
  /**
   * The name of icon
   */
  name: IconName;
  /**
   * Class name for icon component
   * @default ''
   */
  className?: string;
  /**
   * Font size of icon
   */
  fontSize?: number;
  /**
   * Spin or not
   * @default false
   */
  spin?: boolean;
  /**
   * The type of icon
   * @default 'solid'
   */
  type?: IconType;
}

const iconsMap = {
  solid: solidIcons,
  regular: regularIcons,
  brands: brandsIcons,
};

const Icon: React.FC<IconComponentProps> = ({
  type = 'solid',
  name,
  className = '',
  fontSize,
  spin = false
}) => {
  const iconComponent = useMemo(() => {
    return iconsMap[type][name];
  }, [type, name]);
  const ref = useRef(null);
  const iconStyleSheet = useMemo<React.CSSProperties>(() => {
    const style: React.CSSProperties = {};
    if (fontSize) {
      style['fontSize'] = fontSize;
    }
    return style;
  }, [fontSize]);

  return (
    iconComponent
      ? <FontAwesomeIcon
          className={`cayenne-icon ${className}`}
          icon={iconsMap[type][name]}
          style={iconStyleSheet}
          spin={spin}
        />
      : null
  );
};

export default Icon;
