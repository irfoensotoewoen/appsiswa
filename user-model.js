const db = require('../config/db')

const getAllUsers = async () => {
    const [rows] =  await db.query('select * from siswa')
    return rows
}

module.exprorts = {getAllUser}