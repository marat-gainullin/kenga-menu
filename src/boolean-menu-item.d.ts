import ButtonGroup from 'kenga-containers/button-group'
import Utils from 'kenga/utils'
import ActionEvent from 'kenga/events/action-event'
import ValueChangeEvent from 'kenga/events/value-change-event'
import MenuElement from './menu-element'

export default class BooleanMenuItem extends MenuElement {
  constructor(radio: HTMLInputElement, text?: string, selected?: boolean, onAction?: (evt: ActionEvent) => void)

  onAction: (evt: ActionEvent) => void
  selected: boolean
  value: boolean
  text: string
  iconTextGap: number | string
  horizontalTextPosition: Utils.HorizontalPosition

  buttonGroup: ButtonGroup

  addValueChangeHandler(handler: (evt: ValueChangeEvent) => void): { removeHandler: () => void }
}
