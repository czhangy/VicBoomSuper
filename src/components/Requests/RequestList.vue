<template>
  <div class="list">
    <div class="header">
      <div class="title">REQUESTS:</div>
      <div class="count" v-if="!mobile">PENDING: {{ requests.length }}</div>
    </div>
    <div class="body">
      <div class="blocks">
        <RequestBlock
          :request="request"
          :index="index"
          :onClick="deleteBlock"
          v-for="(request, index) in requests"
          :key="index"
        />
      </div>
      <div class="container">
        <button type="button" @click="showModal" class="new-button">
          NEW REQUEST!
        </button>
        <Modal
          v-show="isModalVisible"
          @close="closeModal"
          :onSubmit="handleSubmit"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "./Modal";
import RequestBlock from "./RequestBlock";

export default {
  name: "RequestList",
  components: {
    Modal,
    RequestBlock,
  },
  props: {
    requests: {
      type: Object,
      default: [],
    },
    handleDelete: {
      type: Function,
    },
  },
  data() {
    return {
      isModalVisible: false,
      text: "",
      priority: "",
      mobile: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    // Create new request object
    handleSubmit(text, priority) {
      let newRequest = {
        text: text,
        priority: priority,
        status: false,
      };
      this.requests.push(newRequest);
    },
    // Pass delete back to Requests.vue
    deleteBlock(index) {
      this.handleDelete(index);
    }
  },
  mounted() {
    if (window.innerWidth <= 650) this.mobile = true;
  },
};
</script>

<style lang="scss" scoped>
.list {
  // Position above background
  z-index: 10;
  // Size box
  height: 70vh;
  width: 70vw;
  // Border decoration
  box-shadow: 0px 0px 10px $accent-dark;
  // Color styling
  background-color: white;
  color: $accent-dark;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 12.5vh;

    .title {
      text-align: left;
      font-weight: 900;
      font-size: 2rem;
      padding: 2rem;
    }

    .count {
      // Get background
      background-color: $accent;
      opacity: 0.65;
      // Style text
      font-size: 1rem;
      color: white;
      // Style shape
      padding: 12px;
      margin: 30px;
      border-radius: 12px;
      box-shadow: 0px 0px 10px $accent-dark;
      // Prevent highlighting
      user-select: none;
    }
  }

  .body {
    // Align elements
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50vh;

    .blocks {
      // Sizing
      min-height: 45vh;
      width: 100%;
      // Scroll
      overflow-y: scroll;
      // Borders
      border-top: 1px solid $accent-dark;
      border-bottom: 1px solid $accent-dark;
    }
    .container {
      display: flex;
      align-items: center;
      min-height: 12.5vh;
      .new-button {
        // Get background
        background-color: $accent-light;
        // Style text
        font-size: 1.5rem;
        font-family: Spartan, Helvetica, Arial, sans-serif;
        color: white;
        // Style shape
        padding: 12px;
        border-radius: 12px;
        border-style: none;
        box-shadow: 0px 0px 10px $box-shadow;
        // Prevent highlighting
        user-select: none;
        // Style cursor:
        cursor: pointer;
      }
    }
  }
}

// Media queries
@media (max-width: $mobile) {
  .list {
    // Make header vertically aligned and adjust fonts
    .header {
      justify-content: center;

      .title {
        font-size: 1.5rem;
      }
    }

    .body {
      .container {
        .new-button {
          font-size: 1rem;
          margin: 15px 0 30px 0;
        }
      }
    }
  }
}
</style>