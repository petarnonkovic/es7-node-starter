const {
    dialect
} = require('./variables')

module.exports = {
    'development': {
        'dialect': dialect,
        'operatorsAliases': false,
        'storage': './database.sqlite3',
        'define': {
            'underscored': true,
            'freezeTableName': false,
            'charset': 'utf8',
            'dialectOptions': {
                'collate': 'en_US.UTF-8'
            }
        },
        'pool': {
            'max': 5,
            'min': 0,
            'acquire': 30000,
            'idle': 10000
        }
    },
    'test': {
        'dialect': dialect,
        'operatorsAliases': false,
        'storage': ':memory',
        'define': {
            'underscored': true,
            'freezeTableName': false,
            'charset': 'utf-8',
            'dialectOptions': {
                'collate': 'en_US.UTF-8'
            }
        },
        'pool': {
            'max': 5,
            'min': 0,
            'acquire': 30000,
            'idle': 10000
        }
    },
    'production': {
        'dialect': dialect,
        'operatorsAliases': false,
        'storage': './database.sqlite3',
        'define': {
            'underscored': true,
            'freezeTableName': false,
            'charset': 'utf8',
            'dialectOptions': {
                'collate': 'en_US.UTF-8'
            }
        },
        'pool': {
            'max': 5,
            'min': 0,
            'acquire': 30000,
            'idle': 10000
        }
    }
}
