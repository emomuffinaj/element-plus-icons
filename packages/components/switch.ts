import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M118.656 438.656a32 32 0 010-45.248L416 96l4.48-3.776A32 32 0 01461.248 96l3.712 4.48a32.064 32.064 0 01-3.712 40.832L218.56 384H928a32 32 0 110 64H141.248a32 32 0 01-22.592-9.344zM64 608a32 32 0 0132-32h786.752a32 32 0 0122.656 54.592L608 928l-4.48 3.776a32.064 32.064 0 01-40.832-49.024L805.632 640H96a32 32 0 01-32-32z'

const Switch = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Switch.displayName = 'Switch';

export default Switch;

