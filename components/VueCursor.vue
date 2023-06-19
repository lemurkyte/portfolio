<template>
  <div class="cursor" ref="cursor"></div>
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue';

export default {
  setup() {
    const cursor = ref(null);
    const cursorInner = ref(null);
    const links = ref([]);

    const onMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      cursor.value.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
      cursorInner.value.style.left = x + 'px';
      cursorInner.value.style.top = y + 'px';
    };

    const onMouseDown = () => {
      cursor.value.classList.add('click');
      cursorInner.value.classList.add('cursorinnerhover');
    };

    const onMouseUp = () => {
      cursor.value.classList.remove('click');
      cursorInner.value.classList.remove('cursorinnerhover');
    };

    const addHoverClass = (el) => {
      el.addEventListener('mouseover', () => {
        cursor.value.classList.add('hover');
      });
      el.addEventListener('mouseleave', () => {
        cursor.value.classList.remove('hover');
      });
    };

    onMounted(() => {
      cursor.value = document.querySelector('.cursor');
      cursorInner.value = document.querySelector('.cursor2');
      links.value = document.querySelectorAll('a');
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
      links.value.forEach((link) => addHoverClass(link));
    });

    onUnmounted(() => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    });

    return {
      cursor,
      cursorInner,
      links,
    };
  },
};
</script>

<style scoped>
.cursor {
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-color: #D1C0A8;
  transition: all 200ms ease-out;
  position: fixed;
  pointer-events: none;
  left: 0;
  top: 0;
  transform: translate(calc(-50% + 15px), -50%);
}

.hover {
  background-color: red;
  opacity: 0.5;
}

.cursorinnerhover {
  width: 50px;
  height: 50px;
  opacity: 0.5;
}
</style>
