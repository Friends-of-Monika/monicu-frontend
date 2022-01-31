<script lang="ts">
  import axios from "axios";
  import { formatFileSize, formatNumber } from "../utils/units";

  let stats = {
    posts: "0",
    images: "0",
    size: "0",
    reactions: "0",
    emojis: "0"
  };

  axios.get("https://api.mon.icu/posts/stats").then(res => {
    stats.posts = formatNumber(res.data.posts, 0);
    stats.images = formatNumber(res.data.images, 0);
    stats.size = formatFileSize(res.data.images_size, 0);
    stats.reactions = formatNumber(res.data.reactions, 0);
    stats.emojis = formatNumber(res.data.emojis, 0);
  });
</script>

<div class="grid grid-rows-2 gap-3 m-auto h-[70vh] md:h-[45vh]">
  <div class="place-self-center mt-auto md:w-[50vw] xl:w-[40vw]">
    <div class="text-center">
      <h1 class="text-5xl">mon💚icu</h1>
      <!--      <p class="text-2xl">moni<span class="text-slate-300">ka is </span> cu<span-->
      <!--        class="text-slate-300">te~</span></p>-->
      <p class="text-2xl">open alpha</p>
    </div>
    <div class="text-center m-auto">
      <h1 class="text-xl">
        made with much
        <svg xmlns="http://www.w3.org/2000/svg" class="inline-flex h-6 w-6" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        to this girl
      </h1>
    </div>
  </div>
  <div class="m-auto">
    <div class="md:hidden">
      <div class="grid grid-cols-1 grid-rows-2">
        <div class="grid grid-cols-2">
          <div class="text-center">
            <h1 class="uppercase">posts</h1>
            <p class="text-3xl uppercase">{stats.posts}</p>
          </div>
          <div class="text-center">
            <h1 class="uppercase">images</h1>
            <p class="text-3xl uppercase">{stats.images}</p>
          </div>
        </div>
        <div class="grid grid-cols-3">
          <div class="text-center">
            <h1 class="uppercase">size</h1>
            <p class="text-3xl uppercase">{stats.size}</p>
          </div>
          <div class="text-center">
            <h1 class="uppercase">reactions</h1>
            <p class="text-3xl uppercase">{stats.reactions}</p>
          </div>
          <div class="text-center">
            <h1 class="uppercase">emojis</h1>
            <p class="text-3xl uppercase">{stats.emojis}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden md:block">
      <div class="grid grid-cols-5 w-[60vw]">
        <div class="text-center">
          <h1 class="uppercase">posts</h1>
          <p class="text-3xl uppercase">{stats.posts}</p>
        </div>
        <div class="text-center">
          <h1 class="uppercase">images</h1>
          <p class="text-3xl uppercase">{stats.images}</p>
        </div>
        <div class="text-center">
          <h1 class="uppercase">size</h1>
          <p class="text-3xl uppercase">{stats.size}</p>
        </div>
        <div class="text-center">
          <h1 class="uppercase">reactions</h1>
          <p class="text-3xl uppercase">{stats.reactions}</p>
        </div>
        <div class="text-center">
          <h1 class="uppercase">emojis</h1>
          <p class="text-3xl uppercase">{stats.emojis}</p>
        </div>
      </div>
    </div>
  </div>
</div>