import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'cliente-details',
  templateUrl: './cliente-details.component.html',
  styleUrls: ['./cliente-details.component.css']
})
export class ClienteDetailsComponent implements OnInit {
  cards = [
    { title: 'Card 1', cols: 2, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 2 },
    { title: 'Card 4', cols: 1, rows: 1 }
  ];  
  private selectedId: number;

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    // this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) => {
    //     // (+) before `params.get()` turns the string into a number
    //     this.selectedId = +params.get('id');
    //     return this.service.getHeroes();
    //   }
    // ));
  }
}

//Lic. Dennise