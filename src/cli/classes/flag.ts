export type FlagType = 'short' | 'long'
/**
 * class for flags that are passed to the command line
 */
export class Flag {
  private _short: boolean
  private _long: boolean
  private _content: string
  private _value: string
  private _title: string
  constructor (type: FlagType, content: string) {
    this._value = ''
    this._title = ''
    if (type === 'short') {
      this._short = true
      this._long = false
    } else {
      this._short = false
      this._long = true
    }
    this._content = content
  }

  /**
   * returns rather or not flag is a short flag
   */
  get short (): boolean {
    return this._short
  }

  /**
   * returns rather or not flag is a long flag
   */
  get long (): boolean {
    return this._long
  }

  /**
   * returns the content of the flag
   */
  get content (): string {
    return this._content
  }

  get value (): string {
    return this._value
  }

  set value (val: string) {
    this._value = val
  }

  get title (): string {
    return this._title
  }

  set title (title: string) {
    this._title = title
  }
}
