import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-validate',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-validate.component.html',
  styleUrl: './input-validate.component.scss'
})
export class InputValidateComponent {
  entrance!: string;
  map: any = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
  message: any = {
    'text': '',
    'class': ''
  }

  validateEntrance() {
    if (!this.entrance) return;
    
    const arr = [];

    for (let c of this.entrance) {
      if (this.map[c]) {
        const el = arr.length > 0 ? arr.pop() : '#';

        if (this.map[c] !== el) {
          this.message.text = 'Entrada inválida!';
          this.message.class = 'text-red-600'
        }
      } else {
        arr.push(c);
      }
    }

    if (arr.length === 0) {
      this.message.text = 'Entrada válida!';
      this.message.class = 'text-green-600';
    } else {
      this.message.text = 'Entrada inválida!';
      this.message.class = 'text-red-600';
    }

    console.log("passou", arr);
  }
}
