import { Sequelize } from 'sequelize-typescript';

/** @todo refactor: use envs and configs */
const sequelize = new Sequelize({
  database: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'newuser',
  password: 'password',
  dialect: 'postgres',
  modelPaths: [__dirname + '/models']
});

sequelize
  .authenticate()
  .then(async () => {
    console.log('Connection has been established successfully.');
    await sequelize.databaseVersion().then(console.log);
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

/** @todo check types */
// @ts-ignore:next-line
async function runInTransaction<T>(callback, transaction?): Promise<T> {
  if (transaction) {
    return callback(transaction);
  } else {
    return sequelize.transaction<T>(async (transaction) => {
      return callback(transaction);
    });
  }
}

export { sequelize, runInTransaction };