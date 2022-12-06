import Container from 'kenga/container'

export default class Menu extends Container {
  showRelativeTo(anElement: HTMLElement, horizontal: boolean, ltr?: boolean, ttb?: boolean): void
  popupRelativeTo(anElement: HTMLElement, horizontal: boolean, ltr?: boolean, ttb?: boolean): void
  showAt(left: number, top: number): void
  popupAt(left: number, top: number): void
  close(): void
}
