//можно, так-же, использовать CommonJS для импотра и экспорта.
//Это паттерн модуля, который поддерживается всеми версиями Node.
//а так-же, можно использовать вместе с Babel и Webpack.

//используем для экспорта module.export

const print = message => log(message, new Date())

const log(message, timestamp) =>
console.log(`${timestamp.toString()}: ${message}`)

module.exports = {print, log}