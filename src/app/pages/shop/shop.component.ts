import { Component, inject } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule],
  template: ``,
})
export class ShopComponent {
  telegram = inject(TelegramService);
  constructor() {
    this.telegram.MainButton.show();
  }
}
