import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'c',
  'd',
  'e',
  'f',
  'h',
  'i',
  'k',
  'l',
  'm',
  'n',
  'ng',
  'o',
  'p',
  'r',
  's',
  't',
  'w',
  'x',
  'y',
  "'",
  '^',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
