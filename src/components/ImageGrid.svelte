<script lang="ts">
  import InfiniteLoading from "svelte-infinite-loading";

  import axios from "axios";
  import type { Post } from "../types/post";
  import Image from "./Image.svelte";

  let posts = new Array<Post>();
  let unique = new Set<number>();

  function more({ detail: { loaded, complete, error } }: { loaded, complete, error: () => void }): void {
    axios.get(`https://api.mon.icu/posts/random?limit=20`).then(res => {
      if (res.data.length) {
        for (const post of res.data as Array<Post>) {
          if (!unique.has(post.id)) {
            unique.add(post.id);
            posts = [...posts, post];
          }
        }
        loaded();
      } else {
        complete();
      }
    }).catch(e => {
      console.log(e);
      error(e);
    });
  }
</script>

<p class="text-center text-slate-700 md:hidden">
  Just keep scrolling
  <svg xmlns="http://www.w3.org/2000/svg" class="inline-flex h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd" />
  </svg>
</p>

<div class="grid gap-10 p-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
  {#each posts as post}
    {#each post.images as image, nImage}
      <Image {post} {image} {nImage} on:report on:open on:download />
    {/each}
  {/each}

  <div class="col-span-1 md:col-span-3 lg:col-span-5">
    <InfiniteLoading on:infinite={more} />
  </div>
</div>