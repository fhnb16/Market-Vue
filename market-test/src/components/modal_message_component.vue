<script type="text/javascript" setup>
import { defineProps } from "vue";
import Modal from "./modal_component.vue";
const props = defineProps({
  messageHeader: String,
});
</script>

<template>
  <Modal :headerText="props.messageHeader">
    <p><slot /></p>
  </Modal>
</template>

<style scoped type="text/css">
/*////////////////////
    modal custom
////////////////////*/

p {
  font-family: var(--text-font-rich), sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  margin: 4px 8px;
  padding: 2px 18px;
}
</style>
