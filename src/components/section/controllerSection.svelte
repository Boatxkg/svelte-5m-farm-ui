<script>
import { nui , imageSrc } from '../../stores/stores'
</script>

<div class="w-[33vh] h-[13vh] bg-[#091328f1] rounded-[1vh] border-[0.1vh] border-white/10 px-[1vh] py-[2.3vh] flex flex-col items-center
justify-start gap-[1vh]
relative">

    <div class="
    absolute top-[-1vh] min-w-[9vh] w-fit h-[2.5vh] bg-[#091328f1] rounded border border-white/10 flex items-center justify-center text-[rgba(153,215,238,0.9)] 
    text-[1.4vh] pt-[0.1vh] tracking-[0.05vh] font-semibold">
        {$nui.nameLocation }
    </div>

    <div class="flex gap-[1vh] justify-center items-start w-full">
        {#each $nui.reward as [name,count]}
            <div class="w-[5vh] h-[5vh] bg-white/10 border-[0.1vh] border-white/5 rounded flex  flex-col items-center justify-center relative">
                <img src={imageSrc(name)} alt="" class="w-[2vh] h-[2vh] mt-[-0.7vh]">
                <p class="text-[1vh] text-white/80  absolute bottom-[0vh] ">{count}</p>
            </div>
        {/each}
    </div>
    
    <div class="flex gap-[1vh]  w-full  items-end justify-center absolute bottom-[1.5vh]">

        <div class="flex gap-[0.5vh] items-center ">
            <div class="keyBox"
            class:start={$nui.isStart}>
                G
            </div>
            <p class="font-regular  text-white/80 uppercase text-[1.1vh]">{$nui.isStart ? 'เพื่อหยุดการฟาร์ม':'เพื่อเริ่มทำงานอัตโนมัติ'}</p>
        </div>

        <div class="flex gap-[0.5vh] items-center">
            <div class="keyBox">
                H
            </div>
            <p class="font-regular  text-white/80 uppercase text-[1.1vh]">เปลี่ยนมิติ</p>
        </div>

    </div>

</div>
<style>
    .keyBox{
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        color: rgba(114,217,255,0.9);
        background: rgba(255,255,255,0.2);
        border: 0.1vh solid rgba(255,255,255,0.2);
        padding: 0vh 0.5vh;
        font-size: 1.3vh;
        border-radius: 0.5vh;
    }
    .start{
        color: rgb(180, 69, 69);
    }
</style>