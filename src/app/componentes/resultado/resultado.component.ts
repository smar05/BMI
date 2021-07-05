import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  public bmi:number = 0;
  public resultado: string = '';
  public interpretacion:string = '';

  constructor(private route:ActivatedRoute) {
    this.bmi = +route.snapshot.paramMap.get('valor')!;
  }

  ngOnInit(): void {
    this.getResultado();
  }

  public getResultado(){
    if(this.bmi >= 25){
      this.resultado = 'Exceso de peso';
      this.interpretacion = 'Tienes un peso corporal superior al normal';
    }else if(this.bmi >= 18.5){
      this.resultado = 'Normal';
      this.interpretacion = 'Tienes un peso corporal normal';
    }else{
      this.resultado = 'Bajo de peso';
      this.interpretacion = 'Tienes un peso corporal muy bajo';
    }
  }

}
