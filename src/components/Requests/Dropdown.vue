<template>
  <div class="dropdown">
    <button @click="toggleShow" class="anchor">{{ value }}</button>
    <div v-if="showMenu" class="menu">
      <div
        class="menu-item"
        v-for="(item, index) in items"
        @click="itemClicked(item)"
        :key="index"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  data() {
    return {
      showMenu: false,
      value: "Medium",
    };
  },
  props: {
    onClick: {
      type: Function,
    },
    items: {
      type: Object,
      default: [],
    },
  },
  methods: {
    // Handle visibility
    toggleShow() {
      this.showMenu = !this.showMenu;
    },
    // Handle click
    itemClicked(item) {
      this.toggleShow();
      this.onClick(item);
      this.value = item;
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  user-select: none;
  z-index: 20;
  
  .anchor {
    // Style font
      font-family: Spartan, Helvetica, Arial, sans-serif;
    font-size: 0.8rem;
    // Style color
    background-color: $primary;
    opacity: 0.9;
    color: white;
    // Position children
    display: flex;
    align-items: center;
    justify-content: center;
    // Style shape
    padding: 0.75rem 1rem;
    border-radius: 10px;
    border-style: none;
    min-width: 90px;
    // Style cursor
    cursor: pointer;
  }

  .menu {
    // Style background
    background-color: white;
    // Style border
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;
    // Style cursor
    cursor: pointer;
    // Position children
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style: none;
    // Spacing
    margin: 0.125rem 0 0;
    padding: 0.5rem 0;
    position: absolute;

    .menu-item {
      // Style text
      color: $primary;
      text-align: center;
      font-size: 0.8rem;
      padding: 0.25rem 1rem;
      width: 70%;

      &:hover {
        background-color: lightgray;
      }
    }
  }
}
</style>