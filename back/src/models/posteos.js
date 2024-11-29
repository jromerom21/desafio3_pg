
const {DB} = require('../config/db')


const AgregarPost = async(tit, img, des) => {

    const SqlQuery = "INSERT INTO posts VALUES(DEFAULT, $1, $2, $3)"
    const values = [tit, img, des]

    const {rowCount,rows}  = await DB.query(SqlQuery, values)
    
    return {
        rowCount, rows
    }
}

const ListarPost = async() => {

    const SqlQuery = "SELECT * FROM posts"
    const {rows} = await DB.query(SqlQuery)

    return rows;

}

module.exports = {
    AgregarPost, ListarPost
}