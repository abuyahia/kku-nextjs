import localFont from "next/font/local";
export const Dinfont = localFont({
    src: [
      {
        path: '../fonts/DINNextLTArabic/DINNextLTArabic-UltraLight.woff2',
        weight: '200',
        style: 'normal',
      },
      {
        path: '../fonts/DINNextLTArabic/DINNextLTArabic-Light.woff2',
        weight: '300',
        style: 'normal',
      },
      {
        path: '../fonts/DINNextLTArabic/DINNextLTArabic-Regular.woff2',
        weight: '400',
        style: 'italic',
      },
      {
        path: '../fonts/DINNextLTArabic/DINNextLTArabic-Medium.woff2',
        weight: '500',
        style: 'normal',
      },
      {
        path: '../fonts/DINNextLTArabic/DINNextLTArabic-Bold.woff2',
        weight: 'bold',
        style: 'italic',
      },
    ],
  })