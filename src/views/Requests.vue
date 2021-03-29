<template>
  <div id="requests">
    <RequestList :requests="requests" :handleDelete="deleteElement"/>
  </div>
</template>

<script>
// Get request list
import RequestList from "@/components/Requests/RequestList";

export default {
  name: "Requests",
  components: {
    RequestList,
  },
  data() {
    // Array of requests
    return {
      requests: [
        {
          text: "Port Requests to Database",
          priority: "High",
          status: false,
        },
        {
          text: "Build Videos",
          priority: "High",
          status: false,
        },
        {
          text: "Build Pictures",
          priority: "Medium",
          status: false,
        },
        {
          text: "Fix Submit Menu",
          priority: "Low",
          status: false,
        },
        {
          text: "Fix Videos Slider",
          priority: "Medium",
          status: false,
        },
        {
          text: "Nicer Transitions",
          priority: "Low",
          status: false,
        },
        {
          text: "Videos Scrollbar",
          priority: "Low",
          status: false,
        },
      ],
    };
  },
  methods: {
    // Delete request from array
    deleteElement(index) {
      this.requests.splice(index, 1);
    }
  }
};
</script>

<style lang="scss" scoped>
#requests {
  // Container element
  position: relative;
  width: 100vw;
  height: 100vh;
  // Center children
  display: flex;
  align-items: center;
  justify-content: center;
  // Get gray background
  background-color: $accent;
}
</style>