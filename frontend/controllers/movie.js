const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
/**
 * CRUD CONTROLLERS
 */

//CREATE-ONE
const create = async (req, res, next) => {
    const db = 'btDB1' in req.body ? 'db_1' : 'db_2';
    console.log(db);
    await fetch(`http://backend:3000/${db}`, {
        method:"POST", 
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(req.body)
    });
    
    res.redirect('/');
};

//GET-ALL
const index = async (req, res, next) => {
    const data = await fetch("http://backend:3000", {method:"get"}).then(texto => texto.json());
    console.log(data);
    res.render("movie/index", {
        movies: data,
        layout:false
    });
};

const remove = async (req, res, next) => {
    let value, db;
    if ('removeBD1' in req.body){
        db = 'db_1/remove';
        value = req.body.removeBD1;
    } else {
        db = 'db_2/remove';
        value = req.body.removeBD2;
    }
    await fetch(`http://backend:3000/${db}`, {
        method:"DELETE", 
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({'nome': value})
    });
    
    res.redirect('/');
};

module.exports = {index, create, remove };