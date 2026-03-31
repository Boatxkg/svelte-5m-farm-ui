  import { writable, get } from "svelte/store";
  import photo from '../assets/photo.svg';
  function createNuiStore() {
      const allState = {
          isOpen: false,
          data: null,
          nameLocation: null,
          count: null,
          dimentionList: null,
          reward:null,
          progressStart:false,
          NameItem:null,
          progressDuration:0,
          isStart:false,
          isModal:false
      }
      const { subscribe, set, update } = writable(allState);
      return {
          subscribe,
          set,
          update,
          closeModal:() => update((n) => ({ ...n, isModal: false })),
      }
  }
  export const nui = createNuiStore();

  export const imageMap = writable<Record<string, string>>({});
  const fallback = photo;
  export function imageSrc(name: string) {
    if (!name) return fallback;

    const map = get(imageMap);

    if (map[name]) return map[name];

    const url = `nui://nc_inventory/html/img/items/${name}.png`;

    imageMap.update(m => ({ ...m, [name]: fallback }));

    const img = new Image();
    img.src = url;

    img.onload = () => {
      imageMap.update(m => ({ ...m, [name]: url }));
    };

    img.onerror = () => {
      imageMap.update(m => ({ ...m, [name]: fallback }));
    };

    return fallback;
  }