import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public edad:number = 25;
  public peso:number = 60;
  public altura:number = 170;
  public sexo:string = 'Masculino';

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public cambiarAltura(event:any):void{
    this.altura = event.target.value;
  }

  public masculino():void{
    this.sexo = 'Masculino';
  }

  public femenino():void{
    this.sexo = 'Femenino';
  }

  public calcularBMI():void{
    const bmi = this.peso/(Math.pow(this.altura/100,2));
    this.router.navigate(['/resultado',bmi.toFixed(1)]);
  }

}
