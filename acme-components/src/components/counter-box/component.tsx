import { Component, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'counter-box',
  styleUrl: 'styles.scss',
  shadow: true,
})
export class CounterBox {
  @Prop() start: number;
  @Prop() min: number = 0;
  @Prop() max: number = Number.MAX_SAFE_INTEGER;
  @State() value: number = 0;

  componentDidLoad() {
    if (this.start) {
      this.value = this.start;
    }
  }

  decreaseCounter = () => {
    this.value > this.min && this.value--;
  };

  increaseCounter = () => {
    this.value < this.max && this.value++;
  };

  render() {
    return (
      <div class="counter-box">
        <action-button onClick={this.decreaseCounter} disabled={this.value === this.min}>
          -
        </action-button>

        <span class="value">{this.value}</span>

        <action-button onClick={this.increaseCounter} disabled={this.value === this.max}>
          +
        </action-button>
      </div>
    );
  }
}
