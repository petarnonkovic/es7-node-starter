import isEmpty from 'lodash/isEmpty'

/**
 * If inline helper (like EmberJS)
 * @param  {Any} toTest    value to test
 * @param  {Any} toResolve value to resolve on true
 * @param  {Any} toReject  value to reject on false
 * @return {Any} toResolve || toReject value
 */
export function inlineIf(toTest, toResolve, toReject) {
    if (!isEmpty(toTest)) {
        return toResolve
    }
    return toReject
}

/**
 * Section helper (like EmberJS)
 * @param  {String} name Section name
 * @param  {Any} options Any valid html markup
 * @return void || null
 */
export function hbsSection(name, options) {
    if (!this._section) {
        this._section = {}
    }
    this._section[name] = options.fn(this)
    return null
}
