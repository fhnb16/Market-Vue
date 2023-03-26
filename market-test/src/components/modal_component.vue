<script type="text/javascript" setup>
import { useStore } from "vuex";
const store = useStore();
</script>

<template>
  <div class="modal-contact">
    <div class="modal-header">
      <h2>Пообщаться</h2>
      <div
        class="modal-close"
        v-on:click="store.dispatch('setModalVisibility', false)"
      >
        Close
      </div>
    </div>
    <div class="modal-body">
      <slot />
    </div>
  </div>
</template>

<script type="text/javascript"></script>

<style scoped type="text/css">
/*////////////////////
    modal contact
////////////////////*/

.modal-contact {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--color-gray-light);
  backdrop-filter: blur(40px);
  -moz-backdrop-filter: blur(40px);
  border-radius: 16px 16px 0px 0px;
  z-index: 8;
}

/*////////////////////
  media screen width
////////////////////*/

@media (min-width: 1200px) {
  .modal-contact {
    left: 20%;
    right: 20%;
    max-width: 420px;
    margin: 0 auto;
  }
}
</style>
