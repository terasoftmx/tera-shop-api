const mysql = require('mysql')

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
})

exports.getProducts = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM Cat01', _errorCallBack)
  })
}

const _errorCallBack = (error, response) => {
  if (error) {
    reject({status : "error", error : error.message})
  } else {
    if(resp !== null && resp.length > 0){
      resolve(resp);
    }
    else{
      reject({status : false, error : resp});
    }
  }
}
