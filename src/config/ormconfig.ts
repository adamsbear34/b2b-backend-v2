import { ConnectionOptions } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { Profile } from '../profile/entities/profile.entity';
import { UserRole } from '../users/user-role/entities/user-role.entity';
import { BusinessRole } from '../users/business-role/entities/business-role.entity';
import { Country } from '../country/entities/country.entity';
import { Media } from '../media/entities/media.entity';

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'ec2-52-30-159-47.eu-west-1.compute.amazonaws.com',
  port: 5432,
  username: 'nayewkkcyoutad',
  password: '328ff850bfe66b8fe5a9db9f7a1b0ebc73fd37385527647d4bced82762f15729',
  database: 'd150p20b2lj9g9',
  entities: [User, Profile, UserRole, BusinessRole, Country, Media],
  synchronize: true,
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
};

export default config;
