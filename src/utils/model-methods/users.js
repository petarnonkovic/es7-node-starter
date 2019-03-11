/**
 * User Model Methods
 */
import bcrypt from 'bcrypt-nodejs'
import {
    saltValue
} from '../../config/variables'

/**
 * Hook Method Hash password before save
 * @param  {String} userPassword
 * @return {String} hashed password || Error
 */
export function passwordHash(password) {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(saltValue, (err, salt) => {
            if (err) return reject(err)
            // create hash
            bcrypt.hash(password, salt, null, (err, hash) => {
                if (err) return reject(err)
                return resolve(hash)
            })
        })
    })
}

/**
 * Instance Method Password validation
 * @param  {String} userPassword
 * @return {Boolean} result of password compare func || Error
 */
export function passwordValidate(userPassword) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(userPassword, this.password, (err, result) => {
            if (err) return reject(err)
            return resolve(result)
        })
    })
}
