<script>
   import Header from "./components/Header.svelte";
   import Alertbox from "./components/Alertbox.svelte";
   import subdominFinder from "./functions/sundominFinder.js";
   import validateDomin from "./functions/validateDomin.js";

   let targetDomin = $state.raw("");
   let isInvalidDomin = $state.raw(null);
   let subdomins = $state.raw([]);
   let loading = $state.raw(false);
   let showAlertBox = $state.raw(false);

   async function onfind() {
      try {
         subdomins = [];
         loading = true;
         validateDomin(targetDomin);
         subdomins = await subdominFinder(targetDomin);
      } catch (err) {
         if (err?.code === 400) {
            isInvalidDomin = true;
         } else {
            showAlertBox = true;
         }
      } finally {
         loading = false;
      }
   }
</script>

<Alertbox bind:showAlertBox />

<Header bind:targetDomin bind:isInvalidDomin {onfind} {loading} />

<footer>
   {#each subdomins as subdomin (subdomin)}
      <div role="group">
         <input type="text" readonly value={subdomin} />
         <a href="https://{subdomin}" role="button">Visit</a>
      </div>
   {/each}
</footer>
