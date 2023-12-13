import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const MediumIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
    <path
      d="M64,0C28.7,0,0,28.7,0,64s28.7,64,64,64s64-28.7,64-64S99.3,0,64,0z M99.6,37l-5.7,5.4c-0.5,0.4-0.7,1-0.6,1.6
	v40c-0.1,0.6,0.1,1.2,0.6,1.6l5.5,5.4v1.2H71.5V91l5.7-5.6c0.6-0.6,0.6-0.7,0.6-1.6V51.5l-16,40.6h-2.2L41.1,51.5v27.2
	c-0.2,1.1,0.2,2.3,1,3.1l7.5,9.1v1.2H28.4v-1.2l7.5-9.1c0.8-0.8,1.2-2,1-3.1V47.3c0.1-0.9-0.2-1.7-0.9-2.3l-6.6-8v-1.2H50l15.9,34.9
	l14-34.9h19.7V37z"
    />
  </Icon>
));

export default MediumIcon;
