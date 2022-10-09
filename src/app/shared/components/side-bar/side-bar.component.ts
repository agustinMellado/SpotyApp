import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  //menu principal
  mainMenu: {
    //declaracion de propiedades del tipo array.
    defaultOptions: Array<any>;
    accessLink: Array<any>;
  } = {
    //inicializacion
    defaultOptions: [],
    accessLink: [],
  };
  //Arreglo para listas personalizadas
  customOptions: Array<any> = [];

  constructor() {}

  ngOnInit(): void {
    //indico los valores que iran dentro del arreglo.
    this.mainMenu.defaultOptions = [
      //valores de la listas de arreglos
      {
        name: 'Home',
        icon: 'uil-estate',
        router: ['/'],
      },
      {
        name: 'Buscar',
        icon: 'uil-search',
        router: ['/', 'history'],
      },
      {
        name: 'Tu Biblioteca',
        icon: 'uil-chart',
        router: ['/', 'favorites'],
      },
    ];
    //---------------------------------------------
    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square',
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical',
      },
    ];
    //---------------------------------------------
    this.customOptions = [
      {
        name: 'Mi lista º1',
        router: ['/'],
      },
      {
        name: 'Mi lista º2',
        router: ['/'],
      },
      {
        name: 'Mi lista º3',
        router: ['/'],
      },
      {
        name: 'Mi lista º4',
        router: ['/'],
      },
    ];
  }
}
