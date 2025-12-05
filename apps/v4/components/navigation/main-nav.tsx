"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight, Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Input } from "@/registry/new-york-v4/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/registry/new-york-v4/ui/navigation-menu"

// SVG Icon Components
function BlocksIcon({ className }: { className?: string }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 127 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path
        d="M121.389 33.3057L70.679 4.02572C68.679 2.87572 66.269 2.29572 63.439 2.29572C60.619 2.28572 58.2091 2.85572 56.2291 3.99572L5.82893 33.0957C3.84893 34.2357 2.86898 35.6257 2.87898 37.2557C2.88898 38.8957 3.88898 40.2857 5.87898 41.4357L15.949 47.2557L22.379 50.9657L23.1991 51.4357L26.8189 53.5257L45.919 64.5557L46.7391 65.0257L50.369 67.1257L56.5889 70.7157C58.5889 71.8657 60.9989 72.4457 63.8289 72.4457C66.6489 72.4557 69.0591 71.8857 71.0391 70.7357L77.119 67.2257L80.7191 65.1457L81.4891 64.7057L100.519 53.7257L104.119 51.6457L104.889 51.1957L111.319 47.4857L121.439 41.6457C123.409 40.5057 124.389 39.1257 124.389 37.4957V37.4757C124.379 35.8457 123.379 34.4557 121.389 33.3057ZM104.889 42.8257L104.059 43.3057L96.869 47.4557L93.2691 49.5357L81.4891 56.3357L73.4691 60.9657L69.869 63.0457L63.7891 66.5557L57.5689 62.9657L53.9491 60.8757L45.919 56.2357L34.0191 49.3657L30.399 47.2757L23.149 43.0957L22.379 42.6457L13.0789 37.2757L63.4791 8.18572L114.189 37.4557L104.889 42.8257Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M81.3493 23.8457C81.3493 24.6457 80.8392 25.3457 79.8192 25.9357L76.8993 27.6157L69.6994 31.7757L67.2194 33.2057C66.7394 33.4857 66.2293 33.6957 65.6693 33.8357C65.0393 34.0057 64.3593 34.0857 63.6193 34.0857C62.8293 34.0857 62.1094 33.9857 61.4394 33.7957C60.9294 33.6557 60.4494 33.4557 59.9994 33.1957L57.3993 31.6957L50.1493 27.5057L47.3192 25.8757C46.2992 25.2757 45.7794 24.5857 45.7794 23.7857C45.7694 22.9857 46.2795 22.2957 47.2995 21.7057L59.8993 14.4257C60.9093 13.8357 62.0994 13.5457 63.4794 13.5457H63.5094C64.8894 13.5557 66.0993 13.8457 67.1193 14.4457L79.7995 21.7657C80.8295 22.3557 81.3393 23.0457 81.3493 23.8457Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M104.888 37.4457V37.4657C104.888 38.2557 104.378 38.9457 103.368 39.5257L100.448 41.2157L93.2485 45.3657L90.7686 46.7957C90.2886 47.0757 89.7685 47.2857 89.2085 47.4257C88.5785 47.5957 87.8984 47.6857 87.1584 47.6757C86.3884 47.6757 85.6685 47.5857 85.0085 47.3957C84.4885 47.2457 83.9986 47.0457 83.5486 46.7857L80.7786 45.1857L70.8684 39.4657C69.8384 38.8757 69.3284 38.1757 69.3184 37.3757C69.3184 36.8957 69.5084 36.4457 69.8884 36.0457C70.1184 35.7757 70.4484 35.5257 70.8484 35.2957L73.3184 33.8657L80.5286 29.7157L81.3484 29.2357L83.4485 28.0257C84.4685 27.4357 85.6686 27.1457 87.0486 27.1457C88.4286 27.1457 89.6385 27.4457 90.6685 28.0357L103.348 35.3557C104.368 35.9457 104.888 36.6457 104.888 37.4457Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M104.888 37.4657V42.8257L104.059 43.3057L96.8684 47.4557L93.2686 49.5357L81.4885 56.3357V50.9557C81.4885 50.4357 81.2684 49.9557 80.8384 49.5357C80.6084 49.2957 80.3085 49.0757 79.9485 48.8657L77.3484 47.3657L69.3184 42.7257V37.3757C69.3284 38.1757 69.8384 38.8757 70.8684 39.4657L80.7786 45.1857L83.5486 46.7857C83.9986 47.0457 84.4885 47.2457 85.0085 47.3957C85.6685 47.5857 86.3884 47.6757 87.1584 47.6757C87.8984 47.6757 88.5785 47.5957 89.2085 47.4257C89.7685 47.2857 90.2886 47.0757 90.7686 46.7957L93.2485 45.3657L100.448 41.2157L103.368 39.5257C104.378 38.9457 104.888 38.2557 104.888 37.4657Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M81.489 50.9557V50.9757C81.489 51.7657 80.979 52.4557 79.969 53.0357L69.979 58.8057L67.3689 60.3057C66.8889 60.5857 66.3691 60.7957 65.8091 60.9357C65.1791 61.1057 64.499 61.1957 63.759 61.1857C62.979 61.1857 62.2589 61.0957 61.5989 60.8957C61.0789 60.7557 60.5989 60.5557 60.1489 60.2957L57.3789 58.6957L47.469 52.9757C46.439 52.3857 45.9289 51.6857 45.9189 50.8857C45.9189 50.4057 46.109 49.9557 46.489 49.5557C46.719 49.2857 47.049 49.0357 47.449 48.8057L49.9189 47.3757L57.949 42.7457L60.0491 41.5357C61.0691 40.9457 62.2689 40.6457 63.6489 40.6557C65.0389 40.6557 66.239 40.9557 67.269 41.5457L69.3188 42.7257L77.3489 47.3657L79.949 48.8657C80.309 49.0757 80.6089 49.2957 80.8389 49.5357C81.2689 49.9557 81.489 50.4357 81.489 50.9557Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M81.489 50.9757V56.3357L73.469 60.9657L69.8689 63.0457L63.7891 66.5557L57.5688 62.9657L53.949 60.8757L45.9189 56.2357V50.8857C45.9289 51.6857 46.439 52.3857 47.469 52.9757L57.3789 58.6957L60.1489 60.2957C60.5989 60.5557 61.0789 60.7557 61.5989 60.8957C62.2589 61.0957 62.979 61.1857 63.759 61.1857C64.499 61.1957 65.1791 61.1057 65.8091 60.9357C66.3691 60.7957 66.8889 60.5857 67.3689 60.3057L69.979 58.8057L79.969 53.0357C80.979 52.4557 81.489 51.7657 81.489 50.9757Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M57.949 37.3557V42.7457L49.9189 47.3757L47.449 48.8057C47.049 49.0357 46.719 49.2857 46.489 49.5557C46.109 49.9557 45.9189 50.4057 45.9189 50.8857V56.2357L34.019 49.3657L30.3989 47.2757L23.1489 43.0957L22.3789 42.6457V37.2957C22.3789 38.0957 22.8989 38.7857 23.9189 39.3857L26.749 41.0157L33.999 45.2057L36.5989 46.7057C37.0489 46.9657 37.5291 47.1657 38.0391 47.3057C38.7091 47.4957 39.429 47.5957 40.219 47.5957C40.959 47.5957 41.639 47.5157 42.269 47.3457C42.829 47.2057 43.3388 46.9957 43.8188 46.7157L46.429 45.2057L56.4189 39.4457C57.4389 38.8557 57.949 38.1557 57.949 37.3557Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M57.9491 37.3557C57.9491 38.1557 57.4391 38.8557 56.4191 39.4457L46.4291 45.2057L43.819 46.7157C43.339 46.9957 42.8292 47.2057 42.2692 47.3457C41.6392 47.5157 40.9591 47.5957 40.2191 47.5957C39.4291 47.5957 38.7092 47.4957 38.0392 47.3057C37.5292 47.1657 37.049 46.9657 36.599 46.7057L33.9992 45.2057L26.7492 41.0157L23.9191 39.3857C22.8991 38.7857 22.3791 38.0957 22.3791 37.2957C22.3691 36.4957 22.8791 35.8057 23.8991 35.2157L36.4992 27.9357C37.5192 27.3457 38.719 27.0557 40.109 27.0557C41.489 27.0557 42.6991 27.3557 43.7191 27.9557L45.7792 29.1457L46.5492 29.5857L53.7992 33.7757L56.3991 35.2757C56.7591 35.4857 57.0592 35.7057 57.2892 35.9357C57.7292 36.3657 57.9391 36.8357 57.9491 37.3557Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M81.3491 23.8457V29.2357L80.5293 29.7157L73.3191 33.8657L70.8491 35.2957C70.4491 35.5257 70.1192 35.7757 69.8892 36.0457C69.5092 36.4457 69.3191 36.8957 69.3191 37.3757V42.7257L67.2693 41.5457C66.2393 40.9557 65.0392 40.6557 63.6492 40.6557C62.2692 40.6457 61.0693 40.9457 60.0493 41.5357L57.9492 42.7457V37.3557C57.9392 36.8357 57.7293 36.3657 57.2893 35.9357C57.0593 35.7057 56.7592 35.4857 56.3992 35.2757L53.7993 33.7757L46.5493 29.5857L45.7793 29.1457V23.7857C45.7793 24.5857 46.2991 25.2757 47.3191 25.8757L50.1492 27.5057L57.3992 31.6957L59.9993 33.1957C60.4493 33.4557 60.9292 33.6557 61.4392 33.7957C62.1092 33.9857 62.8291 34.0857 63.6191 34.0857C64.3591 34.0857 65.0392 34.0057 65.6692 33.8357C66.2292 33.6957 66.7392 33.4857 67.2192 33.2057L69.6992 31.7757L76.8992 27.6157L79.8191 25.9357C80.8391 25.3457 81.3491 24.6457 81.3491 23.8457Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M63.4792 8.18571V13.5457C62.0992 13.5457 60.9092 13.8357 59.8992 14.4257L47.2993 21.7057C46.2793 22.2957 45.7693 22.9857 45.7793 23.7857V29.1457L43.7192 27.9557C42.6992 27.3557 41.4891 27.0657 40.1091 27.0557C38.7191 27.0557 37.5193 27.3457 36.4993 27.9357L23.8992 35.2157C22.8792 35.8057 22.3692 36.4957 22.3792 37.2957V42.6457L13.0791 37.2757L63.4792 8.18571Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M104.888 37.4457C104.888 36.6457 104.368 35.9457 103.348 35.3557L90.6685 28.0357C89.6385 27.4457 88.4386 27.1457 87.0486 27.1457C85.6586 27.1457 84.4685 27.4357 83.4485 28.0257L81.3484 29.2357V23.8457C81.3384 23.0457 80.8286 22.3557 79.7986 21.7657L67.1184 14.4457C66.0984 13.8457 64.8885 13.5557 63.5085 13.5457H63.4785V8.18571L114.188 37.4557L104.888 42.8257V37.4457Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M124.389 37.4957V57.4757C124.399 59.1157 123.419 60.4957 121.439 61.6457L71.0391 90.7357C69.0591 91.8857 66.6489 92.4557 63.8289 92.4457C60.9989 92.4457 58.5889 91.8657 56.5889 90.7157L5.87891 61.4357C3.88891 60.2857 2.88891 58.8957 2.87891 57.2557V37.2557C2.88891 38.8957 3.88891 40.2857 5.87891 41.4357L15.949 47.2557L22.3789 50.9657L23.199 51.4357L26.8188 53.5257L45.9189 64.5557L46.739 65.0257L50.3689 67.1257L56.5889 70.7157C58.5889 71.8657 60.9989 72.4457 63.8289 72.4457C66.6489 72.4557 69.0591 71.8857 71.0391 70.7357L77.1189 67.2257L80.719 65.1457L81.489 64.7057L100.519 53.7257L104.119 51.6457L104.889 51.1957L111.319 47.4857L121.439 41.6457C123.409 40.5057 124.389 39.1257 124.389 37.4957Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ComponentsIcon({ className }: { className?: string }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 119 91"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path
        d="M24.3349 35.5002V35.5202C24.3349 37.2502 23.2949 38.7202 21.2049 39.9202C19.1049 41.1302 16.5549 41.7402 13.5549 41.7302C10.5449 41.7302 7.99489 41.1102 5.87489 39.8902C3.76489 38.6702 2.70489 37.2002 2.69489 35.4702C2.68489 33.7302 3.73491 32.2602 5.83491 31.0502C7.93491 29.8402 10.4849 29.2302 13.4849 29.2402C16.4849 29.2402 19.0349 29.8602 21.1549 31.0802C23.2649 32.3002 24.3249 33.7702 24.3349 35.5002Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M47.3949 48.8103V48.8303C47.3949 50.5603 46.3449 52.0303 44.2549 53.2303C42.1549 54.4403 39.6049 55.0503 36.6049 55.0403C33.6049 55.0403 31.0449 54.4203 28.9349 53.2003C26.8249 51.9803 25.7549 50.5103 25.7449 48.7803C25.7449 47.5803 26.2349 46.5103 27.2349 45.5603C27.6849 45.1403 28.2349 44.7303 28.8849 44.3603C30.9849 43.1503 33.5349 42.5403 36.5349 42.5503C39.5349 42.5503 42.0949 43.1703 44.2049 44.3903C44.8049 44.7403 45.3249 45.1003 45.7549 45.5003C46.8449 46.4703 47.3849 47.5703 47.3949 48.8103Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M47.2448 22.2803V22.3003C47.2448 24.0203 46.2048 25.4903 44.1148 26.6903C42.0148 27.9103 39.4648 28.5103 36.4648 28.5103C33.4648 28.5003 30.9048 27.8903 28.7948 26.6703C26.6748 25.4503 25.6148 23.9703 25.6048 22.2403C25.5948 20.5103 26.6448 19.0303 28.7448 17.8203C30.8448 16.6103 33.3948 16.0003 36.3948 16.0103C39.3948 16.0203 41.9548 16.6303 44.0648 17.8503C46.1748 19.0703 47.2348 20.5403 47.2448 22.2803Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M70.305 35.5903V35.6103C70.305 37.3303 69.2549 38.8003 67.1649 40.0003C65.0649 41.2203 62.515 41.8203 59.515 41.8203C56.515 41.8103 53.9549 41.2003 51.8449 39.9803C49.7349 38.7603 48.6649 37.2803 48.6649 35.5503C48.6549 34.3503 49.1549 33.2803 50.1549 32.3303C50.5949 31.9003 51.1449 31.5003 51.7949 31.1303C53.8949 29.9203 56.445 29.3203 59.445 29.3203C62.445 29.3303 65.005 29.9403 67.115 31.1603C67.715 31.5103 68.2349 31.8703 68.6649 32.2703C69.7549 33.2403 70.295 34.3503 70.305 35.5903Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M93.2149 22.3603V22.3803C93.2149 24.1003 92.1649 25.5703 90.0749 26.7803C87.9749 27.9903 85.4249 28.5903 82.4249 28.5903C79.4249 28.5903 76.8649 27.9703 74.7549 26.7503C72.6449 25.5303 71.5849 24.0503 71.5749 22.3203C71.5649 20.5903 72.6049 19.1203 74.7049 17.9003C76.8049 16.6903 79.3549 16.0903 82.3549 16.0903C85.3549 16.1003 87.9149 16.7103 90.0249 17.9303C92.1449 19.1503 93.2049 20.6303 93.2149 22.3603Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M116.265 35.6703V35.6903C116.265 37.4103 115.225 38.8903 113.135 40.0903C111.035 41.3003 108.485 41.9003 105.475 41.9003C102.475 41.8903 99.9249 41.2803 97.8049 40.0603C95.6949 38.8403 94.6349 37.3603 94.6249 35.6303C94.6249 33.9003 95.6649 32.4303 97.7649 31.2103C99.8649 30.0003 102.415 29.4003 105.415 29.4003C108.415 29.4003 110.965 30.0203 113.085 31.2403C115.195 32.4603 116.255 33.9403 116.265 35.6703Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M93.3549 48.9002V48.9202C93.3549 50.6402 92.3149 52.1102 90.2249 53.3202C88.1249 54.5302 85.5649 55.1302 82.5649 55.1302C79.5649 55.1202 77.0149 54.5102 74.8949 53.2902C72.7849 52.0702 71.7249 50.5902 71.7149 48.8602C71.7049 47.6602 72.2049 46.5902 73.2149 45.6402C73.6549 45.2102 74.2049 44.8102 74.8549 44.4402C76.9549 43.2302 79.5049 42.6302 82.5049 42.6302C85.5049 42.6402 88.0549 43.2502 90.1749 44.4702C90.7749 44.8202 91.2849 45.1802 91.7149 45.5802C92.8049 46.5502 93.3449 47.6602 93.3549 48.9002Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M70.4448 62.1302V62.1502C70.4448 63.8702 69.4048 65.3402 67.3048 66.5402C65.2048 67.7602 62.6548 68.3602 59.6548 68.3502C56.6548 68.3502 54.1048 67.7402 51.9848 66.5102C49.8748 65.2902 48.8148 63.8202 48.8048 62.0902C48.7948 60.8902 49.2948 59.8202 50.2948 58.8702C50.7448 58.4502 51.2948 58.0402 51.9448 57.6702C54.0448 56.4602 56.5948 55.8502 59.5948 55.8602C62.5948 55.8602 65.1449 56.4802 67.2649 57.7002C67.8749 58.0502 68.3848 58.4202 68.8148 58.8002C69.8948 59.7802 70.4348 60.8902 70.4448 62.1302Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M70.1549 9.05027V9.07027C70.1549 10.7903 69.115 12.2603 67.025 13.4703C64.925 14.6803 62.3749 15.2803 59.3749 15.2803C56.3749 15.2803 53.815 14.6603 51.705 13.4403C49.585 12.2203 48.525 10.7403 48.515 9.01027C48.505 7.28027 49.5549 5.81027 51.6549 4.59027C53.7549 3.38027 56.3049 2.78027 59.3049 2.78027C62.3049 2.79027 64.8649 3.40027 66.9749 4.62027C69.0849 5.84027 70.1449 7.32027 70.1549 9.05027Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M116.265 35.6902V55.6702C116.275 57.4002 115.235 58.8802 113.135 60.0902C111.035 61.3002 108.485 61.9002 105.475 61.9002C102.475 61.8902 99.9249 61.2802 97.8049 60.0602C95.6949 58.8402 94.6349 57.3602 94.6249 55.6302V35.6302C94.6349 37.3602 95.6949 38.8402 97.8049 40.0602C99.9249 41.2802 102.475 41.8902 105.475 41.9002C108.485 41.9002 111.035 41.3002 113.135 40.0902C115.225 38.8902 116.265 37.4102 116.265 35.6902Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M93.3549 48.9202V68.9002C93.3649 70.6302 92.3249 72.1002 90.2249 73.3202C88.1249 74.5302 85.5649 75.1302 82.5649 75.1302C79.5649 75.1202 77.0149 74.5102 74.8949 73.2902C72.7849 72.0702 71.7248 70.5902 71.7148 68.8602V48.8602C71.7248 50.5902 72.7849 52.0702 74.8949 53.2902C77.0149 54.5102 79.5649 55.1202 82.5649 55.1302C85.5649 55.1302 88.1249 54.5302 90.2249 53.3202C92.3149 52.1102 93.3549 50.6402 93.3549 48.9202Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M93.2149 22.3803V42.3603C93.2249 43.5603 92.7249 44.6303 91.7149 45.5803C91.2849 45.1803 90.7749 44.8203 90.1749 44.4703C88.0549 43.2503 85.5049 42.6403 82.5049 42.6303C79.5049 42.6303 76.9549 43.2303 74.8549 44.4403C74.2049 44.8103 73.6549 45.2103 73.2149 45.6403C72.1249 44.6703 71.585 43.5603 71.575 42.3203V22.3203C71.585 24.0503 72.6449 25.5303 74.7549 26.7503C76.8649 27.9703 79.4249 28.5803 82.4249 28.5903C85.4249 28.5903 87.975 27.9903 90.075 26.7803C92.165 25.5703 93.2149 24.1003 93.2149 22.3803Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M70.1548 9.07025V29.0503C70.1648 30.2503 69.6649 31.3203 68.6649 32.2703C68.2349 31.8703 67.7149 31.5103 67.1149 31.1603C65.0049 29.9403 62.4449 29.3303 59.4449 29.3203C56.4449 29.3203 53.8949 29.9203 51.7949 31.1303C51.1449 31.5003 50.5948 31.9003 50.1548 32.3303C49.0648 31.3603 48.5249 30.2503 48.5149 29.0103V9.01025C48.5249 10.7403 49.5849 12.2203 51.7049 13.4403C53.8149 14.6603 56.3749 15.2703 59.3749 15.2803C62.3749 15.2803 64.9249 14.6803 67.0249 13.4703C69.1149 12.2603 70.1548 10.7903 70.1548 9.07025Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M70.3048 35.6103V55.5903C70.3048 56.7803 69.8148 57.8503 68.8148 58.8003C68.3848 58.4203 67.8748 58.0503 67.2648 57.7003C65.1448 56.4803 62.5948 55.8603 59.5948 55.8603C56.5948 55.8503 54.0448 56.4603 51.9448 57.6703C51.2948 58.0403 50.7448 58.4503 50.2948 58.8703C49.2148 57.8903 48.6648 56.7903 48.6648 55.5503V35.5503C48.6648 37.2803 49.7348 38.7603 51.8448 39.9803C53.9548 41.2003 56.5148 41.8103 59.5148 41.8203C62.5148 41.8203 65.0648 41.2203 67.1648 40.0003C69.2548 38.8003 70.3048 37.3303 70.3048 35.6103Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M70.4449 62.1503V82.1303C70.4549 83.8603 69.4149 85.3303 67.3049 86.5403C65.2049 87.7603 62.6549 88.3603 59.6549 88.3503C56.6549 88.3503 54.1049 87.7403 51.9849 86.5103C49.8749 85.2903 48.8149 83.8203 48.8049 82.0903V62.0903C48.8049 63.8203 49.8749 65.2903 51.9849 66.5103C54.1049 67.7403 56.6549 68.3503 59.6549 68.3503C62.6549 68.3603 65.2049 67.7603 67.3049 66.5403C69.4049 65.3403 70.4449 63.8703 70.4449 62.1503Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M47.3949 48.8303V68.8103C47.4049 70.5503 46.3549 72.0203 44.2549 73.2303C42.1549 74.4403 39.6049 75.0503 36.6049 75.0403C33.6049 75.0403 31.0449 74.4203 28.9349 73.2003C26.8249 71.9803 25.7549 70.5103 25.7449 68.7803V48.7803C25.7449 50.5103 26.8249 51.9803 28.9349 53.2003C31.0449 54.4203 33.6049 55.0403 36.6049 55.0403C39.6049 55.0503 42.1549 54.4403 44.2549 53.2303C46.3449 52.0303 47.3949 50.5603 47.3949 48.8303Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M24.3348 35.5202V55.5002C24.3448 57.2402 23.3048 58.7102 21.2048 59.9202C19.1048 61.1302 16.5548 61.7402 13.5548 61.7302C10.5448 61.7302 7.99482 61.1102 5.87482 59.8902C3.76482 58.6702 2.70482 57.2002 2.69482 55.4702V35.4702C2.70482 37.2002 3.76482 38.6702 5.87482 39.8902C7.99482 41.1102 10.5448 41.7302 13.5548 41.7302C16.5548 41.7402 19.1048 41.1302 21.2048 39.9202C23.2948 38.7202 24.3348 37.2502 24.3348 35.5202Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M47.2449 22.3002V42.2802C47.2449 43.4802 46.7549 44.5502 45.7549 45.5002C45.3249 45.1002 44.8049 44.7402 44.2049 44.3902C42.0949 43.1702 39.5349 42.5502 36.5349 42.5502C33.5349 42.5402 30.9849 43.1502 28.8849 44.3602C28.2349 44.7302 27.6849 45.1402 27.2349 45.5602C26.1549 44.5802 25.6149 43.4702 25.6049 42.2402V22.2402C25.6149 23.9702 26.6749 25.4502 28.7949 26.6702C30.9049 27.8902 33.4648 28.5002 36.4648 28.5102C39.4648 28.5102 42.0149 27.9102 44.1149 26.6902C46.2049 25.4902 47.2449 24.0202 47.2449 22.3002Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function AnimationsIcon({ className }: { className?: string }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 127 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path
        d="M54.5793 25.6196V38.8496C53.7893 38.9996 52.9993 38.9996 52.1993 38.8396C51.3793 38.6796 50.6693 38.4296 50.0693 38.0796C49.4693 37.7296 49.0693 37.3096 48.8793 36.8196C48.6893 36.3396 48.7193 35.8596 48.9893 35.3896L49.2193 34.9896L54.5793 25.6196Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M102.569 53.3296V73.3296L86.2695 82.7396C84.4695 83.7796 82.2995 84.2896 79.7295 84.2896C79.0895 84.2896 78.4795 84.2496 77.8895 84.1896V70.2796C77.8795 69.5596 77.4095 68.9296 76.4795 68.3896L58.8195 58.1896L50.2295 53.2296L28.1794 40.4996L17.9595 34.5996V28.6296C17.9695 30.0996 18.8794 31.3696 20.6794 32.4096L31.4395 38.6196L51.8395 50.3996L63.9595 57.3896L73.1794 62.7196C74.9894 63.7596 77.1695 64.2796 79.7295 64.2896C81.7995 64.2896 83.6094 63.9596 85.1694 63.2796C85.5494 63.1296 85.9195 62.9396 86.2695 62.7396L91.7695 59.5596L102.569 53.3296Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M82.2696 34.5496V41.5995L81.2396 41.0096C80.6396 40.6696 80.2196 40.2496 79.9696 39.7596C79.7196 39.2696 79.7596 38.7796 80.0796 38.2696L82.2696 34.5496Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M109.09 49.5597V69.5597L102.57 65.7997V53.3297L89.8096 45.9597V38.4297L109.09 49.5597Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M77.8895 70.2797C77.8895 70.9997 77.4295 71.6297 76.5095 72.1697C75.5795 72.6997 74.4895 72.9597 73.2395 72.9597C71.9895 72.9597 70.8895 72.6897 69.9595 72.1497L21.6494 44.2597L17.9595 42.1297L4.33948 34.2697C3.40948 33.7297 2.93945 33.0997 2.93945 32.3697C2.93945 31.6397 3.38946 31.0197 4.31946 30.4897C5.23946 29.9597 6.32948 29.6897 7.58948 29.6897C8.84948 29.6897 9.9295 29.9597 10.8595 30.4997L17.9595 34.5997L28.1794 40.4997L50.2295 53.2297L58.8195 58.1897L76.4795 68.3897C77.4095 68.9297 77.8795 69.5597 77.8895 70.2797Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M102.569 53.3297L91.7695 59.5597L86.2695 62.7397C85.9195 62.9397 85.5494 63.1297 85.1694 63.2797C83.6094 63.9597 81.7995 64.2897 79.7295 64.2897C77.1695 64.2797 74.9894 63.7597 73.1794 62.7197L63.9595 57.3897L51.8395 50.3997L31.4395 38.6197L20.6794 32.4097C18.8794 31.3697 17.9695 30.0997 17.9595 28.6297C17.9595 27.1497 18.8495 25.8897 20.6395 24.8497L36.9495 15.4397L43.4695 19.1997L54.2595 25.4397L54.5795 25.6197L49.2195 34.9897L48.9895 35.3897C48.7195 35.8597 48.6895 36.3397 48.8795 36.8197C49.0695 37.3097 49.4695 37.7297 50.0695 38.0797C50.6695 38.4297 51.3795 38.6797 52.1995 38.8397C52.9995 38.9997 53.7895 38.9997 54.5795 38.8497C54.5995 38.8497 54.6294 38.8397 54.6494 38.8397L55.6195 38.6897L60.5895 37.9197L82.2695 34.5497L80.0795 38.2697C79.7595 38.7797 79.7195 39.2697 79.9695 39.7597C80.2195 40.2497 80.6395 40.6697 81.2395 41.0097L82.2695 41.5997L89.8094 45.9597L102.569 53.3297Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M124.809 38.2798V58.2598C124.819 59.7398 123.929 60.9998 122.129 62.0298L109.089 69.5598V49.5598L111.329 48.2698L122.129 42.0298C123.919 41.0098 124.809 39.7498 124.809 38.2798Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M93.7793 31.4998L90.9193 36.4898L89.8093 38.4298V45.9598L82.2694 41.5998V34.5498L60.5894 37.9198V32.3798L78.8894 29.5398L88.2094 28.0898C88.9694 27.9698 89.7393 27.9598 90.5393 28.0698C91.3293 28.1798 92.0194 28.4098 92.6194 28.7598C93.2294 29.1098 93.6493 29.5298 93.8993 30.0098C94.1493 30.4998 94.1093 30.9998 93.7793 31.4998Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M77.8895 70.2796V90.2796C77.8895 90.9996 77.4295 91.6296 76.5095 92.1696C75.5795 92.6996 74.4895 92.9596 73.2395 92.9596C71.9895 92.9596 70.8895 92.6896 69.9595 92.1496L4.33948 54.2696C3.40948 53.7296 2.93945 53.0996 2.93945 52.3696V32.3696C2.93945 33.0996 3.40948 33.7296 4.33948 34.2696L17.9595 42.1296L21.6494 44.2596L69.9595 72.1496C70.8895 72.6896 71.9795 72.9596 73.2395 72.9596C74.4995 72.9596 75.5795 72.6996 76.5095 72.1696C77.4295 71.6296 77.8895 70.9996 77.8895 70.2796Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M124.81 38.2598V38.2798C124.81 39.7498 123.92 41.0098 122.13 42.0298L111.33 48.2698L109.09 49.5598L89.8097 38.4298L90.9197 36.4898L93.7797 31.4998C94.1097 30.9998 94.1497 30.4998 93.8997 30.0098C93.6497 29.5298 93.2298 29.1098 92.6198 28.7598C92.0198 28.4098 91.3297 28.1798 90.5397 28.0698C89.7397 27.9598 88.9697 27.9698 88.2097 28.0898L78.8898 29.5398L60.5897 32.3798L64.3097 25.7798C64.5797 25.3098 64.6098 24.8198 64.3898 24.3198C64.1698 23.8098 63.7597 23.3898 63.1597 23.0398L62.4197 22.6098L43.4697 11.6698L56.5098 4.13976C58.2998 3.10976 60.4797 2.58975 63.0397 2.59975C65.6097 2.59975 67.7897 3.12976 69.5897 4.16976L122.09 34.4798C123.9 35.5198 124.81 36.7798 124.81 38.2598Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M64.3097 25.7797L60.5897 32.3797V37.9197L55.6198 38.6897L54.5797 38.0897V25.6197L54.2598 25.4397L43.4697 19.1997V11.6697L62.4197 22.6097L63.1597 23.0397C63.7597 23.3897 64.1698 23.8097 64.3898 24.3197C64.6098 24.8197 64.5797 25.3097 64.3097 25.7797Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function MainNav({
  items,
  componentPages,
  animationPages,
  allBlockSubcategories,
  className,
  ...props
}: React.ComponentProps<"nav"> & {
  items: { href: string; label: string }[]
  componentPages: Array<{ name: string; url: string }>
  animationPages: Array<{ name: string; url: string }>
  allBlockSubcategories: Array<{ category: string; name: string; count: number }>
}) {
  const pathname = usePathname()
  const [blocksSearch, setBlocksSearch] = useState("")
  const [componentsSearch, setComponentsSearch] = useState("")
  const [animationsSearch, setAnimationsSearch] = useState("")

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  // Format category name for display
  const formatName = (name: string) => {
    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  // Filter nav items to separate dropdowns from regular links
  const blocksItem = items.find((item) => item.href === "/blocks")
  const componentsItem = items.find((item) => item.href === "/docs/components")
  const animationsItem = items.find((item) => item.href === "/docs/animations")
  const otherItems = items.filter(
    (item) =>
      item.href !== "/blocks" &&
      item.href !== "/docs/components" &&
      item.href !== "/docs/animations"
  )

  return (
    <NavigationMenu className={cn("items-center", className)} {...props}>
      <NavigationMenuList>
        {/* Regular nav items */}
        {otherItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink
              asChild
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent hover:bg-transparent"
              )}
            >
              <Link
                href={item.href}
                className={cn(
                  "text-muted-foreground hover:text-foreground",
                  isActive(item.href) && "text-foreground"
                )}
              >
                {item.label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}

        {/* Blocks dropdown */}
        {blocksItem && allBlockSubcategories.length > 0 && (
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                "text-muted-foreground hover:text-foreground bg-transparent hover:bg-transparent data-[state=open]:bg-transparent",
                isActive(blocksItem.href) && "text-foreground"
              )}
            >
              {blocksItem.label}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex gap-4 p-4 md:w-[600px] lg:w-[800px]">
                <div className="flex w-[180px] shrink-0 flex-col gap-2">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/blocks"
                      className="group flex h-fit flex-col justify-start rounded-xl border border-input bg-transparent p-4 no-underline shadow-sm outline-none select-none hover:bg-transparent dark:bg-input/30 dark:hover:bg-input/30"
                    >
                      <div className="mb-2 flex items-center justify-between text-lg font-medium">
                        Blocks
                        <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                      </div>
                      <p className="text-muted-foreground text-sm leading-tight">
                        Professionally designed, fully responsive blocks ready to drop into your project.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <div className="relative">
                    <Search className="text-muted-foreground absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2" />
                    <Input
                      placeholder="Search blocks..."
                      value={blocksSearch}
                      onChange={(e) => setBlocksSearch(e.target.value)}
                      className="h-8 bg-transparent pl-8 text-sm"
                    />
                  </div>
                  <div className="mt-auto flex items-end justify-center">
                    <BlocksIcon className="text-brand size-20" />
                  </div>
                </div>
                <ul className="grid max-h-[50vh] flex-1 auto-rows-min grid-cols-3 content-start gap-1 overflow-y-auto">
                  {allBlockSubcategories
                    .filter((sub) =>
                      formatName(sub.name).toLowerCase().includes(blocksSearch.toLowerCase())
                    )
                    .map((sub) => (
                      <li key={`${sub.category}-${sub.name}`}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={`/blocks/category/${sub.category}/subcategory/${sub.name}`}
                            className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            {formatName(sub.name)}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        )}

        {/* Components dropdown */}
        {componentsItem && componentPages.length > 0 && (
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                "text-muted-foreground hover:text-foreground bg-transparent hover:bg-transparent data-[state=open]:bg-transparent",
                isActive(componentsItem.href) && "text-foreground"
              )}
            >
              {componentsItem.label}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex gap-4 p-4 md:w-[600px] lg:w-[800px]">
                <div className="flex w-[180px] shrink-0 flex-col gap-2">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/docs/components"
                      className="group flex h-fit flex-col justify-start rounded-xl border border-input bg-transparent p-4 no-underline shadow-sm outline-none select-none hover:bg-transparent dark:bg-input/30 dark:hover:bg-input/30"
                    >
                      <div className="mb-2 flex items-center justify-between text-lg font-medium">
                        Components
                        <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                      </div>
                      <p className="text-muted-foreground text-sm leading-tight">
                        Beautiful, accessible components built with Radix UI and Tailwind CSS.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <div className="relative">
                    <Search className="text-muted-foreground absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2" />
                    <Input
                      placeholder="Search components..."
                      value={componentsSearch}
                      onChange={(e) => setComponentsSearch(e.target.value)}
                      className="h-8 bg-transparent pl-8 text-sm"
                    />
                  </div>
                  <div className="mt-auto flex items-end justify-center">
                    <ComponentsIcon className="text-brand size-20" />
                  </div>
                </div>
                <ul className="grid max-h-[50vh] flex-1 auto-rows-min grid-cols-3 content-start gap-1 overflow-y-auto">
                  {componentPages
                    .filter((page) =>
                      page.name.toLowerCase().includes(componentsSearch.toLowerCase())
                    )
                    .map((page) => (
                      <li key={page.url}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={page.url}
                            className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            {page.name}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        )}

        {/* Animations dropdown */}
        {animationsItem && animationPages.length > 0 && (
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                "text-muted-foreground hover:text-foreground bg-transparent hover:bg-transparent data-[state=open]:bg-transparent",
                isActive(animationsItem.href) && "text-foreground"
              )}
            >
              {animationsItem.label}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex gap-4 p-4 md:w-[600px] lg:w-[800px]">
                <div className="flex w-[180px] shrink-0 flex-col gap-2">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/docs/animations"
                      className="group flex h-fit flex-col justify-start rounded-xl border border-input bg-transparent p-4 no-underline shadow-sm outline-none select-none hover:bg-transparent dark:bg-input/30 dark:hover:bg-input/30"
                    >
                      <div className="mb-2 flex items-center justify-between text-lg font-medium">
                        Animations
                        <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                      </div>
                      <p className="text-muted-foreground text-sm leading-tight">
                        Smooth, performant animations powered by Motion for delightful interactions.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <div className="relative">
                    <Search className="text-muted-foreground absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2" />
                    <Input
                      placeholder="Search animations..."
                      value={animationsSearch}
                      onChange={(e) => setAnimationsSearch(e.target.value)}
                      className="h-8 bg-transparent pl-8 text-sm"
                    />
                  </div>
                  <div className="mt-auto flex items-end justify-center">
                    <AnimationsIcon className="text-brand size-20" />
                  </div>
                </div>
                <ul className="grid max-h-[50vh] flex-1 auto-rows-min grid-cols-3 content-start gap-1 overflow-y-auto">
                  {animationPages
                    .filter((page) =>
                      page.name.toLowerCase().includes(animationsSearch.toLowerCase())
                    )
                    .map((page) => (
                      <li key={page.url}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={page.url}
                            className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            {page.name}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
