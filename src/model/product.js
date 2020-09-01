const database = require("../config/database")
const Product = {}

Product.GetAll = () => {
    return new Promise((resolve, reject) => {
        database
            .query("SELECT * FROM public.produk ORDER BY id ASC ")
            .then((res) => {
                resolve(res.rows)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

Product.Add = (name, stok, price) => {
    database
        .query(`INSERT INTO public.produk (name, stok, price) VALUES ('${name}', ${stok}, '${price}')`)
        .then((res) => {
            console.log(res)
            return "Data berhasil di tambah"
        })
        .catch((err) => {
            console.log(err)
            return err
        })
}

Product.Edit = (id, name, stok, price) => {
    database
        .query(`UPDATE public.produk SET name='${name}', stok=${stok}, price='${price}' WHERE id=${id};`)
        .then((res) => {
            console.log(res)
            return "Data berhasil di update"
        })
        .catch((err) => {
            console.log(err)
            return err
        })
}

Product.Delete = (name) => {
    database
        .query(
            `DELETE FROM public.produk WHERE name='${name}';`)
        .then((res) => {
            console.log(res)
            return "Data berhasil di hapus"
        })
        .catch((err) => {
            console.log(err)
            return err
        })
}

Product.search = (name) => {
    return new Promise((resolve, reject) => {    
        database
        .query(
            `SELECT * FROM public.produk WHERE lower(name) LIKE lower('%${name}%') `)
        .then((res) => {
            resolve(res)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

Product.sort = (table, sort) => {
    return new Promise((resolve, reject) => {    
        database
        .query(
            `SELECT * FROM public.${table} ORDER BY ${sort} ASC`)
        .then((res) => {
            resolve(res)
        })
        .catch((err) => {
            reject(err)
        })
    })
}
module.exports = Product