import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Trophy = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M480 896V702.08A256.256 256.256 0 01264.064 512h-32.64a96 96 0 01-91.968-68.416L93.632 290.88a76.8 76.8 0 0173.6-98.88H256V96a32 32 0 0132-32h448a32 32 0 0132 32v96h88.768a76.8 76.8 0 0173.6 98.88L884.48 443.52A96 96 0 01792.576 512h-32.64A256.256 256.256 0 01544 702.08V896h128a32 32 0 110 64H352a32 32 0 110-64h128zm224-448V128H320v320a192 192 0 10384 0zm64 0h24.576a32 32 0 0030.656-22.784l45.824-152.768A12.8 12.8 0 00856.768 256H768v192zm-512 0V256h-88.768a12.8 12.8 0 00-12.288 16.448l45.824 152.768A32 32 0 00231.424 448H256z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Trophy.displayName = 'ElIconTrophy'

export default Trophy
