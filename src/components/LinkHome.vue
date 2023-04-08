<template>
  <router-link to="/" class="link-home">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="9.334"
      viewBox="0 0 17 9.334"
    >
      <path
        id="path"
        d="M-3979.72,33.787l-8.367-4.018,8.367-3.982"
        transform="translate(3988.588 -25.12)"
        fill="none"
        stroke="#86aea3"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
      />
      <path
        id="line"
        d="M0,0H15.962"
        transform="translate(0.539 4.657)"
        fill="none"
        stroke="#86aea3"
        stroke-linecap="round"
        stroke-width="1"
      />
    </svg>

    <span>Top</span>
  </router-link>
</template>
<script setup lang="ts"></script>

<style scoped lang="scss">
.link-home {
  display: flex;
  align-items: center;
  gap: 0 4px;
  position: absolute;
  left: 25px;
  top: 20px;

  > svg {
    transition: transform 0.3s ease-in-out;

    > path {
      transition: stroke 0.3s ease-in-out;
    }
  }

  > span {
    font-size: 1.4rem;
    color: $color-04;
    transition: color 0.3s ease-in-out;
  }

  @include hover {
    > svg {
      transform: translateX(-5px);

      > path {
        stroke: $color-03;
      }
    }

    > span {
      color: $color-03;
    }
  }
}

@include sp {
  .link-home {
    > span {
      font-size: 1.2rem;
    }
  }
}
</style>
