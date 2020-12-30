import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Sunrise = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M32 768h960a32 32 0 110 64H32a32 32 0 110-64zM161.408 672a352 352 0 01701.184 0h-64.32a288 288 0 00-572.544 0h-64.32zM512 128a32 32 0 0132 32v96a32 32 0 01-64 0v-96a32 32 0 0132-32zm407.296 168.704a32 32 0 010 45.248l-67.84 67.84a32 32 0 11-45.248-45.248l67.84-67.84a32 32 0 0145.248 0zm-814.592 0a32 32 0 0145.248 0l67.84 67.84a32 32 0 11-45.248 45.248l-67.84-67.84a32 32 0 010-45.248z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Sunrise.displayName = 'ElIconSunrise'

export default Sunrise
