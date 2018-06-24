import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnChanges {
  @Input() messages: string[];
  @Input() messageDeepIndex: number;

  expanded = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.messages.currentValue !== changes.messages.previousValue) {
      this.expanded = false;
    }
  }
}
