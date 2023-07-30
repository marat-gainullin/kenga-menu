import Container from 'kenga/container'

export default class Menu extends Container {
  showRelativeTo(anElement: HTMLElement, horizontal: boolean, leftToRight?: boolean, topToBottom?: boolean): void
  popupRelativeTo(anElement: HTMLElement, horizontal: boolean, leftToRight?: boolean, topToBottom?: boolean): void
  showAt(left: number, top: number): void
  popupAt(left: number, top: number): void
  shown: boolean
  close(): void
}
