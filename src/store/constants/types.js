/* ********** titleAndIcon ***********/

const NEW_EST = 'newest'
const CLASSIFY = 'classify'
const SEARCH = 'search'
const BOOKS = 'books'
export {NEW_EST, CLASSIFY, SEARCH, BOOKS}
export const TITLE_MAP = new Map([[NEW_EST, '最新'], [CLASSIFY, '分类'], [SEARCH, '搜索干货'], [BOOKS, '收藏']])
export const LEFT_ICON_MAP = new Map([[NEW_EST, 'radio_button_checked'], [SEARCH, ''], [CLASSIFY, 'send'], [BOOKS, 'settings']])
export const CHANGE_TILTE_AND_ICON = 'CHANGE_TITLE_AND_ICON'

/* *** 更新historyDates ****/
export const UPDATE_HISTORY_DATES = 'UPDATE_HISTORY_DATES'
export const UPDATE_SELECT_DATE = 'UPDATE_SELECT_DATE'

/* *** 更新分类 ****/
export const UPDATE_CLASSIFYS = 'UPDATE_CLASSIFYS'

/* *** 更新干货 ****/
export const UPDATE_SELECT_DATE_GANHUO = 'UPDATE_SELECT_DATE_GANHUO'
export const UPDATE_SELECT_CLASSIFY_GANHUO = 'UPDATE_SELECT_CLASSIFY_GANHUO'

/* *** 更新是否刷新logo ****/
export const UPDATE_IS_SHOW_REFRESH = 'UPDATE_IS_SHOW_REFRESH'

/* **** 更新选中的分类 ***/
export const UPDATE_SELECT_CLASSIFY = 'UPDATE_SELECT_CLASSIFY'
export const UPDATE_SELECT_CLASSIFY_DATA = 'UPDATE_SELECT_CLASSIFY_DATA'
export const UPDATE_SELECT_CLASSIFY__LOAD = 'UPDATE_SELECT_CLASSIFY__LOAD'

/* ***** 更新是否显示load控件 ****/
export const UPDATE_IS_SHOW_LOAD = 'UPDATE_IS_SHOW_LOAD'

/* **** SEARCH ****/
export const UPDATE_SEARCH_RESULTS_REFRESH = 'UPDATE_SEARCH_RESULTS_REFRESH'
export const UPDATE_SEARCH_RESULTS_LOAD = 'UPDATE_SEARCH_RESULTS_LOAD'

/* *** colllection ****/
export const UPDATE_COLLECTION_DATA = 'UPDATE_COLLECTION_DATA'
