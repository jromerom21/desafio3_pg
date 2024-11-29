
const Post = require('../models/posteos')

const AgregarPostDB = async (req, res) => {

    const {titulo, url, descripcion} = req.body
    
    const respuesta = await Post.AgregarPost(titulo, url, descripcion)

    res.status(200).json({
        msg: "Post Agregado con Exito!",
        data: respuesta
    })
};

const ListarPostDB = async (req, res) => {

    const posts  = await Post.ListarPost()

    res.status(200).json(posts)
};


module.exports = {
    AgregarPostDB, ListarPostDB
}