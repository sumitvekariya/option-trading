import { Module } from '@nestjs/common';
import { DeribitResolver } from './deribit.resolver';
import { DeribitService } from './deribit.service';

@Module({
  providers: [DeribitResolver, DeribitService]
})
export class DeribitModule {}
