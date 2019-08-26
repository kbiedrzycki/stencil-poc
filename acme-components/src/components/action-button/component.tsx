import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'action-button',
  styleUrl: 'styles.scss',
  shadow: true,
})
export class ActionButton {
  @Prop({ reflectToAttr: true }) disabled: boolean;

  render() {
    return (
      <button type="button" disabled={this.disabled}>
        <slot />
      </button>
    );
  }
}
