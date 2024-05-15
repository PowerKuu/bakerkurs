import { no } from './lang/no'
import { en } from './lang/en'
import { sv } from './lang/sv'
import { dk } from './lang/dk'

export type Config = typeof no

export const configs: Record<string, Config> = { no, en, sv, dk }
