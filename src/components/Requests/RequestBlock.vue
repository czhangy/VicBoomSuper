<template>
  <div class="block">
    <div class="text">
      <div class="priority" v-if="smallLayout">
        <i
          class="fas fa-circle color"
          :style="{ color: getColor(request.priority) }"
        />
      </div>
      {{ request.text }}
    </div>
    <div class="priority" v-if="!smallLayout">
      <i
        class="fas fa-circle color"
        :style="{ color: getColor(request.priority) }"
      />
      <div>{{ request.priority }} Priority</div>
    </div>
    <div class="delete-button" v-if="!mobile" @click="initDelete">
      <i class="fa fa-trash" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "RequestBlock",
  props: {
    request: {
      type: Object,
    },
    onClick: {
      type: Function,
    },
    index: {
      type: null,
    },
  },
  methods: {
    getColor(priority) {
      if (priority == "Low") {
        return "#66FF00";
      } else if (priority == "Medium") {
        return "yellow";
      } else if (priority == "High") {
        return "red";
      } else {
        return "purple";
      }
    },
    initDelete() {
      this.onClick(this.index);
    },
  },
  data() {
    return {
      smallLayout: false,
      mobile: false,
    };
  },
  mounted() {
    if (window.innerWidth < 900) this.smallLayout = true;
    if (window.innerWidth < 650) this.mobile = true;
  },
};
</script>

<style lang="scss" scoped>
.block {
  // Position children
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // Style shape
  width: 100%;
  padding: 3rem 0;
  // Border
  border-bottom: 1px solid #eeeeee;
  // Style text
  font-weight: 1000;
  font-size: 1.1rem;
  color: $accent-dark;

  .text {
    // Spacing
    padding-left: 3rem;
    // Position children
    display: flex;
    flex-direction: row;
    width: 10vw;
  }

  .priority {
    // Position children
    display: flex;
    flex-direction: row;
    font-size: 1rem;

    .color {
      padding-right: 1rem;
    }
  }

  .delete-button {
    // Style button
    color: red;
    font-size: 2rem;
    // Style cursor
    cursor: pointer;
    // Adjust positioning
    margin: 0 3rem;
    padding: 0;
  }
}

// Media queries
@media (max-width: $mobile) {
  // Vertical alignment
  .block {
    justify-content: center;

    .text {
      margin: 0 auto;
      width: 100%;
      text-align: center;
    }
  }
}
</style>