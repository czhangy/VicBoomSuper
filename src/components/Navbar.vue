<template>
  <nav class="navbar">
    <!-- Site title -->
    <div class="title">
      <router-link :to="{ name: 'Home' }" v-on:click="closeMenu"
        >vic boom super</router-link
      >
    </div>
    <!-- Hamburger menu button for mobile -->
    <a href="#" class="menu-button" v-on:click="toggleMenu">
      <span class="bar" />
      <span class="bar" />
      <span class="bar" />
    </a>
    <!-- Menu tabs -->
    <div class="links" v-if="menuOpen || !mobile" :style="{ display: 'flex' }">
      <ul>
        <li>
          <router-link :to="{ name: 'Videos' }" v-on:click="closeMenu"
            >Videos</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'Requests' }" v-on:click="closeMenu"
            >Requests</router-link
          >
        </li>
      </ul>
    </div>
    <!-- Default tabs -->
    <div class="links" v-else :style="{ display: 'none' }">
      <ul>
        <li><router-link :to="{ name: 'Videos' }">Videos</router-link></li>
        <li>
          <router-link :to="{ name: 'Requests' }">Requests</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      menuOpen: false,
      mobile: false,
    };
  },
  methods: {
    // Handle hamburger menu toggling on mobile
    toggleMenu() {
      // Toggle
      this.menuOpen = !this.menuOpen;
      // Update DOM
      this.$forceUpdate();
    },
    // Close menu on reroute
    closeMenu() {
      this.menuOpen = false;
    },
  },
  mounted() {
    if (window.innerWidth <= 650) this.mobile = true;
  },
};
</script>

<style lang="scss" scoped>
/* Main body */
.navbar {
  // Spread out menu options
  display: flex;
  justify-content: space-between;
  // Center vertically
  align-items: center;
  // Colors
  color: white;
  background-color: rgba(255, 105, 180, 0.85);
  // Overlay styling
  z-index: 11;
  position: fixed;
  width: 100%;
  // Bottom outline
  border-style: none none solid none;
  border-color: white;
  // Prevent highlighting
  user-select: none;

  /* Site title */
  .title {
    margin: 1.3rem;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 1px;

    a {
      color: white;
      text-decoration: none;
    }
  }

  /* Hamburger menu */
  .menu-button {
    // Default to hidden
    display: none;
    // Style dropdown
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
    position: absolute;
    top: 1.5rem;
    right: 1rem;

    .bar {
      height: 3px;
      width: 100%;
      background-color: white;
      border-radius: 10px;
    }
  }

  /* Navbar links */
  .links {
    ul {
      display: flex;
    }

    li {
      // Get rid of bullets
      list-style: none;
      // Space links out
      a {
        padding: 1.65rem 1rem;
        display: block;
        color: white;
        text-decoration: none;
      }
      // Hover background
      &:hover {
        background-color: $primary-light;
      }
    }
  }
}

// Media queries
@media (max-width: $mobile) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;

    .menu-button {
      display: flex;
    }

    .links {
      width: 100%;
      // Separators
      border-style: solid none none none;
      border-color: white;

      ul {
        // Dropdown links
        width: 100%;
        flex-direction: column;
      }

      li {
        text-align: center;

        a {
          padding: 0.7rem 1rem;
        }
      }
    }
  }
}
</style>