import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { UserService } from './user/user.service';
import { UserResolver } from './user/user.resolver';
import { PrismaService } from './prisma.service';

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'public'), // This points to the 'public' folder where your static files are located
            serveRoot: '/', // This means files will be available under 'http://localhost:3001/files/'
        }),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'src/shema.gql'),
            sortSchema: true,
            playground: true,
            context: ({ req, res }) => ({ req, res }),
        }),
        ConfigModule.forRoot({}),
        AuthModule,
    ],
    controllers: [AppController],
    providers: [AppService, UserService, UserResolver, PrismaService],
})
export class AppModule {}
