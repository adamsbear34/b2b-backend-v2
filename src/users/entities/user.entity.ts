import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Profile } from '../../profile/entities/profile.entity';
import { UserRole } from '../user-role/entities/user-role.entity';
import { BusinessRole } from '../business-role/entities/business-role.entity';
import { Country } from '../../country/entities/country.entity';
import { Media } from '../../media/entities/media.entity';

@Entity()
@ObjectType({ description: 'user' })
export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Profile)
  @OneToOne(() => Profile, (profile) => profile.user, { nullable: true })
  @JoinColumn({ name: 'profileId' })
  profile: Profile;

  @Field(() => UserRole)
  @ManyToOne(() => UserRole, (userRole) => userRole.user, { nullable: true })
  @JoinColumn({ name: 'userRoleId' })
  userRole: UserRole;

  @Field(() => BusinessRole)
  @ManyToOne(() => BusinessRole, (businessRole) => businessRole.user, {
    nullable: true,
  })
  @JoinColumn({ name: 'businessRoleId' })
  businessRole: BusinessRole;

  @Field(() => Country)
  @ManyToOne(() => Country, (country) => country.user)
  @JoinColumn({ name: 'countryId' })
  country: Country;

  @Field(() => Media)
  @OneToOne(() => Media, (media) => media.user, { nullable: true })
  @JoinColumn({ name: 'mediaId' })
  media: Media;

  @Field(() => String)
  @Column({ type: 'character varying', length: 50 })
  firstName: string;

  @Field(() => String)
  @Column({ type: 'character varying', length: 50 })
  lastName: string;

  @Field(() => String)
  @Column({ type: 'character varying', length: 50, unique: true })
  userName: string;

  @Field(() => String)
  @Column({ type: 'character varying', length: 128, unique: true })
  phone: string;

  @Field(() => String)
  @Column({ type: 'character varying', length: 128, unique: true })
  email: string;

  @Field(() => String)
  @Column({ type: 'character varying', length: 255, unique: true })
  password: string;

  @Field(() => Date)
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  registeredDate: Date;

  @Field(() => Date)
  @Column({ type: 'timestamp' })
  lastLoginAt: Date;

  @Field(() => Date)
  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  lastUpdateAt: Date;
}
