const Sequelize = require('sequelize');

const config = {
  database: 'testuser',
  username: 'testuser',
  password: 'testuser',
  options: {
    host: 'localhost',
     port: 5432,
     timezone: 'GMT-0',
     dialect: 'postgres',//'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql',
     logging: false, // process.env.NODE_ENV === 'development' ||process.env.NODE_ENV === 'test',
     pool: {
       max: 10,
       min: 5,
       idle: 30000
     }
  }
}

const db = {};

var sequelize = new Sequelize(config.database, config.username, config.password, config.options);

sequelize
  .authenticate()
  .then(err => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

db.User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});
db.Job = sequelize.define('job', {
  possition: {
    type: Sequelize.STRING
  }
});
db.User.belongsTo(db.Job);

  // force: true will drop the table if it already exists
db.User.sync({ force: true })
.then(() => {
  //  Table created;
  return db.User.bulkCreate([ {
    firstName: 'Max',
    lastName: 'Liul'
  },
  {
    firstName: 'Maxim',
    lastName: 'Liul'
  },
  {
    firstName: 'Maks',
    lastName: 'Liul'
  } ]);
}).
  then(() => {
    return  db.User.findOrCreate({ where: {
      firstName: 'Nikolo',  lastName: 'Tesla'
    } });
  });

db.Job.sync({ force: true })
  .then(() => {
    //  Table created;
    return db.Job.bulkCreate([ {
      possition: 'Programmer'
    },
    {
      possition: 'Programmer'
    } ]);
  });


module.exports = db;

 // Promise1 = new Promise;
// Promise1().then().then().then()
// Promise1().then( .then(.then(.then()))).