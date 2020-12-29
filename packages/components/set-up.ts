import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const SetUp = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M224 160a64 64 0 00-64 64v576a64 64 0 0064 64h576a64 64 0 0064-64V224a64 64 0 00-64-64H224zm0-64h576a128 128 0 01128 128v576a128 128 0 01-128 128H224A128 128 0 0196 800V224A128 128 0 01224 96z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M384 416a64 64 0 100-128 64 64 0 000 128zm0 64a128 128 0 110-256 128 128 0 010 256z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M480 320h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32zM640 736a64 64 0 100-128 64 64 0 000 128zm0 64a128 128 0 110-256 128 128 0 010 256z',
        },
        null,
      ),

      h(
        'path',
        { d: 'M288 640h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32z' },
        null,
      ),
    ],
  })
} as FunctionalComponent

SetUp.displayName = 'SetUp'

export default SetUp
