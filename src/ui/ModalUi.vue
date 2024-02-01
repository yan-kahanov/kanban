<script setup>
import { CardUi, ButtonUi } from '.'

defineProps({
  isOpened: { type: Boolean, default: false }
})
defineEmits(['closeModal'])
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-outer">
      <div
        v-show="isOpened"
        class="fixed inset-x-0 inset-y-0 bg-black/50 transition-all z-10"
        @click="() => $emit('closeModal')"
      >
        <card-ui
          @click.stop
          class="fixed start-1/2 inset-y-1/2 w-full !p-11 -translate-y-2/4 -translate-x-2/4 h-max max-h-lvh min-h-52 max-w-md overflow-hidden"
        >
          <button-ui
            @click="() => $emit('closeModal')"
            class="absolute top-1 right-1 w-10 h-10 text-white"
            color="gray"
            >✕</button-ui
          >
          <slot></slot>
        </card-ui>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}

.modal-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-inner-leave-to {
  transform: scale(0.8);
}
</style>
