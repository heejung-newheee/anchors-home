import jquery from '@/helper/lib/jquery_loader'
import variables from '@/public/assets/scss/_variables.module.scss';

export const initHelper = () => ({ jquery , variables });

// import {getFontDefinitions} from "@/helper/init-helper";
// const {covered, pretendard, stolzl} = getFontDefinitions();

// import localFont from "next/font/local";
// const covered = localFont({
//     src: [
//         {
//             path : '../public/assets/font/coveredByYourGrace.woff',
//             weight : '400',
//             style : '',
//         },
//     ]
// })
//
// const pretendard = localFont({
//     src: [
//         {
//             path : '../public/assets/font/Pretendard-Regular.woff',
//             weight : '400',
//         },
//         {
//             path : '../public/assets/font/Pretendard-Medium.woff',
//             weight : '500',
//         },
//         {
//             path : '../public/assets/font/Pretendard-Bold.woff',
//             weight : '700',
//         },
//     ]
// })
//
// const stolzl = localFont({
//     src: [
//         {
//             variable: '--stolzl',
//             path : '../public/assets/font/stolzl-Regular.woff',
//             weight : '400',
//         },
//         {
//             path : '../public/assets/font/Stolzl-Medium.woff',
//             weight : '500',
//         },
//         {
//             path : '../public/assets/font/Stolzl-Bold.woff',
//             weight : '700',
//         },
//     ]
// })
// export const getFontDefinitions = () => ({ covered, pretendard, stolzl });