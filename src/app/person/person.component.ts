import { Component, OnInit } from '@angular/core';
import { PersonServiceService } from './person-service.service';
import { Observable } from 'rxjs';
import { Person } from './person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  public persons$: Observable<Person[]>;

  constructor(private personService: PersonServiceService) { }

  ngOnInit() {
    this.persons$ = this.personService.getPersonList();
  
  }

}
