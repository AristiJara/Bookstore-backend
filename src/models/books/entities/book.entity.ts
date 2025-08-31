import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'book' })
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column('int', { default: 1 })
  stock: number;

  @Column({ type: 'varchar' })
  genre: string;

  @Column({ nullable: true })
  image: string;
}
