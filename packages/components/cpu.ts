import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Cpu = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M320 256a64 64 0 00-64 64v384a64 64 0 0064 64h384a64 64 0 0064-64V320a64 64 0 00-64-64H320zm0-64h384a128 128 0 01128 128v384a128 128 0 01-128 128H320a128 128 0 01-128-128V320a128 128 0 01128-128z',
        },
        null,
      ),

      h(
        'path',
        {
          d:
            'M512 64a32 32 0 0132 32v128h-64V96a32 32 0 0132-32zm160 0a32 32 0 0132 32v128h-64V96a32 32 0 0132-32zm-320 0a32 32 0 0132 32v128h-64V96a32 32 0 0132-32zm160 896a32 32 0 01-32-32V800h64v128a32 32 0 01-32 32zm160 0a32 32 0 01-32-32V800h64v128a32 32 0 01-32 32zm-320 0a32 32 0 01-32-32V800h64v128a32 32 0 01-32 32zM64 512a32 32 0 0132-32h128v64H96a32 32 0 01-32-32zm0-160a32 32 0 0132-32h128v64H96a32 32 0 01-32-32zm0 320a32 32 0 0132-32h128v64H96a32 32 0 01-32-32zm896-160a32 32 0 01-32 32H800v-64h128a32 32 0 0132 32zm0-160a32 32 0 01-32 32H800v-64h128a32 32 0 0132 32zm0 320a32 32 0 01-32 32H800v-64h128a32 32 0 0132 32z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Cpu.displayName = 'ElIconCpu'

export default Cpu
