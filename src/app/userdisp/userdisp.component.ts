import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

// export interface UserDetails {
//   userName: string,
//   userEmail: string,
//   userPass: string
// }

@Component({
  selector: 'app-userdisp',
  templateUrl: './userdisp.component.html',
  styleUrls: ['./userdisp.component.scss']
})


export class UserdispComponent {

  users: any = [];
  // updateUser: UserDetails = {
  //   userName: '',
  //   userEmail: '',
  //   userPass: ''
  // }
  usersWithId: object[] = [];
  columnsToDisplay: string[] = ['name', 'email', 'password'];

  //constructor and retrieve data
  constructor(private db: AngularFirestore) {
  this.db.collection("dbUserDataList").valueChanges().subscribe(res => {
      this.users = res;
    })
  }



  // Delete all users
  deleteUserDataAll() {
    this.db.collection('dbUserDataList').valueChanges({ idField: 'userDocId' }).subscribe(ref => {
      ref.forEach(res => {
        if (res.userDocId) {
          console.log(res.userDocId);
          this.db.collection('dbUserDataList').doc(res.userDocId).delete();
        }
      })
    })
  }

  // delete user
  deleteUserData(user: any) {
    this.db.collection('dbUserDataList', ref => ref.where('userEmail', '==', user.userEmail)).valueChanges({ idField: 'userDocId' }).subscribe(ref => {
      ref.forEach(res => {
        this.db.collection('dbUserDataList').doc(res.userDocId).delete();
      })
    })
  }

  //update user
  sendUserDataforUpdate(ref: any) {
    // this.updateUser = ref;
  }


}
