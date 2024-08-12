const shelljs = require('shelljs')

shelljs.cp('-R', ['views/', 'public/'], './dist')
