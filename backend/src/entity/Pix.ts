import {
  Entity, 
  PrimaryGeneratedColumn, 
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
  OneToOne,
} 
    from "typeorm";

@Entity()
export class Pix {

  @PrimaryGeneratedColumn('uuid');

  @Column();
  id: string;

  @Column();
  value: number;

  @CreateDateColumn();
  createdAt: Date;

  @UpdateDateColumn();
  updatedAt: Date;
}
