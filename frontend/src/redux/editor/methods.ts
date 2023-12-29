/*
 * SPDX-FileCopyrightText: 2023 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
import { store } from '..'
import type {
  LoadFromLocalStorageAction,
  SetEditorLigaturesAction,
  SetEditorLineWrappingAction,
  SetEditorSmartPasteAction,
  SetEditorSyncScrollAction,
  SetEditorSpellCheckAction,
  SetEditorIndentWithTabsAction,
  SetEditorIndentSpacesAction,
  SetEditorAuthorshipHighlightModeAction,
  AuthorshipHighlightMode
} from './types'
import { EditorConfigActionType } from './types'

export const setEditorSyncScroll = (syncScroll: boolean): void => {
  const action: SetEditorSyncScrollAction = {
    type: EditorConfigActionType.SET_SYNC_SCROLL,
    syncScroll
  }
  store.dispatch(action)
}

export const setEditorLineWrapping = (lineWrapping: boolean): void => {
  const action: SetEditorLineWrappingAction = {
    type: EditorConfigActionType.SET_LINE_WRAPPING,
    lineWrapping
  }
  store.dispatch(action)
}

export const setEditorLigatures = (ligatures: boolean): void => {
  const action: SetEditorLigaturesAction = {
    type: EditorConfigActionType.SET_LIGATURES,
    ligatures
  }
  store.dispatch(action)
}

export const setEditorSmartPaste = (smartPaste: boolean): void => {
  const action: SetEditorSmartPasteAction = {
    type: EditorConfigActionType.SET_SMART_PASTE,
    smartPaste
  }
  store.dispatch(action)
}

export const setEditorSpellCheck = (spellCheck: boolean): void => {
  const action: SetEditorSpellCheckAction = {
    type: EditorConfigActionType.SET_SPELL_CHECK,
    spellCheck
  }
  store.dispatch(action)
}

export const setEditorIndentWithTabs = (indentWithTabs: boolean): void => {
  const action: SetEditorIndentWithTabsAction = {
    type: EditorConfigActionType.SET_INDENT_WITH_TABS,
    indentWithTabs
  }
  store.dispatch(action)
}

export const setEditorIndentSpaces = (indentSpaces: number): void => {
  const action: SetEditorIndentSpacesAction = {
    type: EditorConfigActionType.SET_INDENT_SPACES,
    indentSpaces
  }
  store.dispatch(action)
}

export const setEditorAuthorshipHighlightMode = (authorshipHighlightMode: AuthorshipHighlightMode): void => {
  const action: SetEditorAuthorshipHighlightModeAction = {
    type: EditorConfigActionType.SET_AUTHORSHIP_HIGHLIGHT_MODE,
    authorshipHighlightMode
  }
  store.dispatch(action)
}

export const loadFromLocalStorage = (): void => {
  const action: LoadFromLocalStorageAction = {
    type: EditorConfigActionType.LOAD_FROM_LOCAL_STORAGE
  }
  store.dispatch(action)
}
