<script lang="ts">
  import ImageGrid from "../components/ImageGrid.svelte";
  import StatsHeader from "../components/StatsHeader.svelte";
  import ReportModal from "../components/ReportModal.svelte";
  import type { Post } from "../post";
  import JsFileDownloader from "js-file-downloader";

  let reportModalShown = false;
  let reportModalPost: Post;

  function showReportModal(e): void {
    reportModalShown = true;
    reportModalPost = e.detail.post;
  }

  function hideReportModal(): void {
    reportModalShown = false;
  }

  function openPicture(e): void {
    window.open(e.detail.image.url, "_blank");
  }

  function downloadPicture(e): void {
    new JsFileDownloader({ url: e.detail.image.url }).then();
  }
</script>

<ReportModal shown={reportModalShown} post={reportModalPost}
             on:close={hideReportModal} />
<StatsHeader />
<ImageGrid on:report={showReportModal}
           on:open={openPicture}
           on:download={downloadPicture} />