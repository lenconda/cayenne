import React from 'react';
import Icon from '../../../src/components/Icon';
import './sizes.scss';

export default () => (
  <div className="demo_sizes">
    <Icon name="faAddressCard" />
    <Icon name="faAddressCard" fontSize={20} />
    <Icon name="faAddressCard" fontSize={40} />
    <Icon name="faAddressCard" fontSize={60} />
    <Icon name="faAddressCard" fontSize={80} />
  </div>
);
