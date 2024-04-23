import { Component, OnInit } from '@angular/core';
import { routes, Page } from '../../../assets/data';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html'
})
export class HomePage implements OnInit {

  title: string = 'Menú principal';
  pages: Page[] = routes;

  constructor(private iab: InAppBrowser) {
  }

  ngOnInit() {
  }

  errorImg(ev){}
  openFb(){
    const browser = this.iab.create('https://www.facebook.com/EasterEggMexico/');
    browser.show();
  }

  openIg(){
    const browser = this.iab.create('https://www.instagram.com/eastereggmexico/');
    browser.show();
  }

  openAdd(){
    const browser = this.iab.create('https://addinteli.com.mx/');
    browser.show();
  }

  openTopup(){
    const browser = this.iab.create('https://byplus.io/e-egg');
    browser.show();
  }

  openTopupGuide(){
    const browser = this.iab.create('https://e-egg.com.mx/guia-de-compra-y-activacion/');
    browser.show();
  }

  openPoints(){
    const browser = this.iab.create('https://e-egg.com.mx/mi-cuenta/nrp-points/');
    browser.show();
  }

  openExchange(){
    const browser = this.iab.create('https://e-egg.com.mx/beneficios/');
    browser.show();
  }

  openEgg(){
    const browser = this.iab.create('https://e-egg.com.mx/');
    browser.show();
  }

}
