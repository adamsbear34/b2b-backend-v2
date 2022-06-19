import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { join } from 'path';
import { ProfileModule } from './profile/profile.module';
import { BusinessRoleModule } from './users/business-role/business-role.module';
import { UserRoleModule } from './users/user-role/user-role.module';
import { MediaModule } from './media/media.module';
import { CountryModule } from './country/country.module';
import { AuthModule } from './auth/auth.module';
import ormconfig from './config/ormconfig';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    TypeOrmModule.forRoot(ormconfig),
    UsersModule,
    ProfileModule,
    BusinessRoleModule,
    UserRoleModule,
    MediaModule,
    CountryModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
