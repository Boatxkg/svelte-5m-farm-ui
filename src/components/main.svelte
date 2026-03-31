<script>
    import ProgressSection from "./section/progressSection.svelte";
    import ControllerSection from "./section/controllerSection.svelte";
    import Modal from "./Modal/modal.svelte";
    import { fade, fly } from "svelte/transition";
    import { nui } from '../stores/stores'
</script>

<main class="container-full w-[100vw] h-[100vh] flex justify-center items-end" transition:fly={{y: 25, duration: 300}}>

    <!-- <button class="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded" onclick={() => $nui.isModal = !$nui.isModal}>Close Modal</button> -->

{#if $nui.isModal}
 <Modal/>
{/if}

    <div class="mb-[2.5vh] w-[50vh] h-[15.5vh] rounded-[2vh] relative main-container
     ease"
    class:lowerest={$nui.isModal} >
        <div class="relative w-full h-full overflow-clip rounded-[2vh] ">
            <div class="absolute top-[8vh] w-[20vh] h-[20vh] right-[-9vh] rotate-[-20deg]  opacity-10 backgroundCustom"></div>
            <div class="absolute top-[-15vh] w-[40vh] h-[25vh] left-[18vh] rotate-[-20deg]  opacity-20 backgroundCustom" ></div>
            <div class="absolute bottom-[-10vh] w-[20vh] h-[20vh] left-[-3vh]  rotate-[-20deg]  opacity-20 backgroundCustom"></div>
        </div>
        <div class="absolute w-full h-full flex top-0 left-0 px-[1.3vh] py-[1.1vh] items-center justify-between">
            <ProgressSection/>
            <ControllerSection/>
        </div>
    </div>
</main>

<style>
.ease{
    opacity: 1;
    background-color: rgba(9,19,40,0.95);
    transition: opacity 0.3s ease, transform 0.3s ease, filter 0.3s ease;
}

.lowerest{
    opacity: 0.5;
    transform: scale(0.95);
}

.main-container::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: auto;
    height: auto;
    inset: -1vh;
    z-index: -1;
    border-radius: 2.8vh;
    background: rgba(255,255,255,0.10);
    border: 0.2vh solid rgba(255,255,255,0.1);
}

/* @keyframes circle{
    0%{
        transform: translateY(0);
        filter: brightness(0.5) blur(24px);
    }
    50%{
        transform: translateY(5vh);
        filter: brightness(1) blur(24px);
    }
    100%{
        transform: translateY(0vh);
        filter: brightness(0.5) blur(24px);
    }
} */
.backgroundCustom{
    will-change: transform;
    filter: blur(2vh);
    background: linear-gradient(to bottom,rgba(114,217,255,1) , rgba(1,121,188));
    border-radius: 50%;
}
/* .backgroundCustom:nth-child(1){
    animation: circle 5s ease infinite;
}
.backgroundCustom:nth-child(2){
    animation: circle 7s ease infinite;
}
.backgroundCustom:nth-child(3){
    animation: circle 4s ease infinite reverse;
} */
</style>