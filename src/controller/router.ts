import { Response } from 'express';

const router = require('express').Router();
const { initializeDatabase, getUsers } = require('../database/database.module');

router.get('/get', async (req: Request, res: Response) => {
  try {
    const connection = await initializeDatabase();
    const users = await getUsers();
    connection.close();
    res.json({ users });
  } catch (error) {
    console.log('error: ' + error);
    res.status(500).json({ error: 'Error retrieving users' });
  }
});
router.get('/post', (req: Request, res: Response) => {
  res.send('This is post page');
});
router.get('/delete', (req: Request, res: Response) => {
  res.send('This is delete page');
});

module.exports = router;
