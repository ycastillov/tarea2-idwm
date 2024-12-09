import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormComponent } from "../../components/form/form.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HttpClientModule,CommonModule, FormComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  
}

