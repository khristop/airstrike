import { Component, OnInit, DoCheck } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations'
import { PaisService } from '../../core/rest/aeropuerto/pais.service';
import { CiudadService } from '../../core/rest/aeropuerto/ciudad.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProgramacionService } from '../../core/rest/programacion.service';

@Component({
  selector: 'app-viajar-form',
  templateUrl: './viajar-form.component.html',
  styleUrls: ['./viajar-form.component.css'],
  animations: [
    trigger('changePane', [
      state('out', style({
        height: 0,
      })),
      state('in', style({
        height: '*',
      })),
      transition('out => in', animate('250ms ease-out')),
      transition('in => out', animate('250ms 300ms ease-in'))
    ])
  ]
})
export class viajarFormComponent implements OnInit, DoCheck {

  paises;
  ciudades;
  ciudades_posibles = [];

  vuelos;

  public model = {
    email: '',
    firstname: '',
    lastname: '',
    country: '',
    city: '',
    postal: '',
    wphone: '',
    hphone: ''
  };

  public steps = [
    {
      key: 'step1',
      title: 'Destino',
      valid: false,
      checked: false,
      submitted: false,
    },
    {
      key: 'step2',
      title: 'Fechas',
      valid: false,
      checked: false,
      submitted: false,
    },
    {
      key: 'step3',
      title: 'Ruta',
      valid: false,
      checked: false,
      submitted: false,
    },
    {
      key: 'step4',
      title: 'Reservacion',
      valid: false,
      checked: false,
      submitted: false,
    },
  ];

  public activeStep = this.steps[0];

  viajarForm : FormGroup;

  constructor(
    private _pais_service: PaisService,
    private _ciudad_service: CiudadService,
    private _fb: FormBuilder,
    private router: Router,
    private _pro : ProgramacionService
  ) { }

  ngOnInit() {
    this.iniciarViajarForm();
    this._pais_service.obtenerTodos().subscribe(paises => {
      this.paises = paises;
      this._ciudad_service.obtenerTodos().subscribe(ciudades => {
        this.ciudades = ciudades;
      })
    })
  }

  iniciarViajarForm(){
    let pais_origen =  {"value": 'El Salvador', "disabled": false};
    let ciudad_origen = '';
    let pais_destino = '';
    let ciudad_destino =  {"value": '', "disabled": true};

    let fecha_ida = '';
    let fecha_regreso = '';

    let ruta = '';

    this.viajarForm = new FormGroup(
      {
        'pais_origen': new FormControl(pais_origen, [Validators.required]),
        'ciudad_origen': new FormControl(ciudad_origen, [Validators.required]),
        'pais_destino': new FormControl(pais_destino, [Validators.required]),
        'ciudad_destino': new FormControl(ciudad_destino, [Validators.required]),
        'fecha_ida': new FormControl(fecha_ida, [Validators.required]),
        'fecha_regreso': new FormControl(fecha_regreso, [Validators.required]),
        'ruta': new FormControl(ruta, [Validators.required]),
      });
  }

  onSelectPais(){
    this.ciudades_posibles = this.ciudades.filter( (ciudad) =>ciudad.pais_codigo == this.viajarForm.get('pais_destino').value );
    this.viajarForm.get('ciudad_destino').patchValue("", {onlySelf: true, emitEvent: true});
    this.viajarForm.get('ciudad_destino').enable();
  }


  setActiveStep(steo) {
    this.activeStep = steo
  }

  prevStep() {
    let idx = this.steps.indexOf(this.activeStep);
    if (idx > 0) {
      this.activeStep = this.steps[idx - 1]
    }
  }

  nextStep() {
    this.activeStep.submitted = true;
    if (!this.activeStep.valid) {
      return;
    }
    this.activeStep.checked = true;
    if (this.steps.every(it => (it.valid && it.checked))) {
      this.onWizardComplete(this.model)
    } else {
      let idx = this.steps.indexOf(this.activeStep);
      this.activeStep = null;
      while (!this.activeStep) {
        idx = idx == this.steps.length - 1 ? 0 : idx + 1;
        if (!this.steps[idx].valid || !this.steps[idx].checked) {
          this.activeStep = this.steps[idx]
        }
      }
    }
  }


  onWizardComplete(data?) {
    console.log('basic wizard complete', data)
  }


  private lastModel;

  // custom change detection
  ngDoCheck() {
    var modelAct = this.viajarForm.value;
    var modelUlt = this.lastModel;
    if (!this.lastModel) {
      // backup model to compare further with
      this.lastModel = Object.assign({}, modelAct )
    } else {
      if (Object.keys(modelAct).some((it)=> modelAct[it] != modelUlt[it])){
        this.validateSteps();
        
        this.lastModel = Object.assign({}, modelAct);
      }
    }
  }

  consultarVuelos(){
    const fecha1 = this.viajarForm.get('fecha_ida').value;
    var todate=new Date(fecha1).getDate();
    var tomonth=new Date(fecha1).getMonth()+1;
    var toyear=new Date(fecha1).getFullYear();
    var original_date1=+toyear+'-'+tomonth+'-'+todate;

    const fecha2 = this.viajarForm.get('fecha_regreso').value;
    var todate2=new Date(fecha2).getDate();
    var tomonth2=new Date(fecha2).getMonth()+1;
    var toyear2=new Date(fecha2).getFullYear();
    var original_date2=+toyear2+'-'+tomonth2+'-'+todate2;

    const filtro = 'search?destino='+this.viajarForm.get('ciudad_destino').value + '&fecha_ida='+
    original_date1 +'&fecha_regreso='+original_date2+"&_token="+localStorage.getItem('token');
    
    this._pro.obtenerTodos(filtro).subscribe(vuelos => {
      console.log(vuelos);
      this.vuelos = vuelos;
    });
  }

  validateSteps(){
    var current = this.activeStep;
    if(current.key == 'step1'){
      if( this.viajarForm.get('pais_origen').valid && this.viajarForm.get('pais_destino').valid && this.viajarForm.get('ciudad_destino').valid ){
        this.activeStep.valid = true;   
      }else{
        this.activeStep.valid = false;
      }
    }else if(current.key == 'step2'){
      if( this.viajarForm.get('fecha_ida').valid && this.viajarForm.get('fecha_regreso').valid){
        this.activeStep.valid = true;

        if(this.steps[0].valid && this.steps[0].checked && this.steps[1].valid && this.steps[1].checked){
        }
      }else{
        this.activeStep.valid = false;
      }
    }else if(current.key == 'step3'){
      // if(false){

      //   this.activeStep.valid = true;
      // }else{
      //   this.activeStep.valid = false;
      // }
    }else if(current.key == 'step4'){
      if ( this.steps.every(it=>( (it.valid && it.checked) || it.key == 'step4' ))) {
        this.onWizardComplete();
      } 
    }
  }

}
