import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
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

  constructor(private personService: PersonServiceService) { }

  ngOnInit() {
    this.persons$ = this.personService.getPersonList();
    this.persons$.subscribe(res=>{
      this.persons = res;
    })
  }

  onKey(event: any) { // without type info
    const searchValue =  event.target.value;
    if(this.persons) {
      this.persons = this.persons.filter(person=>{
        person.firstName.toLowerCase() === searchValue;
      });
    }
  }

}
