import { Injectable } from '@nestjs/common';
import Lyra from  '@lyrafinance/lyra-js';
// const Lyra = require('@lyrafinance/lyra-js')

@Injectable()
export class AppService {
  async getHello() {

    // const lyra = new Lyra();
    // let markets = await lyra.markets();

    // const address = ['sETH-sUSD', 'sBTC-sUSD'];

    // markets = markets.filter(obj => address.indexOf(obj.name) !== -1);

    // let finalResponse = [];
    // for (let m of markets) {
    //   let obj = {};
    //   obj['name'] = m.name;

    //   const expiries = m.liveBoards();

    //   for (let e of expiries) {
    //     const strikes = e.strikes();
    //     for (let st of strikes) {
    //       if (!obj['prices']) {
    //         obj['prices'] = [{
    //           price: st.strikePrice
    //         }]
    //       } else {
    //         obj['prices'].push({
    //           price: st.strikePrice
    //         })
    //       }
    //     }
    //   }
    //   finalResponse.push(obj)
    // }

    // console.log(finalResponse)

    // // console.log(
    // //   markets.map(market => ({
    // //   address: market.address,
    // //   name: market.name,
    // //   // List all live boards (expiries)
    // //   expiries: market.liveBoards().map(board => ({
    // //     id: board.id,
    // //     expiryTimestamp: board.expiryTimestamp,
    // //     // List all strikes
    // //     strikes: board.strikes().map(strike => ({
    // //       id: strike.id,
    // //       strikePrice: strike.strikePrice,
    // //     })),
    // //   })),
    // // }))
    // // );

    return 'Hello World!';
  }
}
