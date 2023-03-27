<script type="text/javascript" setup>
import { computed } from "vue";
import { useStore } from "vuex";
import Modal from "./modal_component.vue";
const store = useStore();
const modalVisible = computed(() => {
  return store.state.modalVisible;
});
function locate(url) {
  window.location.href = url;
}
</script>

<template>
  <Modal v-if="modalVisible">
    <ul>
      <li v-on:click="locate('tg://resolve?domain=fhnb16')">
        <span>Позвонить</span
        ><img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z'/%3E%3C/svg%3E"
        />
      </li>
      <li v-on:click="locate('tg://resolve?domain=fhnb16')">
        <span>Написать в Telegram</span
        ><img
          src="data:image/svg+xml,%0A%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M24 12C24 18.627 18.627 24 12 24C5.373 24 0 18.627 0 12C0 5.373 5.373 0 12 0C18.627 0 24 5.373 24 12ZM12.43 8.859C11.263 9.344 8.93 10.349 5.432 11.873C4.864 12.099 4.566 12.32 4.539 12.536C4.493 12.902 4.951 13.046 5.573 13.241C5.658 13.268 5.746 13.295 5.836 13.325C6.449 13.524 7.273 13.757 7.701 13.766C8.09 13.774 8.524 13.614 9.003 13.286C12.271 11.079 13.958 9.964 14.064 9.94C14.139 9.923 14.243 9.901 14.313 9.964C14.383 10.026 14.376 10.144 14.369 10.176C14.323 10.369 12.529 12.038 11.599 12.902C11.309 13.171 11.104 13.362 11.062 13.406C10.968 13.503 10.872 13.596 10.78 13.685C10.21 14.233 9.784 14.645 10.804 15.317C11.294 15.64 11.686 15.907 12.077 16.173C12.504 16.464 12.93 16.754 13.482 17.116C13.622 17.208 13.756 17.303 13.887 17.396C14.384 17.751 14.831 18.069 15.383 18.019C15.703 17.989 16.035 17.688 16.203 16.789C16.6 14.663 17.382 10.059 17.563 8.161C17.574 8.00341 17.5673 7.84509 17.543 7.689C17.5285 7.56293 17.4671 7.44693 17.371 7.364C17.228 7.247 17.006 7.222 16.906 7.224C16.455 7.232 15.763 7.473 12.43 8.859Z' fill='%230088CC'/%3E%3C/svg%3E%0A"
        />
      </li>
      <li v-on:click="locate('tg://resolve?domain=fhnb16')">
        <span>Написать в Whatsapp</span
        ><img
          src="data:image/svg+xml,%0A%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22.2051 5.54986C18.615 -0.000183464 11.2852 -1.6502 5.60089 1.79983C0.0661373 5.24986 -1.72892 12.7499 1.86119 18.3L2.16037 18.75L0.963664 23.25L5.4513 22.05L5.90006 22.35C7.8447 23.4 9.93893 24 12.0332 24C14.277 24 16.5208 23.4 18.4654 22.2C24.0002 18.6 25.6456 11.2499 22.2051 5.54986ZM19.0638 17.0999C18.4654 18 17.7175 18.6 16.6704 18.75C16.072 18.75 15.3241 19.05 12.3323 17.85C9.78934 16.6499 7.69511 14.6999 6.19924 12.4499C5.30171 11.3999 4.85295 10.0499 4.70336 8.69988C4.70336 7.49987 5.15212 6.44987 5.90006 5.69986C6.19924 5.39986 6.49841 5.24986 6.79759 5.24986H7.54553C7.8447 5.24986 8.14388 5.24986 8.29347 5.84986C8.59264 6.59987 9.34058 8.39988 9.34058 8.54988C9.49017 8.69988 9.49017 8.99989 9.34058 9.14989C9.49017 9.44989 9.34058 9.74989 9.19099 9.89989C9.04141 10.0499 8.89182 10.3499 8.74223 10.4999C8.44305 10.6499 8.29347 10.9499 8.44305 11.2499C9.0414 12.1499 9.78934 13.0499 10.5373 13.7999C11.4348 14.5499 12.3323 15.1499 13.3794 15.5999C13.6786 15.7499 13.9778 15.7499 14.1274 15.4499C14.277 15.1499 15.0249 14.3999 15.3241 14.0999C15.6233 13.7999 15.7729 13.7999 16.072 13.9499L18.4654 15.1499C18.7646 15.2999 19.0638 15.4499 19.2134 15.5999C19.363 16.0499 19.363 16.6499 19.0638 17.0999Z' fill='%2343D854'/%3E%3C/svg%3E%0A"
        />
      </li>
    </ul>
  </Modal>
</template>

<style scoped type="text/css">
/*////////////////////
    modal contact
////////////////////*/

.modal-contact .modal-body ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: var(--color-white);
  border-radius: 14px;
  margin: 20px;
  width: calc(100% - 40px);
  margin-bottom: 32px;
}

.modal-contact .modal-body ul > li {
  height: 48px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  background: var(--color-white);
  border-radius: 0;
  border-bottom: 1px solid var(--color-gray-dark);
}

.modal-contact .modal-body ul > li,
.modal-contact .modal-body ul > li * {
  cursor: pointer;
}

.modal-contact .modal-body ul > li * {
  pointer-events: none;
}

.modal-contact .modal-body ul > li:first-child {
  border-radius: 13px 13px 0 0;
}

.modal-contact .modal-body ul > li:last-child {
  border-radius: 0 0 13px 13px;
  border-bottom: 1px solid transparent;
}

.modal-contact .modal-body ul > li img {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.modal-contact .modal-body ul > li span {
  font-family: var(--text-font-rich), sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 129%;
}

.modal-contact .modal-body ul > li:hover {
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
}

.modal-contact .modal-body ul > li:active {
  box-shadow: inset 0 2px 16px rgba(0, 0, 0, 0.1);
}
</style>
