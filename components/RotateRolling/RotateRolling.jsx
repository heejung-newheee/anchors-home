'use client';
import './scss/RotateRolling.scss';
//
// export default function RotateRolling({}) {
//   const rotateRolling = () => {
//     const FRAME_INTERVAL = 5;
//
//     let currentIndex = 0;
//     let flowSpeed = 1;
//     let spaceBetween = 120;
//     let frameStep = 1;
//     let frameCount = 1200;
//
//     const _handleResponsive = () => {
//       // 1600 : SPACE 70 + SPEED 1.5 / 500 : SPACE 100 + SPEED 3 / 3800 : SPACE 50 + SPEED 1.5
//       //spaceBetween = window.innerWidth;
//     };
//
//     const $carousel = $('div.carousel-3d');
//     const $figures = $carousel.find('figure');
//     $figures.remove();
//     // $carousel.on('mouseover', () => {frameStep = 0.33});
//     // $carousel.on('mouseout', () => {frameStep = 1});
//     $(window).on('resize', () => _handleResponsive());
//     _handleResponsive();
//
//     const addNewPanel = () => {
//       const $fig = $figures.eq(currentIndex++).clone();
//       $fig.data(
//         'frame-fix',
//         ($carousel.find('figure:last-child').data('frame-fix') ?? 0) +
//           spaceBetween,
//       );
//       $fig.css({ left: window.innerWidth + 400 + 'px' });
//       $carousel.append($fig);
//       currentIndex = currentIndex % $figures.length;
//       return $fig;
//     };
//
//     const getStyle = (pos) => {
//       // pos는 제일 오른쪽을 0, 제일 왼쪽을 1로 놨을 때 위치값
//       const sin = Math.sin(pos * Math.PI);
//       const cos = Math.cos(pos * Math.PI);
//       const halfSin = Math.sin((pos / 2) * Math.PI);
//       const leftValue = window.innerWidth * (1.1 - pos);
//       const left = `${leftValue}px`;
//       const top = `${150 - 120 * pos}px`;
//       // const transform = `translateX(-200px) rotateY(${40 + cos * 8}deg) rotateZ(${32 - halfSin * 64 * (1 - pos)}deg) scale(${0.6 + sin * 0.4})`;
//       const transform = `translateX(-200px) rotateY(${
//         40 + cos * 8
//       }deg) rotateZ(${10 - halfSin * 64 * (1 - pos)}deg) scale(${
//         0.85 + sin * 0.4
//       })`;
//
//       return { leftValue, css: { left, top, transform } };
//     };
//
//     for (let i = 0; i < 10; i++) {
//       addNewPanel();
//     }
//
//     const frameTick = setInterval(() => {
//       frameCount += frameStep;
//
//       const $figs = $('.carousel-3d > figure');
//       let style, $fig;
//
//       $figs.each((i) => {
//         $fig = $figs.eq(i);
//         const pos = ((frameCount - $fig.data('frame-fix')) * flowSpeed) / 1000;
//         style = getStyle(pos);
//         $fig.css(style.css);
//         if (style.leftValue < -1000) {
//           $fig.remove();
//         }
//       });
//
//       if (Math.floor(frameCount) % spaceBetween === 0) {
//         addNewPanel();
//       }
//     }, FRAME_INTERVAL);
//   };
//
//   const GET_CLASSNAME =
//     className == undefined
//       ? { className: 'rotate_rolling' }
//       : { className: 'rotate_rolling ' + className };
//   return (
//     <div className="auto-rolling-container">
//       <div className="carousel-3d">
//         <figure style="left: -1000px">
//           <img
//             src="/assets/images/content/img_main_autorolling01.png"
//             width="400"
//             height="300"
//             alt=""
//           />
//         </figure>
//         <figure style="left: -800px">
//           <img
//             src="/assets/images/content/img_main_autorolling02.png"
//             width="400"
//             height="300"
//             alt=""
//           />
//         </figure>
//         <figure>
//           <img
//             src="/assets/images/content/img_main_autorolling03.png"
//             width="400"
//             height="300"
//             alt=""
//           />
//         </figure>
//         <figure>
//           <img
//             src="/assets/images/content/img_main_autorolling04.png"
//             width="400"
//             height="300"
//             alt=""
//           />
//         </figure>
//         <figure>
//           <img
//             src="/assets/images/content/img_main_autorolling05.png"
//             width="400"
//             height="300"
//             alt=""
//           />
//         </figure>
//         <figure>
//           <img
//             src="/assets/images/content/img_main_autorolling06.png"
//             width="400"
//             height="300"
//             alt=""
//           />
//         </figure>
//         <figure>
//           <img
//             src="/assets/images/content/img_main_autorolling07.png"
//             width="400"
//             height="300"
//             alt=""
//           />
//         </figure>
//         <figure>
//           <img
//             src="/assets/images/content/img_main_autorolling08.png"
//             width="400"
//             height="300"
//             alt=""
//           />
//         </figure>
//         <figure>
//           <img
//             src="/assets/images/content/img_main_autorolling09.png"
//             width="400"
//             height="300"
//             alt=""
//           />
//         </figure>
//         <figure>
//           <img
//             src="/assets/images/content/img_main_autorolling10.png"
//             width="400"
//             height="300"
//             alt=""
//           />
//         </figure>
//         <figure>
//           <img
//             src="/assets/images/content/img_main_autorolling11.png"
//             width="400"
//             height="300"
//             alt=""
//           />
//         </figure>
//         <figure>
//           <img
//             src="/assets/images/content/img_main_autorolling12.png"
//             width="400"
//             height="300"
//             alt=""
//           />
//         </figure>
//         <figure>
//           <img
//             src="/assets/images/content/img_main_autorolling13.png"
//             width="400"
//             height="300"
//             alt=""
//           />
//         </figure>
//         <figure>
//           <img
//             src="/assets/images/content/img_main_autorolling14.png"
//             width="400"
//             height="300"
//             alt=""
//           />
//         </figure>
//         <figure>
//           <img
//             src="/assets/images/content/img_main_autorolling15.png"
//             width="400"
//             height="300"
//             alt=""
//           />
//         </figure>
//         <figure>
//           <img
//             src="/assets/images/content/img_main_autorolling16.png"
//             width="400"
//             height="300"
//             alt=""
//           />
//         </figure>
//       </div>
//     </div>
//   );
// }
