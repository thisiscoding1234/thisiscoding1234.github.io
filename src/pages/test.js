import { gb, gbc } from '@yuvalkarif/gradient-blob'


const { gb } = gbc({ cacheChance: 50 })
const gradientBlob = gb(10, { clipPathProperty: true })