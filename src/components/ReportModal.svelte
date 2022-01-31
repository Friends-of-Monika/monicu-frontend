<script lang="ts">
  import Modal from "./Modal.svelte";

  import { createEventDispatcher, tick } from "svelte";
  import type { Post } from "../post";
  import axios from "axios";

  const dispatch = createEventDispatcher();

  export let shown: boolean;
  export let post: Post;
  let textarea: HTMLElement;
  let comment: string;

  function submit() {
    axios.post(`https://api.mon.icu/posts/reports/new?post_id=${post.id}&comment=${encodeURIComponent(comment)}`).then(close);
  }

  function close() {
    comment = "";
    dispatch("close");
  }

  $: { // this is necessary for focus to properly apply
    if (shown) tick().then(() => textarea.focus());
  }
</script>

<Modal {shown}>
  <h1 class="text-xl text-gray-600">Report post</h1>
  <p class="mt-3">
    Thanks for helping us keep the database clean!
    <br>
    To continue, please tell us why do you think this image does not
    belong here.
  </p>
  <textarea class="border rounded-lg min-w-full h-[100px] mt-3 p-2" style="resize: none"
            placeholder="Explicit NSFW, not an artwork, not Monika, etc..." maxlength="150"
            bind:value={comment} bind:this={textarea}></textarea>
  <button class="bg-blue-400 text-white rounded-full active:translate-y-0.5 transition w-1/4 md:w-1/5 mt-3 p-2"
          on:click={submit}>
    Submit
  </button>
  <button
    class="border border-2 border-blue-400 text-blue-400 bg-white rounded-full active:translate-y-0.5 transition w-1/4 md:w-1/5 mt-3 ml-2 p-2"
    on:click={close}>
    Back
  </button>
</Modal>