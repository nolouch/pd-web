import { PDVersionTypes } from 'types/version'
import makeActionCreator from 'lib/makeActionCreator'

const getPDVersion = makeActionCreator(PDVersionTypes.GET_PD_VERSION, 'version')

export { getPDVersion }
