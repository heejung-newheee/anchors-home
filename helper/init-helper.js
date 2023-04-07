import localFont from "next/font/local";
const covered = localFont({
    src: [
        {
            path : '../public/assets/font/coveredByYourGrace.woff',
            weight : '400',
        },
    ]
})

const pretendard = localFont({
    src: [
        {
            path : '../public/assets/font/Pretendard-Regular.woff',
            weight : '400',
        },
        {
            path : '../public/assets/font/Pretendard-Medium.woff',
            weight : '500',
        },
        {
            path : '../public/assets/font/Pretendard-Bold.woff',
            weight : '700',
        },
    ]
})

const stolzl = localFont({
    src: [
        {
            path : '../public/assets/font/stolzl-Regular.woff',
            weight : '400',
        },
        {
            path : '../public/assets/font/Stolzl-Medium.woff',
            weight : '500',
        },
        {
            path : '../public/assets/font/Stolzl-Bold.woff',
            weight : '700',
        },
    ]
})
export const getFontDefinitions = () => ({ covered, pretendard, stolzl });