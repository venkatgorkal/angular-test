import { Component, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';
import { Person } from '../person/person';
import { PersonServiceService } from '../person/person-service.service';

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent implements OnInit {

 

  public persons$: Observable<Person[]>;
  public persons: Person[];

  personSubsrction: Subscription;

  public searchName: string;

  constructor(private personService: PersonServiceService) { }

  ngOnInit() {
    this.persons$ = this.personService.getPersonList();
     this.personSubsrction =this.persons$.subscribe(res=>{
      this.persons = res;
    })
  }

  ngOnDestroy() {
    if(this.personSubsrction) {
      this.personSubsrction.unsubscribe();
    }

  }
}
