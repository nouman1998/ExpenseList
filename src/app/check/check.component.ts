import { Component, OnInit } from '@angular/core';
import { Expense } from '../expense';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss'],
})
export class CheckComponent implements OnInit {

  constructor(private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,) { this.initializeApp() }

  ngOnInit() { this.expenseList = []; }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  reasonInput;
  amountInput;
  expenseList = []
  totalExpenses: number = 0;
  addExpense() {

    console.log(this.amountInput)
    console.log(this.reasonInput)
    let expense: Expense = new Expense();
    expense.amount = this.amountInput;
    expense.reason = this.reasonInput;
    this.totalExpenses += parseInt(this.amountInput);
    this.expenseList.push(expense);
    this.reasonInput = "";
    this.amountInput = "";
  }

  clearList() {
    this.expenseList = [];
    this.totalExpenses = 0;

  }

}
