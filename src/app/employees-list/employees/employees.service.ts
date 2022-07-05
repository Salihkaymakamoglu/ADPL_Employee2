import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
// import { Employee } from 'src/app/employees-list/employees/employees.model';

@Injectable({
  providedIn: "root",
})
export class EmployeeService {
  constructor(private firestore: AngularFirestore) {}

  getEmployee() {
    return new Promise((resolve, reject) => {
      this.firestore
        .collection("employee")
        .valueChanges()
        .subscribe((data) => {
          resolve(data);
        });
    });
  }
  getEmployeeById(id: string) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("employee", (ref) => ref.where("id", "==", id)).valueChanges()
        .subscribe((employee) =>{
          resolve(employee);
        }) ;
        
    });
  }


  createEmployee(employee: any) {
    return this.firestore.collection("employee").add(employee);
  }
  updateEmployee(employee: any) {
    this.firestore.doc("employee/" + employee.id).update(employee);
  }
  deleteEmployee(id: string) {
    this.firestore.doc("employee/" + id).delete();
  }
}
