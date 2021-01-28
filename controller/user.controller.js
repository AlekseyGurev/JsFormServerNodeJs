const db = require ('../db')
class userController {
    async createUser(req, res) {
        const {email,surname, name, data} = req.body
        const newPerson = await db.query(`INSERT INTO person (email, surname, name, data) values ($1,$2,$3,$4) RETURNING *`, [email, surname, name, data]);
        res.json(newPerson.rows[0]);
    }
    
    async getUsers(req, res) {
        const users  = await db.query('SELECT * FROM person')
        res.json(users.rows);
    }
    
    async getOneUser(req, res) {
        const id = req.params.id;
        const user = await db.query('SELECT * FROM person where id = $1', [id])
        res.json(user.rows[0]);
    }
    
    async updateUser(req, res) {
        const {email,surname, name,data,id} = req.body
        const user = await db.query('UPDATE person set email=$1, surname=$2, name=$3, data=$4 where id=$5 RETURNING *',[email, surname, name, data, id])
        res.json(user.rows[0]); 
    }
    
    async deleteUser(req, res) {
    } 
}

module.exports = new userController()