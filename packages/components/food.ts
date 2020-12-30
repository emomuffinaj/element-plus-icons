import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'

const Food = function (props: any) {
  return h(Icon, props, {
    default: () => [
      h(
        'path',
        {
          d:
            'M128 352.576V352a288 288 0 01491.072-204.224 192 192 0 01274.24 204.48 64 64 0 0157.216 74.24C921.6 600.512 850.048 710.656 736 756.992V800a96 96 0 01-96 96H384a96 96 0 01-96-96v-43.008c-114.048-46.336-185.6-156.48-214.528-330.496A64 64 0 01128 352.64zm64-.576h64a160 160 0 01320 0h64a224 224 0 00-448 0zm128 0h192a96 96 0 00-192 0zm439.424 0h68.544A128.256 128.256 0 00704 192c-15.36 0-29.952 2.688-43.52 7.616 11.328 18.176 20.672 37.76 27.84 58.304A64.128 64.128 0 01759.424 352zM672 768H352v32a32 32 0 0032 32h256a32 32 0 0032-32v-32zm-342.528-64h365.056c101.504-32.64 165.76-124.928 192.896-288H136.576c27.136 163.072 91.392 255.36 192.896 288z',
        },
        null,
      ),
    ],
  })
} as FunctionalComponent

Food.displayName = 'ElIconFood'

export default Food
