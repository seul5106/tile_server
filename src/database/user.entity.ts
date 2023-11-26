import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  constructor() {
    this.id = 0;
    this.username = '';
    this.email = '';
  }
}

export { User };
