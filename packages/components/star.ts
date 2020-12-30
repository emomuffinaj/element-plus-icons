import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Star = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M512 747.84l228.16 119.936a6.4 6.4 0 009.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 00-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 00-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 00-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 009.28 6.72L512 747.84zM313.6 924.48a70.4 70.4 0 01-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 01128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 01126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0139.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 01-102.144 74.24L512 820.096l-198.4 104.32z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Star.displayName = 'ElIconStar'

export default Star
