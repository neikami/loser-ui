import { defineComponent } from 'vue';

export default defineComponent({
  name: 'l-button',
  emits: ['click'],
  setup(props, ctx) {
    const onClick = (e: MouseEvent) => {
      ctx.emit('click', e);
    };
    return () => {
      return (
        <button onClick={onClick}>
          <span class="button-content">{ctx.slots.default?.()}</span>
        </button>
      );
    };
  },
});