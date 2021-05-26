import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, FormArray} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

interface Escolaridad {
  id: number;
  name: string;
  file: string;
}

const ELEMENT_DATA: Escolaridad[] = [
  {id:1, name:'', file:''}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  isLinear = false;
  stepIndex = 0;
  dataSource = ELEMENT_DATA;
  postulationForm: FormGroup;
  
  files :string[] = []
  escolaridades: Escolaridad[] = [
    {id: 0, name: 'Licenciatura', file:''},
    {id: 1, name: 'Maestria', file:''},
    {id: 2, name: 'Doctorado', file:''},
    {id: 3, name: 'Postgrado', file:''}
  ];
  constructor(private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar) {
      this.postulationForm = this._formBuilder.group({
        nombre:  [''],
        apellidoPat: [''],
        apellidoMat: [''],
        fechaNacimiento: [''],
        email: [''],
        //Etica personal
        eticaPers1: [''],
        eticaPers2: [''],
        eticaPers3: [''],
        eticaPers4: [''],
        eticaPers5: [''],
        eticaPers6: [''],
        eticaPers7: [''],
        eticaPers8: [''],
        //Etica profesional
        eticaProf1: [''],
        eticaProf2: [''],
        eticaProf3: [''],
        eticaProf4: [''],
        eticaProf5: [''],
        //Servicio al cliente
        servicioCte1: [''],
        servicioCte2: [''],
        servicioCte3: [''],
        servicioCte4: [''],
      })
    }

  ngOnInit() {
    
  }

  nextStep(){
    console.log('form',this.postulationForm.value)
     let valid = this.validateStep(this.stepIndex)
    if(valid){ 
      this.stepIndex += 1 
    }
    //this.stepIndex += 1 
  }


  prevStep(){
    this.stepIndex -= 1 
  }

  validateStep(index:number):boolean{
    console.log('form',this.postulationForm.value)
    if(index==0){
      if(!this.postulationForm.get('nombre')?.dirty){
        this.openSnackBar('El campo Nombre no debe estar vacio');
        return false
      }else if(!this.postulationForm.get('apellidoPat')?.dirty){
        this.openSnackBar('El campo Apellido Paterno no debe estar vacio');
        return false
      }else if(!this.postulationForm.get('apellidoMat')?.dirty){
        this.openSnackBar('El campo Apellido Materno no debe estar vacio');
        return false
      }else if(!this.postulationForm.get('fechaNacimiento')?.dirty){
        this.openSnackBar('El campo Fecha de Nacimiento no debe estar vacio');
        return false
      }else if(!this.postulationForm.get('email')?.dirty){ 
        this.openSnackBar('El campo Email no debe estar vacio');
        return false
      }else{
        return true
      }
    }else if(index==2){
      if(!this.postulationForm.get('eticaPers1')?.dirty ||
         !this.postulationForm.get('eticaPers2')?.dirty || 
         !this.postulationForm.get('eticaPers3')?.dirty ||
         !this.postulationForm.get('eticaPers4')?.dirty ){
          this.openSnackBar('Debes contestar todas las preguntas');
          return false
      }else{
        return true
      }
    }else if(index==3){
      if(!this.postulationForm.get('eticaPers5')?.dirty ||
         !this.postulationForm.get('eticaPers6')?.dirty ||
         !this.postulationForm.get('eticaPers7')?.dirty ||
         !this.postulationForm.get('eticaPers8')?.dirty ){
          this.openSnackBar('Debes contestar todas las preguntas');
          return false
      }else{
        return true
      }
    }else if(index==4){
      if(!this.postulationForm.get('eticaProf1')?.dirty){
        this.openSnackBar('Debes elegir al menos una opción');
        return false
      }else{
        return true
      }
    }else if(index==5){
      if(!this.postulationForm.get('eticaProf2')?.dirty){
        this.openSnackBar('Debes elegir al menos una opción');
        return false
      }else{
        return true
      }
    }else if(index==6){
      if(!this.postulationForm.get('eticaProf3')?.dirty){
        this.openSnackBar('Debes elegir al menos una opción');
        return false
      }else{
        return true
      }
    }else if(index==7){
      if(!this.postulationForm.get('eticaProf4')?.dirty){
        this.openSnackBar('Debes elegir al menos una opción');
        return false
      }else{
        return true
      }
    }else if(index==8){
      if(!this.postulationForm.get('eticaProf5')?.dirty){
        this.openSnackBar('Debes elegir al menos una opción');
        return false
      }else{
        return true
      }
    }else if(index==9){
      if(!this.postulationForm.get('servicioCte1')?.dirty ||
      !this.postulationForm.get('servicioCte2')?.dirty || 
      !this.postulationForm.get('servicioCte3')?.dirty ||
      !this.postulationForm.get('servicioCte4')?.dirty ){
       this.openSnackBar('Debes contestar todas las preguntas');
       return false
      }else{
        return true
      }
    }else{
      return true
    }
    
  }

  onFileSelected(event:any) {
    console.log(event.target.files);
    this.files.push(event.target.files[0].name)
    //this.currentInput = event.target.files; 
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '',{
      duration: 2000,
    });
  }

  addRow(){
    let index = (this.dataSource.length + 1)
    let element = {
      "id":index,
      "name":'',
      "file":''
    }
    this.dataSource.push(element)
    console.log('Añadimos',this.dataSource)
  }
}

