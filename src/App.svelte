<script lang="ts">
import Main from "./components/main.svelte";
import { nui } from "./stores/stores.js";
import { onMount } from "svelte";
import { handleMessage, keydown } from "./stores/nui"; 
onMount(()=>{
  window.addEventListener("message", handleMessage)
  window.addEventListener("keydown", keydown)
  return () =>{
    window.removeEventListener("message", handleMessage)
    window.removeEventListener("keydown", keydown)
  }
})

 function send(payload:Object) {
        handleMessage({ data: payload } as MessageEvent);
  }
  function toggle(){
    send({ type: 'updateTime', time: 2000 });
  }
</script>
<!-- <button class="p-5 bg-green-400 text-white absolute" onclick={()=>{toggle();}}>toggle</button> -->
{#if $nui.isOpen}
    <Main />
{/if} 