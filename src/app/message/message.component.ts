import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Filter } from '../interfaces';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnChanges {
  @Input() messages: string[];
  @Input() messageDeepIndex: number;
  @Input() filter: Filter;

  handledMessage;

  expanded = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.messages && changes.messages.currentValue !== changes.messages.previousValue) {
      this.expanded = false;
      if (this.filter.text) {
        this.expanded = true;
      }

      if (!changes.messages.currentValue || !changes.messages.currentValue[this.messageDeepIndex]) {
        this.handledMessage = [];
        return;
      }

      const message = changes.messages.currentValue[this.messageDeepIndex].message;
      const rows = message.split('\n');

      this.handledMessage = rows.map((row) => {
        let rowArr = [{class: '', text: row}];

        if (this.filter.text) {
          const spans = row.toLowerCase().split(this.filter.text.toLowerCase());

          if (spans.length !== 1) {
            rowArr = [];
            let origRow = row;

            spans.forEach((span, i) => {
              let text = origRow.substr(0, span.length);
              rowArr.push({class: '', text});
              origRow = origRow.replace(text, '');

              if (i !== spans.length) {
                text = origRow.substr(0, this.filter.text.length);
                origRow = origRow.replace(text, '');
                rowArr.push({class: 'hl', text});
              }
            });
          }
        }

        return rowArr;
      });
    }
  }
}
