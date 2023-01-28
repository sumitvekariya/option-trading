import { Args, Query, Resolver } from '@nestjs/graphql';
import { DeribitResponse } from './deribit.entity';
import { DeribitService } from './deribit.service';


@Resolver(DeribitResponse)
export class DeribitResolver {

  constructor(private readonly deribitService: DeribitService) {
  }

  @Query(() => [DeribitResponse])
  async getDeribitResponse(
    @Args('currency') currency: string
  ) {
    try {
      return this.deribitService.getDeribitResponse(currency);
    } catch (err) {
      throw err;
    }
  }
}