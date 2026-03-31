import { nui } from "./stores.js";

export function handleMessage(event: MessageEvent) {
    const data = event?.data;
    switch (data?.type) {
        case "open":
            if(!data?.name) return
            console.log(data.label)
            nui.set({
            isOpen: true,
            data: data?.data,
            nameLocation:data?.label,
            NameItem:data?.name,
            count:data?.count,
            dimentionList:null,
            progressStart:false,
            progressDuration:0,
            isStart:false,
            reward:data?.reward,
            isModal:false   
        });
        break
        case "openWorldSelect":
            nui.update((state) => ({ ...state, isModal: true }));
            break
        case "autoFarmStatus":
            if(data?.state === "start"){
                nui.update((state) => ({ ...state, isStart: true }));
            }
            else if(data?.state === "cancel"){
                nui.update((state) => ({ ...state, progressStart: false }));
                nui.update((state) => ({ ...state, isStart: false }));
                nui.update((state) => ({ ...state, progressDuration: 0 }));
            }
            break
        case "hideNUI":
            nui.set({
                isOpen: false,
                data: null,
                nameLocation:null,
                dimentionList:null,
                NameItem:null,
                count:null,
                reward:data?.reward,
                progressStart:false,
                progressDuration:0,
                isStart:false,
                isModal:false
            });
            break
        case "updateTime":
            nui.update((state) => ({ ...state, progressStart: true }));
            nui.update((state) => ({ ...state, progressDuration: data?.time }));
            setTimeout(() => {
                nui.update((state) => ({ ...state, progressDuration: 0 }));
                nui.update((state) => ({ ...state, progressStart: false }));
            }, data?.time);
            break
    }
}

export function keydown(event: KeyboardEvent) {
  const key = event.key;
  if (key === "Escape") {
    nui.update((state) => ({ ...state, isModal: false }));
    fetch(`https://${GetParentResourceName()}/closeWorld`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({}),
    });
  }
}
