const model = require("../Model/product")
const Product = {}

Product.all = async (req, res) => {
    try {
        const data = await model.GetAll()
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}

Product.add = async (req, res) => {
    try {
        const { name, stok, price } = req.body
        const data = await model.Add(name, stok, price)
        return res.send('data berhasil ditambahkan').send(data)
    } catch (error) {
        return res.send('data gagal ditambahkan')
    }
}

Product.edit = async (req, res) => {
    try {
        const { id, name, stok, price } = req.body
        const data = await model.Edit(id, name, stok, price)
        return res.send('data berhasil diubah').send(data)
    } catch (error) {
        return res.send('data gagal diubah')
    }
}

Product.delete = async (req, res) => {
    try {
        const {name} = req.body
        const data = await model.Delete(name)
        return res.send('data berhasil dihapus').send(data)
    } catch (error) {
        return res.send('data gagal dihapus')
    }

}

Product.search = async (req, res) => {
    try {
        const name = req.query.name
        const data = await model.search(name)
        if (data.rowCount > 0) {
            return res.send(data.rows)
        } else {
            return res.send('Yang anda cari ga ada bos!!')
        }
    } catch (error) {
        return res.send('Gagal dalam pencarian')
    }
}

Product.sort = async (req, res) => {
    try {
        const {table, sort} = req.params
        const data = await model.sort(table, sort)
        return res.send(data)
    } catch (error) {
        res.send('Gagal dalam mengurutkan')
    }
}

module.exports = Product