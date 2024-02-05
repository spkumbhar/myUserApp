import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../shared/data-service.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  userList :any
  constructor(private _dataService:DataServiceService) { }

  ngOnInit(): void {
   const storedData = this._dataService.getData()
   console.log(storedData)
  //  this.userList.push(storedData)
    this.userList = storedData
  }

}
