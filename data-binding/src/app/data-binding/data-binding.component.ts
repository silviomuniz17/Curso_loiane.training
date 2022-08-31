import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {


//======================================================================================================================
  //Interpolation / Interpolação
  url: string = 'https://github.com/silviomuniz17'; //criando uma variavel URL do tipo string que recebe uma URL
  cursoAngular: boolean = true;

  getValor() {
    return 1;
  };

  getCurtirCurso() {
    return true;
  }
// =====================================================================================================================
//======================================================================================================================
  //Property Binding
  urlImagem: string = 'https://cache.lovethispic.com/uploaded_images/234751-When-You-Love-And-Laugh-Abundantly-You-Live-A-Beautiful-Life.jpg'; //criando uma variavel URLImagem do tipo string que recebe uma URL
  // cursoAngular: boolean = true;
  //
  // getValor() {
  //   return 1;
  // };
  //
  // getCurtirCurso() {
  //   return true;
  // }
// =====================================================================================================================

  constructor() {
  }

  ngOnInit(): void {
  }

}
