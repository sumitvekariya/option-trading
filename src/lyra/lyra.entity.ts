import { Field, Int, ObjectType, Float } from '@nestjs/graphql';

@ObjectType()
export class LyraResponse {
  @Field(() => Float)
  volume: number;

  @Field(() => Float)
  underlying_price: number;

  @Field()
  underlying_index: string;

  @Field()
  quote_currency: string;

  @Field(() => Float, { nullable: true })
  price_change: number | null;

  @Field(() => Float, { nullable: true })
  open_interest: number;

  @Field(() => Float, { nullable: true })
  mid_price: number;

  @Field(() => Float, { nullable: true })
  mark_price: number;

  @Field(() => Float, { nullable: true })
  low: number;

  @Field(() => Float, { nullable: true })
  last: number;

  @Field(() => Int)
  interest_rate: number;

  @Field()
  instrument_name: string;

  @Field(() => Float, { nullable : true })
  high: number;

  @Field(() => Float)
  estimated_delivery_price: number;

  @Field(() => Float)
  creation_timestamp: number;

  @Field(() => Float, { nullable: true })
  bid_price: number;

  @Field()
  base_currency: string;

  @Field({ nullable: true })
  ask_price: string;
}