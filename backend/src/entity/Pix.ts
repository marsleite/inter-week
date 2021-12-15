import {
  Entity, 
  PrimaryGeneratedColumn, 
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} 
    from "typeorm";

import { User } from "./User";

@Entity()
export class Pix {

  @PrimaryGeneratedColumn('uuid');

  @Column();
  id: string;

  @Column();
  value: number;

  @ManyToOne(type => User, user => user.id)
  @JoinColumn()
  requetingUser: User;

  @ManyToOne(type => User, user => user.id, { nullable: true })
  @JoinColumn()
  payingUser: User;

  @CreateDateColumn();
  createdAt: Date;

  @UpdateDateColumn();
  updatedAt: Date;
}
