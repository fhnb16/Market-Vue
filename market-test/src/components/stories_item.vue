<template>
  <div class="story viewed">
    <img
      src="https://psv4.userapi.com/c235031/u590763794/docs/d26/070cde08072f/SereneAchingAtlanticbluetang-size_restricted.gif?extra=qBCPx5W-lhz31rr1FaumTSJMVhxPrdquInlZ80M5EfBlpXRWIRQpH2kGYHEADOhn4R8WQm-Iu3-aaLxIJd9qsG3L5PpZ7sD-Mm13Sa6y-DJYZyBUey9p_hPGQI-tU9gPPoLXoiKpbWprK5MlwFaEkss"
      class="story-preview-img"
    />
    <div class="story-preview-text">Почему все цены с датой?</div>
  </div>
</template>

<script type="text/javascript"></script>

<style scoped type="text/css">
/*////////////////////
     stories item
////////////////////*/

.stories_wrapper .story {
  position: relative;
  display: inline-block;
  width: 126px;
  height: 126px;
  border: 2px solid var(--color-white);
  border-radius: 20px;
  margin: 6px;
  padding: 8px;
  cursor: pointer;
}
.stories_wrapper .story,
.stories_wrapper .story *,
.stories_wrapper .story:after {
  transition: var(--transition-default);
}
.stories_wrapper .story:hover {
  transform: translateY(-2px);
}
.stories_wrapper .story:active {
  transform: translateY(1px);
}
.stories_wrapper .story:hover .story-preview-text,
.stories_wrapper .story:active .story-preview-text {
  background: rgba(0, 0, 0, 0.64);
  backdrop-filter: blur(8px);
  -moz-backdrop-filter: blur(8px);
}
.stories_wrapper .story:first-child {
  margin-left: 20px;
}
.stories_wrapper .story:last-child {
  margin-right: 20px;
}
.stories_wrapper .story:before {
  content: "";
  position: absolute;
  border-radius: 24px;
  left: -4px;
  top: -4px;
  width: 130px;
  height: 130px;
  border: 2px solid var(--color-blue);
  z-index: 6;
}
.stories_wrapper .story.viewed:before {
  border: 2px solid var(--color-gray);
}
.stories_wrapper .story:after {
  content: "";
  position: absolute;
  border-radius: 22px;
  left: -2px;
  top: -2px;
  width: 126px;
  height: 126px;
  border: 2px solid var(--color-white);
  z-index: 6;
}
.stories_wrapper .story .story-preview-img {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  border-radius: 20px;
  object-fit: cover;
}
.stories_wrapper .story .story-preview-text {
  position: absolute;
  height: 36px;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 4px 8px 8px 8px;
  backdrop-filter: blur(6px);
  -moz-backdrop-filter: blur(6px);
  background: rgba(0, 0, 0, 0.35);
  border-radius: 20px;
  color: var(--color-white);
  white-space: break-spaces;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 700;
  font-size: 10px;
  line-height: 120%;
  font-family: var(--text-font-rich), sans-serif;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
