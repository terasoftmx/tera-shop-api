const mysql = require('mysql')

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
})

exports.getProducts = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM Cat01', (error, response) => {
      if (error) {
        console.error(error)
        reject({status : 'error', error : error.message})
      } else {
        if(response !== null && response.length > 0){
          resolve(response + '2')
        }
        else{
          reject({status : false, error : response})
        }
      }
    })
  })
}
