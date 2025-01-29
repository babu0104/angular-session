import { Component } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { IUsers } from '../../interfaces/users';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [TableModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  public users: IUsers[] = [];
  constructor(private _commonService: CommonService){}

  ngOnInit() {
    this._commonService.getUsers().subscribe((data: IUsers[]) => {
      this.users = data;
    });
  }
}
