import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

interface profileData {
  firstName: string,
  lastName: string,
  street: string,
  city: string,
  state: string,
  zip: string
  aliases: string[]
}

@Component({
  selector: 'app-lease-form-component',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './lease-form-component.component.html',
  styleUrl: './lease-form-component.component.css'
})
export class LeaseFormComponentComponent {
aliases: string[] = []

  profData?: profileData

  form = new FormGroup({
    name: new FormGroup({
       firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
    }),
    address: new FormGroup({
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required)
    }),
      alias: new FormControl('')
  })

   addAlias() {
    const alias = this.form.get('alias')?.value
    if(alias) {
      this.aliases.unshift(alias)
    }
  }

  deleteAlias(index: number) {
    this.aliases.splice(index)
  }

  onSubmit(): void {
    if(this.form.valid) {
      this.profData = {
        firstName: this.form.get('name.firstName')?.value || '',
        lastName: this.form.get('name.lastName')?.value || '',
        street: this.form.get('address.street')?.value || '',
        city: this.form.get('address.city')?.value || '',
        state: this.form.get('address.state')?.value || '',
        zip: this.form.get('address.zip')?.value || '',
        aliases: this.aliases || [],
      };
   
      this.form.reset();
      this.form.markAsPristine();
      this.form.markAsUntouched();
      this.form.updateValueAndValidity();

      console.log(this.profData)
    }
  }
}
