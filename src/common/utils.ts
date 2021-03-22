export const clearUserData = (keys: string[]) => {
  keys.forEach((key: string) => {
    window.sessionStorage.setItem(key, '')
  })
}
