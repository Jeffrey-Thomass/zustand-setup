import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

const useMyStore = create(persist((set , get) =>{
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
}) ,{
    name : "my-store",
    getStorage : createJSONStorage(() => sessionStorage)
})
// const useMyStore = create((set , get) =>{
//     return {
//         count : 1,
//         name : "Jeffrey",
//         // increment : () => {
//         //     set({
//         //         count : get().count + 1
//         //     })
//         // },
//         // increment using state
//         increment : () => {
//             set((state) => ({
//                 count : state.count + 1
//             }))
//         },
//         capitalize : () => {
//             set({
//                 name : get().name.toUpperCase()
//             })
//         }
//     }
// }) 

// const useMyStore = create(devtools((set , get) =>{
//     return {
//         count : 1,
//         name : "Jeffrey",
//         // increment : () => {
//         //     set({
//         //         count : get().count + 1
//         //     })
//         // },
//         // increment using state
//         increment : () => {
//             set((state) => ({
//                 count : state.count + 1
//             }))
//         },
//         capitalize : () => {
//             set({
//                 name : get().name.toUpperCase()
//             })
//         }
//     }
// }) ,{
//     name : "my-store",
//     getStorage : createJSONStorage(() => localStorage)
// })

export default useMyStore