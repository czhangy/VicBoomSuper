<template>
  <transition name="modal-fade">
    <div class="backdrop">
      <div class="modal">
        <header class="modal-header">
          <slot name="header"> Submit a Request! </slot>
          <!-- Close modal -->
          <button type="button" class="btn-close" @click="close">x</button>
        </header>

        <section class="modal-body">
          <slot name="body">
            <!-- Text inputs -->
            <input type="text" class="text-box" placeholder="Enter a request" v-model="newReq"/>
            <!-- Priority selection -->
            <div class="priority">
              <div class="priority-text">Priority:</div>
              <Dropdown :onClick="changePriority" :items="priorities" />
            </div>
          </slot>
        </section>

        <footer class="modal-footer">
          <button type="button" class="submit-button" @click="submit">
            SUBMIT!
          </button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
// Get dropdown menu
import Dropdown from "./Dropdown";

export default {
  name: "Modal",
  components: {
    Dropdown,
  },
  data() {
    return {
      newReq: "",
      reqPriority: "Medium",
      priorities: ["Low", "Medium", "High"],
    };
  },
  methods: {
    // Handle modal close
    close() {
      this.$emit("close");
    },
    // Handle modal submit
    submit() {
        this.close();
        this.onSubmit(this.newReq, this.reqPriority);
        // Reset
        this.newReq = "";
        this.reqPriority = "Medium"
    },
    // Handle dropdown
    changePriority(priority) {
      this.reqPriority = priority;
    },
  },
  props: {
      onSubmit: {
          type: Function,
      }
  }
};
</script>

<style lang="scss" scoped>
.backdrop {
  // Positioning
  z-index: 999;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  // Dim background
  background-color: rgba(0, 0, 0, 0.3);
  // Style children positioning
  display: flex;
  justify-content: center;
  align-items: center;
  // Style text
  color: $primary;
  font-weight: 300;

  .modal {
    // Style box
    background-color: white;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    // Position children
    display: flex;
    flex-direction: column;
    // Enforce dimensions
    min-height: 300px;
    min-width: 300px;

    .modal-header {
      position: relative;
      border-bottom: 1px solid #eeeeee;
      justify-content: space-between;
      padding: 15px;
      display: flex;
      font-weight: 600;

      .btn-close {
        position: absolute;
        top: 0;
        right: 0;
        border: none;
        font-size: 20px;
        padding: 10px;
        cursor: pointer;
        font-weight: bold;
        color: $primary;
        background: transparent;
      }
    }

    .modal-footer {
      border-top: 1px solid #eeeeee;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 30px;
      display: flex;

      .submit-button {
        // Get background
        background-color: $primary-light;
        opacity: 0.65;
        // Style text
        font-family: Spartan;
        font-size: 1rem;
        font-weight: 700;
        color: white;
        // Style shape
        width: 100px;
        padding: 12px;
        border-radius: 12px;
        border-style: none;
        box-shadow: 0px 0px 10px $box-shadow;
        // Prevent highlighting
        user-select: none;
        // Style cursor
        cursor: pointer;
      }
    }

    .modal-body {
      // Position body
      position: relative;
      padding: 20px 10px;
      // Position children
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .text-box {
        // Style font
          font-family: Spartan, Helvetica, Arial, sans-serif;
        font-size: 1rem;
        // Style box
        border-style: hidden hidden groove hidden;
        border-color: $primary-light;
        // Positioning
        width: 90%;
      }
      .priority {
        // Position children
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        // Spacing
        margin: 2rem 0 1rem 0;

        .priority-text {
          // Spacing
          margin: 0 2rem 0 0;
        }
      }
    }
  }
}

// Animations
.modal-fade-enter {
  opacity: 0;
}

.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active {
  transition: opacity 0.5s ease;
}

.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>