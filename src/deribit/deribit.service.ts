import { Injectable } from '@nestjs/common';

import { DeribitResponse } from './deribit.entity';
import axios from 'axios';

@Injectable()
export class DeribitService {

  async getDeribitResponse(currency: string) {
    try {
      const data: any = await axios.get(`https://test.deribit.com/api/v2/public/get_book_summary_by_currency?currency=${currency}&kind=option`);
  
      const result: DeribitResponse[] = data.data.result;
      return result;
    } catch(err) {
      throw err.message;
    }
  }
}