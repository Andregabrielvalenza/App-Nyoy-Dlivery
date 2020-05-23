import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular'; 
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-escoger-menu',
  templateUrl: './escoger-menu.page.html',
  styleUrls: ['./escoger-menu.page.scss'],
})
export class EscogerMenuPage implements OnInit {


  ngOnInit() {
  }

  
  
  sliderTwo: any;


  //Configuration for each Slider

  slideOptsTwo = {
    initialSlide: 1,
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    spaceBetween: 10
  };

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 3
  };
 
  constructor( private menu:MenuController,
    private navCtrl: NavController,
    public popoverController: PopoverController
  ) {
    //Item object for Food
    this.sliderTwo =
    {
      isBeginningSlide: true,
      isEndSlide: false,
    };
  }

  //Move to Next slide
  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }

  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation  
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }


  /* menu */
  open_menu () {
    this.menu.enable (true, 'first');
    this.menu.open ('first');
  }
}
