import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'hello-world',
  styleUrl: 'styles.scss',
  shadow: true,
})
export class HelloWorld {
  @Prop() first: string;
  @Prop() middle: string;
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div class="hello">Hello, World! I'm {this.getText()}</div>;
  }
}
