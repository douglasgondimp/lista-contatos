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
  message = {
    text: '',
    class: ''
  }

  validateEntrance(): boolean {
    if (!this.entrance) return false;
    
    let test: boolean = true;
    const map: {[key:string]: string} = {
      ')': '(',
      '}': '{',
      ']': '['
    }
    const arr: string[] = [];

    for (let c of this.entrance) {
      if (map[c]) {
        const el = arr.length > 0 ? arr.pop() : '#';
        console.log(el, map[c]);

        if (map[c] != el) {
          this.message.text = 'Entrada inválida!';
          this.message.class = 'text-red-600';

          return false;
        }
      } else {
        arr.push(c);
      }
    }

    if (arr.length === 0) {
      this.message.text = 'Entrada válida!';
      this.message.class = 'text-green-600';

      return true;
    } 

    this.message.text = 'Entrada inválida!';
    this.message.class = 'text-red-600';

    return false;
  }
}
