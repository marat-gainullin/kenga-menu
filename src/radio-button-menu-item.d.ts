import ActionEvent from 'kenga/events/action-event'
import BooleanMenuItem from './boolean-menu-item'

export default class RadioMenuItem extends BooleanMenuItem {
  constructor(text?: string, selected?: boolean, onAction?: (evt: ActionEvent) => void)
}
