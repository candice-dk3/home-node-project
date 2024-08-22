<template>
  <div class="modal">
    <slot name="cardBody"></slot>
  </div>
</template>

<script>
export default {
  name: 'EditModal'
}
</script>

<style scoped>
    .modal{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: black;
        background-color: rgba(128, 128, 128, 0.377);
    }
</style>