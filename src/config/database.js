const Pool = require('pg-pool')

const produk = new Pool({
    user : "tugas1",
    database : "Produk",
    password : "abcd1234",
    host : "localhost"
})

module.exports = produk