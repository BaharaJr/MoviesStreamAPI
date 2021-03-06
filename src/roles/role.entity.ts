import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Permission } from 'src/permissions/permission.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  Role_id: number; 

  @Column()
  Crud_users : boolean; 

  @Column()
  Crud_movies : boolean; 

  @Column()
  Crud_seasons : boolean; 

  @Column()
  Crud_episodes : boolean; 

  @Column()
  Crud_countries : boolean; 

  @Column()
  Crud_actors : boolean; 

  @Column()
  Crud_directors : boolean; 


  @Column({ default: false })
  Deleted : boolean; 


  @ManyToOne(type => Permission, permission => permission.roles)
  permission : Permission;
}

