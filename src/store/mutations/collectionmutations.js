import * as types from '../constants/types'
import SaveStorage from '../../assets/js/savestorage'

export const collectionmutations = {
  [types.UPDATE_COLLECTION_DATA] (state) {
    state.collectionData = SaveStorage.load()
  }
}
