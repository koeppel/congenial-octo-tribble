import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

	value: string = "";

	isValidated: boolean = false;

	isValid: boolean = false;

	validate(event: Event): void {
		if (!event.target) return;

		const eventTarget = event.target as HTMLInputElement;

		// Check if HTML5 input is valid and value is not empty
		this.isValid = eventTarget.validity.valid && !!eventTarget.value;

		if (this.isValid) this.value = eventTarget.value;
	}

}
