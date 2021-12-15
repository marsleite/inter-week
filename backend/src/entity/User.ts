import {
  Entity, 
  PrimaryGeneratedColumn, 
  Column,
} 
    from "typeorm";

@Entity()
export class User {

  @PrimaryGeneratedColumn('uuid');

  @Column();
  id: string;

  @Column();
  firtName: string;

  @Column();
  lastName: string;

  @Column();
  email: string;

  @Column();
  accountNumber: number;

  @Column();
  accountDigit: number;

  @Column();
  wallet: number;

  @Column();
  password: string;


}
