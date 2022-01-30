<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { Post, PostImage } from "../post";

  const dispatch = createEventDispatcher();

  export let post: Post;
  export let image: PostImage;
  export let nImage: number;

  function download(): void {
    dispatch("download", { image });
  }

  function open(): void {
    dispatch("open", { image });
  }

  function report(): void {
    dispatch("report", { post, image });
  }

  const m = 500;
  if (image.width > m || image.height > m) {
    const ar = image.width / image.height;
    image.width = m;
    image.height = Math.round(image.width / ar);
  }
</script>

<div class="group flex justify-center drop-shadow-md hover:drop-shadow-sm hover:scale-105 transition ease-in-out">
  <img class="object-cover aspect-square rounded-md text-center"
       src={image.url + `?width=${image.width}&height=${image.height}`}
       alt={`Post #${post.id}, image ${nImage}`}>
  <div class="absolute bottom-0 right-0 p-2">
    <div class="opacity-0 group-hover:opacity-[.67] transition grid grid-cols-3 gap-y-4">
      <div title="Download">
        <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer text-white hover:text-green-500 transition h-7 w-7" fill="none"
             viewBox="0 0 24 24" stroke="currentColor" on:click={download}>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </div>
      <div title="Open">
        <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer text-white hover:text-blue-400 transition h-7 w-7" fill="none"
             viewBox="0 0 24 24" stroke="currentColor" on:click={open}>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
      <div title="Report">
        <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer text-white hover:text-red-500 transition h-7 w-7" fill="none"
             viewBox="0 0 24 24" stroke="currentColor" on:click={report}>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </div>
  </div>
</div>