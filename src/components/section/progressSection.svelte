<script>
    // import Tomato from "../../assets/tomato.png"
    import { derived } from 'svelte/store';
    import { nui , imageSrc } from '../../stores/stores'
    import { fade } from "svelte/transition";
    const progressKey = derived(nui, ($nui) => {
        return $nui.progressStart ? Date.now() : null;
    });

</script>

<div class="w-[13vh] h-[13vh] flex flex-col gap-[0.5vh] justify-center items-center bg-white/10 rounded-[1vh] border-[0.1vh] border-white/10 ">
    <div class="w-[9.5vh] h-[9.5vh] bg-white/10 border-[0.1vh] border-white/20 rounded-[7vh] flex justify-center items-center">
        <svg class="w-[8vh] h-[8vh] absolute rotate-[-90deg] " viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="37" fill="black" fill-opacity="0.5" stroke="#252525" stroke-width="6"/>
            {#key $progressKey}
                {#if $nui.progressStart}
                    <circle cx="40" cy="40" r="37" stroke="url(#paint0_linear_215_9)" stroke-width="6" class="circle"
                    transition:fade={{duration:50}} style="animation-duration: {$nui.progressDuration}ms"/>
                {/if}
            {/key}
            <defs>
            <linearGradient id="paint0_linear_215_9" x1="70" y1="17" x2="10.5" y2="66.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#72D9FF"/>
            <stop offset="1" stop-color="#4DC3FD"/>
            </linearGradient>
            </defs>
        </svg>
        <img src={imageSrc($nui.NameItem)} alt="Tomato" class="w-[5vh] h-[5vh] z-10 absolute filter blur-[0.5vh] brightness-50">
        <img src={imageSrc($nui.NameItem)} alt="Tomato" class="w-[4.5vh] h-[4.5vh] z-10">
    </div>
    <div class="bg-[#091328f1] w-[10vh] h-[2.5vh] rounded absolute top-[-0.1vh] border-[0.1vh] border-white/15
     flex items-center justify-center text-[rgba(153,215,238,0.9)] text-[1.2vh] pt-[0.1vh] tracking-[0.1vh] font-bold">
    {$nui.count}
    </div>
</div>


<style>
    .circle{
        stroke-linecap: round;
        stroke-dasharray: 232.477;
        stroke-dashoffset: 232.477;
        animation-name: dash;
        animation-timing-function: ease;
        animation-fill-mode: forwards;
        /* animation: dash 5s ease-out infinite; */
    }

    /* circle.active:nth-child(2){
        animation: dash 5s ease-out ;
    } */

    @keyframes dash{
        0%{
            stroke-dashoffset: 232.477;
            opacity: 1;
        }
        80%{
            stroke-dashoffset: 0;
            opacity: 1;
        }
        90%{
            stroke-dashoffset: 0;
            opacity: 1;
        }

        100%{
            stroke-dashoffset: 0;
            opacity: 0;

        }
    }
    
</style>