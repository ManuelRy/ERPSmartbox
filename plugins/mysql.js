import mysql from 'mysql'

const connection = mysql.createConnection({
    host: 'myhost',
    user: 'myusername',
    password: 'mypassword',
    database: 'mydatabase',
})

connection.connect()

export default (context, inject) => {
    inject('mysql', connection)
}