<div class="absolute inset-0 bg-gray-100 z-10">
  <div class="flex justify-center items-center h-screen">
    <span class="loader" />
  </div>
</div>

<style>
  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid #666;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
