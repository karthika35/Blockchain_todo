import {Inject, Injectable} from '@angular/core';
import Web3 from 'web3';
import {WEB3} from './WEB3';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private abi: any;
  private accounts: string[];
  private contract: any;
  private address: any;



  constructor(@Inject(WEB3) private web3: Web3) {
    this.address = '0x7CD3814dB7E4fA04B0172CEe6591E03913110Dd6';

  }

  public async init() {
    this.abi = require('./todo.json');
    this.accounts = await this.web3.eth.getAccounts();
    this.contract = new this.web3.eth.Contract(this.abi, this.address, {gas: 1000000, gasPrice: '100000'});
    console.log(this.accounts);
  }

  public  createTodo(name: string) {
    console.log(this.accounts[0]);
    this.contract.methods.addTodo(name).send({
      from: this.accounts[0]
    }).then(reci  => {
      console.log(reci);
    }).catch(err => {
      console.error(err);
    });
  }
}
