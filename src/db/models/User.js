import {
    passwordHash,
    passwordValidate
} from '../../utils/model-methods/users'

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {

        username: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        scope: {
            type: DataTypes.ENUM,
            values: ['user', 'admin'],
            defaultValue: 'user'
        }
    }, {
        // Model Options
        tableName: 'users',
        indexes: [{
            unique: true,
            fields: ['username', 'email']
        }],
        // Hooks
        hooks: {
            // before create hash password
            beforeCreate: user => {
                return passwordHash(user.password)
                    .then(hash => {
                        user.password = hash
                    })
                    .catch(err => {
                        throw err
                    })
            },

            // before update hash password
            beforeUpdate: user => {
                if (user.changed('password')) {
                    return passwordHash(user.password)
                        .then(hash => {
                            user.password = hash
                        })
                        .catch(err => {
                            throw err
                        })
                }
                return Promise.resolve()
            }

        }
    })
    User.associate = function(models) {
        // associations can be defined here
    }

    /**
     * Instance Methods
     */
    User.prototype.validatePassword = passwordValidate

    return User
}
