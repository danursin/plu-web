import { Component, OnInit } from '@angular/core';
import PLUData from "../assets/plu.json";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  pluData: PLUEntry[] = PLUData;
  searchItems: PLUEntry[] = [];
  form: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.form = this.fb.group({
      value: ""
    });

    this.form.valueChanges.subscribe(formValue => {
      const value = (formValue.value || "").toLowerCase();
      if(!value){
        this.searchItems = [];
        return;
      }
      this.searchItems = this.pluData.filter(item => {
        return (
          (item.PLU.toString() === formValue.value) || 
          ((item.Category || "").toLowerCase().indexOf(value) !== -1) ||
          ((item.Commodity || "").toLowerCase().indexOf(value) !== -1)
        );
      });
    })
  }
  
}
