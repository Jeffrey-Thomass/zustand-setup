import { create } from "zustand";

const useMyStore = create((set , get) =>{
    return {
        count : 1,
        name : "Jeffrey",
        // increment : () => {
        //     set({
        //         count : get().count + 1
        //     })
        // },
        // increment using state
        increment : () => {
            set((state) => ({
                count : state.count + 1
            }))
        },
        capitalize : () => {
            set({
                name : get().name.toUpperCase()
            })
        }
    }
})

export default useMyStore