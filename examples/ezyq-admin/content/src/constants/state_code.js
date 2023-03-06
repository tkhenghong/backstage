import { getObjectKey } from '../helpers'

export const STATE_CODE = {
  JOHOR: 'JHR',
  KEDAH: 'KDH',
  KELANTAN: 'KTN',
  MELAKA: 'MLK',
  NEGERI_SEMBILAN: 'NSN',
  PAHANG: 'PG',
  PENANG: 'PNG',
  PERAK: 'PRK',
  PERLIS: 'PLS',
  SABAH: 'SBH',
  SARAWAK: 'SWK',
  SELANGOR: 'SGR',
  TERENGGANU: 'TRG',
  KUALA_LUMPUR: 'KUL',
  LABUAN: 'LBN',
  PUTRAJAYA: 'PJY',
}

export const ALL = [
  STATE_CODE.JOHOR,
  STATE_CODE.KEDAH,
  STATE_CODE.NEGERI_SEMBILAN,
  STATE_CODE.PENANG,
  STATE_CODE.PERLIS,
  STATE_CODE.KELANTAN,
  STATE_CODE.PERAK,
  STATE_CODE.SELANGOR,
  STATE_CODE.MELAKA,
  STATE_CODE.PAHANG,
  STATE_CODE.SABAH,
  STATE_CODE.SARAWAK,
  STATE_CODE.KUALA_LUMPUR,
  STATE_CODE.PUTRAJAYA,
  STATE_CODE.LABUAN,
]

/**
 * State code to state name mapper.
 */
export const STATE_NAMES = {
  JHR: 'Johor',
  KDH: 'Kedah',
  KTN: 'Kelantan',
  MLK: 'Melaka',
  NSN: 'Negeri Sembilan',
  PG: 'Pahang',
  PNG: 'Penang',
  PRK: 'Perak',
  PLS: 'Perlis',
  SBH: 'Sabah',
  SWK: 'Sarawak',
  SGR: 'Selangor',
  TRG: 'Terengganu',
  KUL: 'Kuala Lumpur',
  PJY: 'Putrajaya',
  LBN: 'Labuan'
}

/**
 * Converts State or federal territories codes to name list.
 * @param state_codes
 * @returns {string}: A list.
 */
export const state_codes_to_name = (state_codes) => {
  let states = ''
  for (let i = 0; i < state_codes.length; i++) {
    let object_key_value = getObjectKey(STATE_CODE, state_codes[i])

    states += `${object_key_value ? object_key_value : state_codes[i]}${
      i === state_codes.length - 1 ? '' : ','
    } `
  }

  return states
}
