import { Component } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.scss']
})
export class AdddataComponent {

  constructor(private db: AngularFirestore,private _router: Router){
  }

    // create user data
    sendUserDataToDb(ref: object): void {
      // console.log(ref);
      this.db.collection("dbUserDataList").add(ref);
      this._router.navigate(['/userdisp'])
    }

}
