import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  isSubmitting: boolean = false; // Estado para mostrar el indicador
  progress: number = 0; // Porcentaje de la barra de progreso

  // Función que se ejecuta al hacer clic en "Enviar"
  onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true; // Activar indicador
    this.progress = 0; // Reiniciar la barra de progreso

    const emailInput = (document.getElementById('email') as HTMLInputElement)
      .value;
    const descriptionInput = (document.getElementById(
      'description'
    ) as HTMLTextAreaElement).value;

    if (!emailInput || !descriptionInput) {
      alert('Por favor, completa todos los campos antes de enviar.');
      this.isSubmitting = false; // Detener indicador si hay error
      return;
    }

    const contactData = {
      email: emailInput,
      description: descriptionInput,
    };

    // Simular un envío progresivo con intervalos
    const interval = setInterval(() => {
      this.progress += 15; // Incrementar la barra en un 10%
      if (this.progress >= 100) {
        clearInterval(interval); // Detener el intervalo cuando llega al 100%
        alert('¡Tu mensaje ha sido enviado exitosamente!');
        this.isSubmitting = false; // Finalizar el indicador
        this.progress = 0; // Reiniciar la barra
      }
    }, 200); // Incrementar cada 200 ms
  }
}