<script>
import { fade , fly } from "svelte/transition";
import { nui } from '../../stores/stores'

function goToAnotherWorld(world){
    fetch(`https://${GetParentResourceName()}/confirmWorld`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ dimension: world }),
    }).then((res) => res.json())
      .then(() => {
        setTimeout(() => {
            nui.update((state) => ({ ...state, isModal: false }));
        }, 100);
      })
}
</script>

<div class="flex justify-center items-center fixed inset-0  bg-[radial-gradient(circle_at_center,rgba(114,217,255,0.0)_0%,rgba(0,0,0,0.4)_100%)] bg-black/40 z-[999999]" transition:fade={{duration: 200}}>
    <div transition:fly={{duration: 200, y: 25}} class="w-[60vh] h-[35vh] bg-[rgba(9,19,40,0.9)] rounded-[2vh] relative flex
    flex-col items-center px-[1vh] py-[1vh] "
    >

        <div class=" flex items-center justify-center z-20">
            <h1 class=" text-[2.5vh] font-bold text-center tracking-wider
            bg-gradient-to-r from-[rgba(163,222,243,0.9)] to-[rgba(111,195,236,0.9)] bg-clip-text text-transparent 
            ">เลือกมิติ</h1>
        </div>

        <div class="w-full h-full bg-black/30 rounded-[1.5vh] flex flex-wrap gap-[0.7vh] p-[1vh] z-10">
        {#each Object.keys($nui.dimentionList) as item, index}
        <!-- อย่าลืมมาเชื่อมมิติกับarrayที่ส่งมาจากluaด้วยนะ  -->
            <button class="w-[18.2vh] h-[13.2vh] bg-white/10 rounded-[1vh] duration-100
            border-[0.2vh] border-white/5 hover:border-[rgba(114,217,255,0.5)] hover:bg-white/15 group"
            onclick={()=> goToAnotherWorld(item)}>
            <p class="text-[5vh] group-hover:text-[5.5vh] duration-200">🌏</p>
            <p class="text-[1.4vh] text-white/80">World {index+1}</p>
            </button> 
        {/each}
        </div>

        <div class="flex gap-2 absolute bottom-[-5vh] items-center">
            <span class="p-[0.5vh] bg-white/20 rounded-[0.5vh] text-rose-500 font-bold
            text-[1.2vh] border-[0.1vh] border-white/10">ESC</span>
            <p class="text-slate-300">เพื่อออกจากเมนู</p>
        </div>

        <div class="absolute w-full h-full overflow-clip rounded-[2vh] top-0 z-[0] ">
            <div class="absolute top-[8vh] w-[20vh] h-[20vh] right-[-9vh] rotate-[-20deg]  opacity-10 backgroundCustom"></div>
            <div class="absolute top-[-15vh] w-[50vh] h-[25vh] left-[13vh] rotate-[-20deg]  opacity-20 backgroundCustom" ></div>
            <div class="absolute bottom-[-10vh] w-[20vh] h-[20vh] left-[-3vh]  rotate-[-20deg]  opacity-20 backgroundCustom"></div>
        </div>

    </div>
</div>

<style>
.backgroundCustom{
    filter: blur(2vh);
    background: linear-gradient(to bottom,rgba(114,217,255,1) , rgba(1,121,188));
    border-radius: 50%;
}
</style>