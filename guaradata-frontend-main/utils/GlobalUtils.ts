import type { RouteLocationNormalizedLoaded } from 'vue-router'

class HiddenElementsByPath {
  static hiddenElements(router: RouteLocationNormalizedLoaded, paths: string[]): boolean {
    return paths ? !paths.includes(router.path) : false
  }
}
export const GlobalUtils = {
  HiddenElementsByPath
}
