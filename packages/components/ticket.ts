import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M640 832H64V640a128 128 0 100-256V192h576v160h64V192h256v192a128 128 0 100 256v192H704V672h-64v160zm0-416v192h64V416h-64z'

const Ticket = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Ticket.displayName = 'Ticket';

export default Ticket;

