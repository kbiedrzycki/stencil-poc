import Controller from '@ember/controller';

export default Controller.extend({
  min: 0,
  max: 50,
  start: 20,

  showHello: false,

  actions: {
    handleClick() {
      this.toggleProperty('showHello');
    },
  },
});
