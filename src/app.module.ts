import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DeribitModule } from './deribit/deribit.module';
// import { LyraModule } from './lyra/lyra.module';
import { LyraModule } from './lyra/lyra.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true
    }),
    DeribitModule,
    LyraModule,
    // LyraModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
