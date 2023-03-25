<script type="text/javascript" setup>
import { onBeforeMount, onMounted, computed } from "vue";
import { useStore } from "vuex";

import StoriesWrapper from "../components/stories_wrapper.vue";
import Button from "../components/button_component.vue";
import Section from "../components/section_component.vue";

const store = useStore();
/*const getContent = computed(() => {
  return store.getters.getContent;
});
const getStories = computed(() => {
  return store.getters.getStories;
});*/
const content = computed(() => {
  return store.state.content;
});
const stories = computed(() => {
  return store.state.stories;
});
onBeforeMount(() => {
  store.dispatch("fetchContent");
});
onMounted(() => {
  console.clear();
});
document.addEventListener(
  "touchmove",
  function (event) {
    if (event.scale !== 1) {
      event.preventDefault();
    }
  },
  false
);
</script>

<template>
  <div class="app-wrapper" id="app-wrapper">
    <h1 class="logo">
      {{ content["appTitle"] }}
    </h1>
    <StoriesWrapper v-bind:stories="stories" />
    <Button class="button-arrow center">
      {{ content.mainPageButton["buttonText"] }}
    </Button>
    <div class="sections">
      <Section
        v-for="(section, index) in content.sections"
        :key="'section-' + index"
        v-bind:section="section"
        v-bind:index="index"
      />
    </div>
    <span class="break"></span>
    <nav class="fixed-bottom-menu">
      <div class="menu-item active">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.5062 10.274L13.0062 3.45836C12.868 3.33187 12.6874 3.26172 12.5 3.26172C12.3126 3.26172 12.132 3.33187 11.9937 3.45836L4.49375 10.274C4.41828 10.3453 4.35783 10.4309 4.31597 10.5259C4.27411 10.6209 4.25168 10.7233 4.25 10.8271V19.499C4.25 19.6979 4.32902 19.8887 4.46967 20.0293C4.61032 20.17 4.80109 20.249 5 20.249H20C20.1989 20.249 20.3897 20.17 20.5303 20.0293C20.671 19.8887 20.75 19.6979 20.75 19.499V10.8271C20.7483 10.7233 20.7259 10.6209 20.684 10.5259C20.6422 10.4309 20.5817 10.3453 20.5062 10.274Z"
            fill="white"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>Главная</span>
      </div>
      <div class="menu-item">
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0116 16v288a16 16 0 01-16 16c-128 0-177.45 25.81-208 64-30.37-38-80-64-208-64-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0116-16c131.57.59 192 32.84 208 96zM256 160v288"
            fill="white"
            stroke="currentColor"
            stroke-width="42"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>Каталог</span>
      </div>
      <div class="menu-item">
        <svg viewBox="0 0 24 22" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.9987 0.00195312C10.4968 0.00195312 9.02827 0.445518 7.77749 1.27699C6.57953 2.07335 5.63237 3.19158 5.04377 4.50133C4.2024 4.90806 3.44698 5.47394 2.81961 6.16835C2.14521 6.91481 1.63354 7.79345 1.31714 8.74839C1.00074 9.70333 0.886537 10.7137 0.981796 11.7151C1.07705 12.7166 1.37969 13.6873 1.87045 14.5655C2.36121 15.4436 3.02936 16.21 3.8324 16.816C4.63543 17.4219 5.55578 17.8541 6.53491 18.085C7.51403 18.3159 8.5305 18.3406 9.51967 18.1574C9.94016 18.0795 10.3518 17.9648 10.75 17.8151V20.75C10.75 21.4404 11.3096 22 12 22C12.6904 22 13.25 21.4404 13.25 20.75V17.8161C13.6474 17.9653 14.0582 18.0796 14.4777 18.1574C15.4669 18.3406 16.4834 18.3159 17.4625 18.085C18.4416 17.8541 19.362 17.4219 20.165 16.816C20.968 16.21 21.6362 15.4436 22.127 14.5655C22.6177 13.6873 22.9204 12.7166 23.0156 11.7151C23.1109 10.7137 22.9967 9.70333 22.6803 8.74839C22.3639 7.79345 21.8522 6.91481 21.1778 6.16835C20.5504 5.47394 19.795 4.90806 18.9536 4.50133C18.365 3.19158 17.4179 2.07336 16.2199 1.27699C14.9691 0.445518 13.5006 0.00195312 11.9987 0.00195312ZM13.25 15.0373C13.7631 15.3634 14.3344 15.5883 14.9331 15.6992C15.5811 15.8192 16.2471 15.8031 16.8886 15.6518C17.5301 15.5005 18.1331 15.2173 18.6592 14.8203C19.1853 14.4233 19.6231 13.9212 19.9446 13.3459C20.2662 12.7705 20.4644 12.1345 20.5268 11.4784C20.5893 10.8223 20.5144 10.1603 20.3071 9.53468C20.0998 8.90903 19.7646 8.33337 19.3228 7.84431C18.8809 7.35525 18.3421 6.96349 17.7407 6.69396C17.7237 6.68637 17.707 6.67841 17.6904 6.67007C17.2649 6.45618 16.9269 6.10124 16.734 5.66585L16.7243 5.64332C16.3335 4.7125 15.6766 3.91781 14.8359 3.35895C13.9952 2.80009 13.0082 2.50195 11.9987 2.50195C10.9892 2.50195 10.0022 2.80009 9.16149 3.35895C8.3208 3.91781 7.66388 4.7125 7.27315 5.64332L7.26343 5.66585C7.07053 6.10124 6.7325 6.45618 6.30704 6.67007C6.29045 6.67841 6.27369 6.68637 6.25675 6.69396C5.65529 6.96349 5.11649 7.35525 4.67465 7.84431C4.2328 8.33337 3.89757 8.90903 3.69027 9.53468C3.48297 10.1603 3.40815 10.8223 3.47056 11.4784C3.53297 12.1345 3.73125 12.7705 4.05278 13.3459C4.37432 13.9212 4.81207 14.4233 5.3382 14.8203C5.86432 15.2173 6.46731 15.5005 7.10881 15.6518C7.75031 15.8031 8.41627 15.8192 9.06434 15.6992C9.66404 15.5881 10.2363 15.3627 10.75 15.0356V14.0225L6.94098 12.118C6.32351 11.8093 6.07323 11.0585 6.38197 10.441C6.6907 9.82351 7.44154 9.57323 8.05902 9.88197L10.75 11.2275V11.0271C10.7496 11.0096 10.7496 10.9922 10.75 10.9749V7.25C10.75 6.55964 11.3096 6 12 6C12.6904 6 13.25 6.55964 13.25 7.25V8.97746L15.941 7.63197C16.5585 7.32323 17.3093 7.57351 17.618 8.19098C17.9268 8.80846 17.6765 9.5593 17.059 9.86803L13.25 11.7725V13.2248C13.2504 13.2422 13.2504 13.2597 13.25 13.2771V15.0373Z"
            fill="currentColor"
            stroke="white"
            stroke-width="0.1"
            clip-rule="evenodd"
            fill-rule="evenodd"
          />
        </svg>
        <span>Landscape</span>
      </div>
      <div class="menu-item">
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
        >
          <path
            d="M4.25 12C4.25 7.71979 7.71979 4.25 12 4.25C16.2802 4.25 19.75 7.71979 19.75 12C19.75 16.2802 16.2802 19.75 12 19.75C7.71979 19.75 4.25 16.2802 4.25 12ZM12 1.75C6.33908 1.75 1.75 6.33908 1.75 12C1.75 17.6609 6.33908 22.25 12 22.25C17.6609 22.25 22.25 17.6609 22.25 12C22.25 6.33908 17.6609 1.75 12 1.75ZM8.375 12C8.375 9.99797 9.99797 8.375 12 8.375C14.002 8.375 15.625 9.99797 15.625 12C15.625 14.002 14.002 15.625 12 15.625C9.99797 15.625 8.375 14.002 8.375 12ZM12 5.875C8.61726 5.875 5.875 8.61726 5.875 12C5.875 15.3827 8.61726 18.125 12 18.125C15.3827 18.125 18.125 15.3827 18.125 12C18.125 8.61726 15.3827 5.875 12 5.875Z"
            fill="currentColor"
            stroke="white"
            stroke-width="0.1"
            clip-rule="evenodd"
            fill-rule="evenodd"
            shape-rendering="geometricPrecision"
          />
        </svg>
        <span>Стройка</span>
      </div>
      <div class="menu-item">
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
        >
          <path
            d="M7.25 9C7.25 6.37665 9.37664 4.25 12 4.25C14.6233 4.25 16.75 6.37665 16.75 9C16.75 11.6234 14.6233 13.75 12 13.75C9.37664 13.75 7.25 11.6234 7.25 9ZM16.5321 14.6592C18.1891 13.3305 19.25 11.2892 19.25 9C19.25 4.99594 16.0041 1.75 12 1.75C7.99593 1.75 4.75 4.99594 4.75 9C4.75 11.2892 5.81093 13.3305 7.46792 14.6592C7.00787 14.8515 6.5591 15.0735 6.12453 15.3245C4.33819 16.3559 2.85486 17.8395 1.82366 19.6259C1.47853 20.2238 1.68345 20.9883 2.28134 21.3334C2.87924 21.6785 3.64371 21.4736 3.98883 20.8757C4.80063 19.4694 5.96836 18.3015 7.37463 17.4895C8.78089 16.6775 10.3761 16.25 12 16.25C13.6239 16.25 15.2191 16.6775 16.6254 17.4895C18.0316 18.3015 19.1994 19.4694 20.0112 20.8757C20.3563 21.4736 21.1207 21.6785 21.7186 21.3334C22.3165 20.9883 22.5215 20.2238 22.1763 19.6259C21.1451 17.8395 19.6618 16.3559 17.8755 15.3245C17.4409 15.0735 16.9921 14.8515 16.5321 14.6592Z"
            fill="currentColor"
            stroke="white"
            stroke-width="0.1"
            clip-rule="evenodd"
            fill-rule="evenodd"
            shape-rendering="geometricPrecision"
          />
        </svg>
        <span>Меню</span>
      </div>
    </nav>
    <div class="modal-contact" v-if="false">
      <div class="modal-header">
        <h2>Пообщаться</h2>
        <div class="modal-close">Close</div>
      </div>
      <div class="modal-body">
        <ul>
          <li>
            <span>Позвонить</span
            ><img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z'/%3E%3C/svg%3E"
            />
          </li>
          <li>
            <span>Написать в Telegram</span
            ><img
              src="data:image/svg+xml,%0A%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M24 12C24 18.627 18.627 24 12 24C5.373 24 0 18.627 0 12C0 5.373 5.373 0 12 0C18.627 0 24 5.373 24 12ZM12.43 8.859C11.263 9.344 8.93 10.349 5.432 11.873C4.864 12.099 4.566 12.32 4.539 12.536C4.493 12.902 4.951 13.046 5.573 13.241C5.658 13.268 5.746 13.295 5.836 13.325C6.449 13.524 7.273 13.757 7.701 13.766C8.09 13.774 8.524 13.614 9.003 13.286C12.271 11.079 13.958 9.964 14.064 9.94C14.139 9.923 14.243 9.901 14.313 9.964C14.383 10.026 14.376 10.144 14.369 10.176C14.323 10.369 12.529 12.038 11.599 12.902C11.309 13.171 11.104 13.362 11.062 13.406C10.968 13.503 10.872 13.596 10.78 13.685C10.21 14.233 9.784 14.645 10.804 15.317C11.294 15.64 11.686 15.907 12.077 16.173C12.504 16.464 12.93 16.754 13.482 17.116C13.622 17.208 13.756 17.303 13.887 17.396C14.384 17.751 14.831 18.069 15.383 18.019C15.703 17.989 16.035 17.688 16.203 16.789C16.6 14.663 17.382 10.059 17.563 8.161C17.574 8.00341 17.5673 7.84509 17.543 7.689C17.5285 7.56293 17.4671 7.44693 17.371 7.364C17.228 7.247 17.006 7.222 16.906 7.224C16.455 7.232 15.763 7.473 12.43 8.859Z' fill='%230088CC'/%3E%3C/svg%3E%0A"
            />
          </li>
          <li>
            <span>Написать в Whatsapp</span
            ><img
              src="data:image/svg+xml,%0A%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22.2051 5.54986C18.615 -0.000183464 11.2852 -1.6502 5.60089 1.79983C0.0661373 5.24986 -1.72892 12.7499 1.86119 18.3L2.16037 18.75L0.963664 23.25L5.4513 22.05L5.90006 22.35C7.8447 23.4 9.93893 24 12.0332 24C14.277 24 16.5208 23.4 18.4654 22.2C24.0002 18.6 25.6456 11.2499 22.2051 5.54986ZM19.0638 17.0999C18.4654 18 17.7175 18.6 16.6704 18.75C16.072 18.75 15.3241 19.05 12.3323 17.85C9.78934 16.6499 7.69511 14.6999 6.19924 12.4499C5.30171 11.3999 4.85295 10.0499 4.70336 8.69988C4.70336 7.49987 5.15212 6.44987 5.90006 5.69986C6.19924 5.39986 6.49841 5.24986 6.79759 5.24986H7.54553C7.8447 5.24986 8.14388 5.24986 8.29347 5.84986C8.59264 6.59987 9.34058 8.39988 9.34058 8.54988C9.49017 8.69988 9.49017 8.99989 9.34058 9.14989C9.49017 9.44989 9.34058 9.74989 9.19099 9.89989C9.04141 10.0499 8.89182 10.3499 8.74223 10.4999C8.44305 10.6499 8.29347 10.9499 8.44305 11.2499C9.0414 12.1499 9.78934 13.0499 10.5373 13.7999C11.4348 14.5499 12.3323 15.1499 13.3794 15.5999C13.6786 15.7499 13.9778 15.7499 14.1274 15.4499C14.277 15.1499 15.0249 14.3999 15.3241 14.0999C15.6233 13.7999 15.7729 13.7999 16.072 13.9499L18.4654 15.1499C18.7646 15.2999 19.0638 15.4499 19.2134 15.5999C19.363 16.0499 19.363 16.6499 19.0638 17.0999Z' fill='%2343D854'/%3E%3C/svg%3E%0A"
            />
          </li>
        </ul>
      </div>
    </div>
    <div class="background-blur"></div>
  </div>
</template>

<style type="text/css">
/*////////////////////
        basics
////////////////////*/

.app-wrapper {
  padding: env(safe-area-inset-top) env(safe-area-inset-right)
    env(safe-area-inset-bottom) env(safe-area-inset-left);
}

svg {
  pointer-events: none;
}

.background-blur {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(9, 9, 9, 0.6);
  backdrop-filter: blur(1px);
  -moz-backdrop-filter: blur(1px);
  z-index: 6;
}

body.overflow-disable {
  overflow: hidden;
}

h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 117%;
  font-family: var(--text-font-rich), sans-serif;
  color: var(--color-black);
  margin-top: 24px;
  margin-bottom: 28px;
  margin-left: 20px;
}

h2 {
  display: inline-flex;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 120%;
  font-family: var(--text-font-rich), sans-serif;
  color: var(--color-black);
  margin-top: 26px;
  margin-bottom: 28px;
}

span.break {
  display: inline-block;
}

span.break:before {
  content: "";
  width: 100%;
  height: 64px;
  display: inline-block;
  background: red;
}

/*////////////////////
        sections
////////////////////*/

.sections {
  display: flex;
  flex-direction: column;
}

/*////////////////////
        nav
////////////////////*/

nav.fixed-bottom-menu {
  background-color: var(--color-gray-light);
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.08), 0px 2px 24px rgba(0, 0, 0, 0.08);
  border-radius: 18px 18px 0px 0px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 6px;
  height: 56px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-items: stretch;
  z-index: 6;
}

nav.fixed-bottom-menu > .menu-item {
  font-family: var(--text-font-rich), sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 8px;
  line-height: 150%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 20%;
}

nav.fixed-bottom-menu > .menu-item,
nav.fixed-bottom-menu > .menu-item * {
  cursor: pointer;
  transition: var(--transition-default);
}

nav.fixed-bottom-menu > .menu-item:hover {
  transform: translateY(-2px);
}

nav.fixed-bottom-menu > .menu-item:active {
  transform: translateY(-1px);
}

nav.fixed-bottom-menu > .menu-item svg {
  height: 24px;
  width: 24px;
}

nav.fixed-bottom-menu > .menu-item,
nav.fixed-bottom-menu > .menu-item * {
  color: var(--color-black);
}

nav.fixed-bottom-menu > .menu-item.active,
nav.fixed-bottom-menu > .menu-item.active *,
nav.fixed-bottom-menu > .menu-item:active,
nav.fixed-bottom-menu > .menu-item:active * {
  color: var(--color-blue);
}

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

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-contact .modal-header > h2 {
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

.modal-contact .modal-header .modal-close {
  margin-bottom: 6px;
}

.modal-close:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.modal-close:active {
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.3);
}

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

/*////////////////////
  media screen width
////////////////////*/

@media (min-width: 1200px) {
  .sections {
    display: flex;
    flex-direction: row;
  }
  .logo {
    transition: var(--transition-default);
    text-align: center;
    font-size: 32px;
  }
  .modal-contact {
    left: 20%;
    right: 20%;
    max-width: 420px;
    margin: 0 auto;
  }
  nav.fixed-bottom-menu {
    justify-content: center;
  }
}
</style>
