import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import  {Expense} from './expense';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }
  
  reasonInput;
  amountInput;
  expenseList = []
  totalExpenses:number=0;


  ngOnInit() {
    this.expenseList = [];
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  addExpense() {
   let expense: Expense = new Expense();
    expense.amount = this.amountInput;
    expense.reason = this.reasonInput;
    this.totalExpenses+=parseInt(this.amountInput);

    this.expenseList.push(expense);
    console.log(this.expenseList);


   
    this.reasonInput="";
    this.amountInput="";
  }

  clearList(){
    this.expenseList=[];
    
  }
}
