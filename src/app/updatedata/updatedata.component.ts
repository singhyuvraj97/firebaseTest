import { Component } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-updatedata',
  templateUrl: './updatedata.component.html',
  styleUrls: ['./updatedata.component.scss']
})
export class UpdatedataComponent {

  updateUserEmail: any = '';
  updateUser:any = {
    userName: '',
    userEmail: '',
    userPass: ''
  };

  constructor(private db: AngularFirestore,private route: ActivatedRoute,private _route: Router){

  }

  ngOnInit():void{
    this.updateUserEmail = this.route.snapshot.paramMap.get('userEmail');
    console.log(this.updateUserEmail);
    this.db.collection('dbUserDataList', ref => ref.where('userEmail', '==', this.updateUserEmail)).snapshotChanges().subscribe(
      ref => {
        ref.forEach(ref =>{
          this.updateUser = ref.payload.doc.data();
          console.log(this.updateUser);
        })
      })
  }

  updateUserData(ref: any) {
    debugger
    this.db.collection('dbUserDataList', ref => ref.where('userEmail', '==', this.updateUser.userEmail)).valueChanges({ idField: 'userDocId' }).subscribe(
      foundUser => {
        // console.log(foundUser);
        // foundUser.forEach(foundUser => {
        //   console.log(foundUser);
        //   this.db.collection('dbUserDataList').doc(foundUser.userDocId).set(ref);
        //   this._route.navigate(['/userdisp']);
        // })

        // console.log(foundUser[0].userDocId);
        this.db.collection('dbUserDataList').doc(foundUser[0]?.userDocId).set(ref);
        this._route.navigate(['/userdisp']);
      })
  }

}
