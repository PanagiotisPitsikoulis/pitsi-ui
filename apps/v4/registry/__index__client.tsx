// @ts-nocheck
import { IndexBlocksApplication } from "./__index__blocks-application"
import { IndexBlocksECommerce } from "./__index__blocks-e-commerce"
import { IndexBlocksFullPages } from "./__index__blocks-full-pages"
import { IndexBlocksMarketing } from "./__index__blocks-marketing"
import { IndexExample } from "./__index__example"
import { IndexHook } from "./__index__hook"
import { IndexLib } from "./__index__lib"
import { IndexStyle } from "./__index__style"
import { IndexTheme } from "./__index__theme"
import { IndexUi } from "./__index__ui"

export const Index: Record<string, Record<string, any>> = {}

function mergeIndex(sourceIndex: Record<string, Record<string, any>>) {
  for (const style in sourceIndex) {
    if (!Index[style]) {
      Index[style] = {}
    }
    Object.assign(Index[style], sourceIndex[style])
  }
}

mergeIndex(IndexUi)
mergeIndex(IndexExample)
mergeIndex(IndexHook)
mergeIndex(IndexLib)
mergeIndex(IndexStyle)
mergeIndex(IndexTheme)

mergeIndex(IndexBlocksApplication)
mergeIndex(IndexBlocksECommerce)
mergeIndex(IndexBlocksFullPages)
mergeIndex(IndexBlocksMarketing)
