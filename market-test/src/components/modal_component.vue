<script type="text/javascript" setup>
import { defineProps } from "vue";
import { useStore } from "vuex";
const store = useStore();
const props = defineProps({
  headerText: String,
  visibility: Boolean,
});
</script>

<template>
  <div class="modal" v-bind:class="visibility ? 'active' : ''">
    <div class="modal-header">
      <h2>{{ props.headerText }}</h2>
      <div
        class="modal-close"
        v-on:click="store.dispatch('setModalVisibility', 0)"
      >
        Close
      </div>
    </div>
    <div class="modal-body">
      <slot />
    </div>
  </div>
</template>

<style scoped type="text/css">
/*////////////////////
        modal
////////////////////*/

.modal {
  position: fixed;
  left: 0;
  right: 0;
  bottom: -100vh;
  min-height: 120px;
  max-height: 90vh;
  overflow: auto;
  background-color: var(--color-gray-light);
  backdrop-filter: blur(40px);
  -moz-backdrop-filter: blur(40px);
  border-radius: 16px 16px 0px 0px;
  z-index: 8;
  transition: opacity 512ms cubic-bezier(0.25, 0.8, 0.25, 1),
    bottom 256ms cubic-bezier(0.25, 0.8, 0.25, 1);
  opacity: 0;
}

.modal.active {
  opacity: 1;
  bottom: 0;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal .modal-header > h2 {
  margin: 24px;
  margin-bottom: 6px;
  margin-top: 24px;
}

.modal-close {
  color: transparent;
  font-size: 1px;
  cursor: pointer;
  position: relative;
  width: 24px;
  height: 24px;
  margin: 24px;
  background-position: center;
  margin-top: 24px;
  border-radius: 50%;
  background-image: url("data:image/svg+xml,%0A%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 28C22.5647 28 28 22.5529 28 16C28 9.43529 22.5529 4 15.9882 4C9.43529 4 4 9.43529 4 16C4 22.5529 9.44706 28 16 28ZM12.0471 20.9412C11.5059 20.9412 11.0824 20.5059 11.0824 19.9647C11.0824 19.7059 11.1765 19.4588 11.3647 19.2824L14.6235 16.0118L11.3647 12.7529C11.1765 12.5647 11.0824 12.3294 11.0824 12.0706C11.0824 11.5176 11.5059 11.1059 12.0471 11.1059C12.3176 11.1059 12.5294 11.2 12.7176 11.3765L16 14.6471L19.3059 11.3647C19.5059 11.1647 19.7176 11.0824 19.9765 11.0824C20.5176 11.0824 20.9529 11.5059 20.9529 12.0471C20.9529 12.3176 20.8706 12.5294 20.6588 12.7412L17.3882 16.0118L20.6471 19.2706C20.8471 19.4471 20.9412 19.6941 20.9412 19.9647C20.9412 20.5059 20.5059 20.9412 19.9529 20.9412C19.6824 20.9412 19.4353 20.8471 19.2588 20.6588L16 17.3882L12.7529 20.6588C12.5647 20.8471 12.3176 20.9412 12.0471 20.9412Z' fill='%23090909' fill-opacity='0.3'/%3E%3C/svg%3E%0A");
}

.modal .modal-header .modal-close {
  margin-bottom: 6px;
}

.modal-close:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.modal-close:active {
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.3);
}

/*////////////////////
  media screen width
////////////////////*/

@media (min-width: 1200px) {
  .modal {
    left: 20%;
    right: 20%;
    max-width: 420px;
    margin: 0 auto;
  }
}

/*////////////////////
      animation
////////////////////*/

@keyframes toBlur {
  from {
    opacity: 0;
    bottom: -100vh;
  }

  to {
    opacity: 1;
    bottom: 0;
  }
}

@keyframes fromBlur {
  from {
    opacity: 1;
    bottom: -100vh;
  }

  to {
    opacity: 0;
    bottom: 0;
  }
}
</style>
