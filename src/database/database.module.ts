import { createConnection, Connection } from 'typeorm';
import { User } from '../database/user.entity';

let connection: Connection | null = null;

async function initializeDatabase() {
  if (!connection) {
    connection = await createConnection({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [User],
      synchronize: true,
    });
  }
  return connection;
}

async function getUsers() {
  await initializeDatabase();
  if (!connection) {
    connection = await createConnection();
  }
  const userRepository = connection.getRepository(User);
  const users = await userRepository.find();
  return users;

  // const create = await userRepository.save({
  //   username: '정한슬',
  //   email: 'hsjeong@bstarcom.co.kr',
  // });
  // console.log('저장 실행');
  // console.log(create);
}

export { initializeDatabase, getUsers };
