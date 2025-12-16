"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "motion/react"

import { StripeBgGuides } from "@/registry/new-york-v4/ui/bg-guides"
import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"
import { FeatureBentoCardsBlock } from "@/app/(app)/(marketing)/_blocks/feature-bento-cards-block"
import { FeatureSolutionsGridBlock } from "@/app/(app)/(marketing)/_blocks/feature-solutions-grid-block"
import { FeatureValuesBlock } from "@/app/(app)/(marketing)/_blocks/feature-values-block"
import { PurposeSection } from "@/app/(app)/(marketing)/_components/purpose-section"
import BackgroundDecorationsPageClient from "@/app/(app)/(tools)/tools/background-decorations/page.client"
import EasingComposerClient from "@/app/(app)/(tools)/tools/easing-composer/page.client"
import ShadowComposerPageClient from "@/app/(app)/(tools)/tools/shadow-composer/page.client"
import SpacingGeneratorClient from "@/app/(app)/(tools)/tools/spacing-generator/page.client"
import ThemeGeneratorPageClient from "@/app/(app)/(tools)/tools/theme-generator/page.client"
import TypographyComposerClient from "@/app/(app)/(tools)/tools/typography-composer/page.client"

function ThemeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 126"
      fill="none"
      className={className}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M47.12 85.9004L46.84 86.0504C46.95 86.0504 47.07 86.0504 47.19 86.0604C47.17 86.0104 47.14 85.9604 47.12 85.9004Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M32.48 99.3002C31.72 98.4102 30.78 97.6401 29.66 96.9901C28.54 96.3501 27.6 96.0302 26.84 96.0502C26.57 96.0602 26.35 96.1002 26.18 96.1802L26.12 96.2102C25.85 96.3602 25.71 96.6201 25.71 96.9801C25.71 97.6601 26.01 98.6301 26.6 99.8701C27.19 101.12 27.85 102.15 28.57 102.94L30.75 104.2C31.2 104.23 31.63 104.13 32.04 103.91L32.08 103.89C32.3 103.76 32.51 103.61 32.72 103.41C33.32 102.85 33.61 102.22 33.61 101.54C33.61 100.94 33.23 100.19 32.48 99.3002Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M25.71 85.6502C25.71 86.5502 25.51 87.2302 25.12 87.6802C25.01 87.8102 24.89 87.9102 24.77 87.9702L24.65 88.0302C24.37 88.1402 24.07 88.1002 23.73 87.9102C23.21 87.6002 22.75 87.0002 22.35 86.0902C21.96 85.1802 21.76 84.2701 21.76 83.3601C21.76 82.4501 21.96 81.7802 22.35 81.3302C22.48 81.1802 22.61 81.0702 22.75 81.0102H22.77C23.07 80.8602 23.39 80.9002 23.73 81.1002C24.26 81.4102 24.72 82.0102 25.12 82.9202C25.51 83.8302 25.71 84.7402 25.71 85.6502Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M23.45 59.4303L18.1 62.1003C15.47 55.8203 13.44 49.6203 12.03 43.5103C10.61 37.4103 9.9 31.7803 9.9 26.6503C9.9 25.5903 9.95 24.7303 10.05 24.0703C10.15 23.4103 10.27 22.8903 10.4 22.5103C11.91 23.9903 13.43 26.2103 14.94 29.1603C16.46 32.1103 17.84 35.4603 19.09 39.2003C20.34 42.8703 21.38 46.7403 22.2 50.8103C22.81 53.7803 23.22 56.6503 23.45 59.4303Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M47.38 63.5803C47.35 63.6803 47.32 63.7802 47.29 63.8802C46.43 66.5902 45.35 69.0703 44.04 71.3303C43.38 72.4703 42.67 73.5603 41.89 74.5803C41.67 74.8703 41.45 75.1603 41.22 75.4403C40.52 74.5503 39.81 73.6903 39.07 72.8503C38.9 72.6503 38.73 72.4603 38.55 72.2603C37.63 71.2403 36.67 70.2903 35.69 69.4203L47.38 63.5803Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M49.42 49.4603C49.42 54.3303 48.78 58.9003 47.5 63.1803C47.47 63.3103 47.42 63.4403 47.38 63.5703L35.69 69.4203C35.74 68.5503 35.8 67.6903 35.89 66.8403C36.15 64.2703 36.6 61.8203 37.22 59.4703C37.98 56.5903 38.9 54.0602 39.98 51.9102C40.06 51.7402 40.14 51.5702 40.23 51.4102C41.16 49.7002 42.15 48.3003 43.23 47.2003C43.6 46.8103 43.99 46.4602 44.38 46.1502C45.89 44.9502 47.41 44.4802 48.92 44.7502C49.05 45.2802 49.17 45.9303 49.27 46.7103C49.37 47.4803 49.42 48.4003 49.42 49.4603Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M55.64 102.42C55.02 100.83 54.12 98.8905 52.92 96.5905C52.52 95.8105 52.08 94.9904 51.61 94.1304C51.61 94.1204 51.59 94.1105 51.59 94.1005C50.93 92.9005 50.21 91.6204 49.42 90.2704C49.14 89.7904 48.87 89.3004 48.62 88.8104C48.5 88.6104 48.39 88.4004 48.28 88.1904C47.99 87.6304 47.63 86.9204 47.19 86.0604C47.07 86.0504 46.95 86.0504 46.84 86.0504L47.12 85.9004C47.03 85.7304 46.94 85.5604 46.85 85.3804C48.33 83.6504 49.65 81.7704 50.82 79.7504C52.33 77.1604 53.58 74.3605 54.6 71.3305C54.89 70.4705 55.15 69.5905 55.39 68.7105C56.12 66.0905 56.64 63.3805 56.96 60.6005C57.2 58.4505 57.32 56.2604 57.32 54.0204C57.32 52.6004 57.25 51.2505 57.1 49.9605C56.8 47.2705 56.18 44.8604 55.24 42.7404C54.2 40.3604 52.84 38.4805 51.16 37.0805C50.61 36.6205 50.03 36.2104 49.42 35.8604C48.98 35.6104 48.55 35.3904 48.12 35.1904H48.11C45.68 34.1204 43.43 34.0404 41.35 35.0004L40.91 35.2205C40.37 35.5005 39.85 35.8504 39.34 36.2704C37.27 37.9804 35.56 39.7404 34.24 41.5504C33.66 42.3204 33.16 43.1104 32.72 43.9004C32.06 45.0304 31.49 46.2304 30.99 47.4904C30.7 48.2504 30.42 49.0405 30.16 49.8505C29.99 50.4005 29.82 50.9604 29.66 51.5404C29.27 49.6504 28.82 47.7905 28.33 45.9505C27.83 44.1205 27.29 42.2804 26.7 40.4204C25.18 36.0704 22.94 30.9605 19.98 25.1005C17.02 19.2305 13.66 15.2104 9.9 13.0404C8.21 12.0704 6.77 11.7704 5.59 12.1704H5.58C5.02 12.3504 4.52 12.6904 4.08 13.1904C2.69 14.7404 2 17.7005 2 22.0805C2 28.2005 2.91 35.0204 4.72 42.5304C6.53 50.0304 9.11 57.7004 12.47 65.5304C11.88 66.0204 11.4 66.4104 11.04 66.6904C10.68 66.9704 10.3 67.2305 9.9 67.4505C6.87 69.1805 4.8 70.8304 3.68 72.4204C2.56 74.0004 2 76.1104 2 78.7604C2 84.4304 3.73 90.2405 7.19 96.2105C10.64 102.17 14.84 106.58 19.78 109.43C22.75 111.14 25.13 112.14 26.94 112.43L29.66 112.86L32.38 115.57C34.19 117.37 36.57 119.12 39.54 120.83C44.48 123.69 48.68 124.13 52.13 122.15C55.59 120.18 57.32 116.36 57.32 110.7C57.32 110.28 57.31 109.86 57.27 109.44C57.13 107.18 56.58 104.84 55.64 102.42Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M77.32 100.7C77.32 106.36 75.59 110.18 72.13 112.15L52.13 122.15C55.59 120.18 57.32 116.36 57.32 110.7C57.32 110.28 57.31 109.86 57.27 109.44C57.13 107.18 56.58 104.84 55.64 102.42C55.02 100.83 54.12 98.8905 52.92 96.5905C52.52 95.8105 52.08 94.9904 51.61 94.1304C51.61 94.1204 51.59 94.1105 51.59 94.1005C50.93 92.9005 50.21 91.6204 49.42 90.2704C49.14 89.7904 48.87 89.3004 48.62 88.8104C48.5 88.6104 48.39 88.4004 48.28 88.1904C47.99 87.6304 47.63 86.9204 47.19 86.0604C47.17 86.0104 47.14 85.9604 47.12 85.9004L53.94 82.2604L57.24 80.5004L61.13 78.4304L66.85 75.3804C67.44 76.5604 67.92 77.4904 68.28 78.1904C68.64 78.8904 69.02 79.5804 69.42 80.2704C72.45 85.4904 74.52 89.5404 75.64 92.4204C76.76 95.2904 77.32 98.0504 77.32 100.7Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M47.21 32.0805L41.35 35.0004L40.91 35.2205C40.37 35.5005 39.85 35.8504 39.34 36.2704C37.27 37.9804 35.56 39.7405 34.24 41.5505C33.66 42.3205 33.16 43.1104 32.72 43.9004C32.06 45.0304 31.49 46.2304 30.99 47.4904C30.7 48.2504 30.42 49.0405 30.16 49.8505C29.99 50.4005 29.82 50.9604 29.66 51.5404C29.27 49.6504 28.82 47.7905 28.33 45.9505C27.83 44.1205 27.29 42.2804 26.7 40.4204C25.18 36.0704 22.94 30.9605 19.98 25.1005C17.02 19.2305 13.66 15.2104 9.9 13.0404C8.21 12.0704 6.77 11.7704 5.59 12.1704L24.89 2.50041L25.43 2.23039C26.64 1.75039 28.13 2.02044 29.9 3.04044C33.66 5.21044 37.02 9.2305 39.98 15.1005C42.94 20.9605 45.18 26.0705 46.7 30.4205C46.87 30.9505 47.03 31.4804 47.19 32.0104C47.2 32.0304 47.2 32.0605 47.21 32.0805Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M77.32 44.0203C77.32 50.1403 76.41 55.9104 74.6 61.3304C72.79 66.7404 70.21 71.4303 66.85 75.3803L61.13 78.4304L57.24 80.5003L53.94 82.2603L47.12 85.9003C47.03 85.7303 46.94 85.5603 46.85 85.3803C48.33 83.6503 49.65 81.7703 50.82 79.7503C52.33 77.1603 53.58 74.3604 54.6 71.3304C54.89 70.4704 55.15 69.5904 55.39 68.7104C56.12 66.0904 56.64 63.3804 56.96 60.6004C57.2 58.4504 57.32 56.2603 57.32 54.0203C57.32 52.6003 57.25 51.2504 57.1 49.9604C56.8 47.2704 56.18 44.8603 55.24 42.7403C54.2 40.3603 52.84 38.4804 51.16 37.0804C50.61 36.6204 50.03 36.2103 49.42 35.8603C48.98 35.6103 48.55 35.3904 48.12 35.1904H48.11C45.68 34.1204 43.43 34.0403 41.35 35.0003L47.21 32.0804L60.32 25.5704H60.33C63.04 23.8304 66.07 23.9303 69.42 25.8603C71.92 27.3003 73.86 29.5903 75.24 32.7403C76.63 35.8803 77.32 39.6403 77.32 44.0203Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M23.63 62.4604C22.51 62.1904 21.49 62.0204 20.57 61.9404C19.65 61.8604 18.83 61.9105 18.1 62.1005L23.45 59.4304C23.54 60.4504 23.6 61.4604 23.63 62.4604Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M37.56 92.4902C37.56 93.4002 37.37 94.0802 36.97 94.5302C36.88 94.6402 36.78 94.7202 36.68 94.7802L36.48 94.8802C36.2 94.9802 35.91 94.9302 35.59 94.7502C35.06 94.4502 34.6 93.8402 34.2 92.9302C34.11 92.7202 34.03 92.5002 33.96 92.2902C33.73 91.5902 33.61 90.9003 33.61 90.2103C33.61 89.3003 33.81 88.6202 34.2 88.1702C34.26 88.1102 34.31 88.0502 34.37 88.0002C34.43 87.9502 34.49 87.9102 34.55 87.8802C34.58 87.8602 34.61 87.8403 34.64 87.8403C34.64 87.8403 34.66 87.8203 34.67 87.8203C34.95 87.7103 35.26 87.7603 35.59 87.9503C36.11 88.2503 36.57 88.8602 36.97 89.7702C37.1 90.0602 37.2 90.3402 37.28 90.6302C37.47 91.2502 37.56 91.8702 37.56 92.4902Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ShadowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 111 127"
      fill="none"
      className={className}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M88.6 102.088C87.75 106.988 86.26 111.098 84.15 114.398C82.17 117.498 79.63 119.888 76.54 121.588L75.47 122.128C74.89 122.418 74.29 122.678 73.67 122.908C65.58 125.938 56.27 124.418 45.74 118.328C39.68 114.828 33.99 110.228 28.69 104.508C23.38 98.7981 18.76 92.5481 14.83 85.7681C10.9 78.9881 7.78 71.8781 5.47 64.4581C3.16 57.0381 2 49.8481 2 42.8981C2 30.8081 5.36 22.0781 12.07 16.7181C13.22 15.7981 14.43 15.0181 15.69 14.3781L16.49 13.9781C19.72 12.4781 23.3 11.8281 27.22 12.0381C30.49 12.2081 33.99 12.9781 37.73 14.3281C36.43 21.7781 36.83 30.0181 38.92 39.0581C41.01 48.0881 44.62 57.0281 49.74 65.8581C54.87 74.6981 60.84 82.2881 67.66 88.6281C74.48 94.9681 81.46 99.4581 88.61 102.088H88.6Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M57.72 4.32816L37.72 14.3282C33.98 12.9782 30.48 12.2082 27.21 12.0382C23.29 11.8282 19.71 12.4782 16.48 13.9782L35.45 4.48816L36.43 3.99814C42.36 1.22814 49.46 1.33816 57.72 4.32816Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M108.6 92.0881C106.86 102.138 102.45 108.838 95.37 112.178L95.14 112.288L76.54 121.588C79.63 119.888 82.17 117.498 84.15 114.398C86.26 111.098 87.75 106.988 88.6 102.088L108.6 92.0881Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M108.6 92.0881L88.5998 102.088C81.4498 99.4581 74.4698 94.9681 67.6498 88.6281C60.8298 82.2881 54.8598 74.6981 49.7298 65.8581C44.6098 57.0281 40.9998 48.0881 38.9098 39.0581C36.8198 30.0181 36.4198 21.7781 37.7198 14.3281L57.7198 4.32812C56.4198 11.7781 56.8198 20.0181 58.9098 29.0581C60.9998 38.0881 64.6098 47.0281 69.7298 55.8581C74.8598 64.6981 80.8298 72.2881 87.6498 78.6281C94.4698 84.9681 101.45 89.4581 108.6 92.0881Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M95.9501 111.888L95.3701 112.178"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M15.6802 14.3781L16.4802 13.9781"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SpacingIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 99 125"
      fill="none"
      className={className}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M73.96 53.54L44.27 36.4L29.4299 27.83L22 23.55L2 12V80.14L76.23 122.99V54.85L73.96 53.54ZM24.27 84.47L9.42993 75.9V24.8L22 32.06L24.27 33.37V84.47ZM68.8 110.18L53.96 101.61V50.51L68.8 59.08V110.18Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M68.8 94.1899V110.18L53.96 101.61L66.05 95.5699L68.8 94.1899Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M68.8 59.08V94.19L66.05 95.57L53.96 101.61V50.51L68.8 59.08Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M24.2698 68.48V84.47L9.42969 75.9L21.9998 69.62L24.2698 68.48Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M24.2698 33.37V68.48L21.9998 69.62L9.42969 75.9V24.8L21.9998 32.06L24.2698 33.37Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M96.2295 44.85V112.99L76.2295 122.99V54.85L88.3196 48.8L96.2295 44.85Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M96.23 44.85L88.3201 48.8L76.23 54.85L73.96 53.54L44.27 36.4L29.4299 27.83L22 23.55L2 12L22 2L96.23 44.85Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function EasingIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 115 112"
      fill="none"
      className={className}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M22.5604 59.7502V69.1803L6.11035 59.6903V50.2502L22.5604 59.7502Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M91.8801 78.2502C91.3001 74.3002 90.2801 70.3203 88.8101 66.2903C87.4701 62.6103 85.7599 58.9003 83.6699 55.1503C83.3999 54.6603 83.1201 54.1703 82.8401 53.6803C80.5501 49.7303 78.09 46.1503 75.45 42.9403C70.72 37.1703 65.4201 32.5902 59.5601 29.2102C55.8101 27.0402 52.29 25.6302 49 24.9702C44.74 24.1002 40.8701 24.4903 37.4001 26.1603L36.8401 26.4403C36.6301 26.5403 36.43 26.6503 36.23 26.7703C36.11 26.8403 35.9801 26.9202 35.8601 27.0002C33.4101 28.4902 31.44 30.5103 29.98 33.0503C29.08 34.5803 28.3701 36.3102 27.8601 38.2202C27.6101 39.0802 27.41 39.9703 27.25 40.9103C26.86 43.0603 26.6699 45.4102 26.6699 47.9702C26.6699 48.0602 26.6699 48.1602 26.6699 48.2502C26.6699 48.8402 26.68 49.4403 26.7 50.0403C26.8 52.4403 27.06 54.8503 27.49 57.2803C27.97 60.0603 28.6701 62.8503 29.5901 65.6603C31.1601 70.4903 33.38 75.3502 36.22 80.2602C42.59 91.2502 50.37 99.4003 59.55 104.7C68.19 109.68 75.6101 110.68 81.8101 107.7L82.04 107.59C82.31 107.46 82.5701 107.32 82.8301 107.17C86.1001 105.33 88.5301 102.59 90.1301 98.9403C91.6701 95.4503 92.4399 91.1103 92.4399 85.9503C92.4399 83.4003 92.2501 80.8302 91.8701 78.2502H91.8801ZM71.1101 88.6803L68.9199 89.9303L64.05 81.4802L55.45 66.5902V45.7102L63.6699 50.4602V67.4403L74.78 86.5902L71.1101 88.6803Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M63.6702 50.4602V62.4802L55.4502 66.5902V45.7102L63.6702 50.4602Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M74.7803 86.5902L71.1104 88.6803L68.9202 89.9303L64.0503 81.4802L55.4502 66.5902L63.6702 62.4802V67.4403L74.7803 86.5902Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M42.5605 12.0002V21.4403L33.8105 25.8203L25.0405 30.2003L22.5605 31.4403V22.0002L42.5605 12.0002Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M42.5604 12.0002L22.5604 22.0002L22.0004 21.6803L19.5104 20.2402L6.11035 12.5103L26.1105 2.51025L42.5604 12.0002Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M22.5604 22.0002V31.4403L10.7504 24.6202L6.11035 21.9403V12.5103L19.5104 20.2402L22.0004 21.6803L22.5604 22.0002Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M35.8601 27.0001C33.4101 28.4901 31.44 30.5102 29.98 33.0502C29.08 34.5802 28.3701 36.3101 27.8601 38.2201L22.5601 40.8701L2 29.0001L10.75 24.6201L22.5601 31.4402L25.04 30.2002L33.8101 25.8202L35.8601 27.0001Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M27.2498 40.9103C26.8598 43.0603 26.6697 45.4102 26.6697 47.9702C26.6697 48.0602 26.6697 48.1602 26.6697 48.2502L26.0999 48.5403L22.5498 50.3103V40.8702L27.8499 38.2202C27.5999 39.0802 27.3997 39.9703 27.2397 40.9103H27.2498Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M27.5004 57.2802L22.5604 59.7501L6.11035 50.2501L14.8705 45.8701L22.5604 50.3102L26.1105 48.5402L26.6803 48.2501C26.6803 48.8401 26.6903 49.4402 26.7103 50.0402C26.8103 52.4402 27.0704 54.8502 27.5004 57.2802Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M22.5601 40.8702V50.3103L14.8701 45.8702L2 38.4403V29.0002L22.5601 40.8702Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M29.6006 65.6603L22.5605 69.1803V59.7502L27.5005 57.2803C27.9805 60.0603 28.6806 62.8503 29.6006 65.6603Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M112.45 75.9504C112.45 86.4804 109.25 93.5603 102.84 97.1703C102.64 97.2803 102.44 97.3903 102.25 97.4903L101.85 97.6904L82.0503 107.59C82.3203 107.46 82.5803 107.32 82.8403 107.17C86.1103 105.33 88.5404 102.59 90.1404 98.9404C91.6804 95.4504 92.4502 91.1104 92.4502 85.9504C92.4502 83.4004 92.2604 80.8303 91.8804 78.2503C91.3004 74.3003 90.2803 70.3203 88.8103 66.2903C87.4703 62.6103 85.7602 58.9003 83.6702 55.1503C83.4002 54.6603 83.1203 54.1704 82.8403 53.6804C80.5503 49.7304 78.0902 46.1504 75.4502 42.9404C70.7202 37.1704 65.4203 32.5903 59.5603 29.2103C55.8103 27.0403 52.2902 25.6303 49.0002 24.9703C44.7402 24.1003 40.8704 24.4903 37.4004 26.1603L57.0803 16.3204L57.3704 16.1703C63.5204 13.2103 70.9203 14.2203 79.5603 19.2103C88.6803 24.4703 96.4403 32.6304 102.84 43.6804C109.25 54.7304 112.45 65.4904 112.45 75.9504Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function BackgroundDecorationsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 93 100"
      fill="none"
      className={className}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M69.02 77.07C68.31 80.87 67.26 84.13 65.85 86.85C64.02 90.36 61.6 92.98 58.58 94.7C55.31 96.57 51.65 97.35 47.6 97.05C43.55 96.75 39.39 95.36 35.11 92.89C32.9 91.61 30.68 90.04 28.43 88.17C26.19 86.3 23.9 84.16 21.56 81.73C22.16 75.07 23.65 69.26 26.02 64.31C26.78 62.71 27.64 61.19 28.59 59.77C29.29 58.73 30.02 57.73 30.79 56.79C32.81 54.3 35.08 52.17 37.61 50.4C39.45 49.11 41.42 48.01 43.53 47.1C42.29 47.1 41.09 47.17 39.91 47.3C35.5 47.73 31.48 48.94 27.84 50.94C26.66 51.57 25.52 52.3 24.42 53.1C19.04 57.05 15.27 62.94 13.13 70.76C12.87 70.38 12.62 69.98 12.38 69.58L11.63 68.28C8.49 62.86 6.09 57.45 4.46 52.05C2.82 46.65 2 41.54 2 36.7C2 31.48 2.9 27.01 4.71 23.3C6.51 19.58 9.02 16.81 12.23 14.98L13.67 14.26C16.9 12.8 20.64 12.35 24.91 12.9C27.51 13.22 30.31 13.93 33.3 15C41.93 18.1 54.04 24.92 69.62 35.45C70.83 54.49 70.62 68.36 69.02 77.07Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M89.02 67.07C87.41 75.77 83.94 81.65 78.58 84.7L76.87 85.56L76.82 85.58L58.58 94.7C61.6 92.98 64.02 90.36 65.85 86.85C67.26 84.13 68.31 80.87 69.02 77.07C70.62 68.36 70.83 54.49 69.62 35.45L89.62 25.45C90.83 44.49 90.62 58.36 89.02 67.07Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M76.87 85.56L78.58 84.7C78.02 85.02 77.45 85.31 76.87 85.56Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M89.62 25.45L69.62 35.45C54.04 24.92 41.93 18.1 33.3 15C30.31 13.93 27.51 13.22 24.91 12.9C20.64 12.35 16.9 12.8 13.67 14.26L32.23 4.98005C37.65 1.89005 44.67 1.90001 53.3 5.00001C61.93 8.1 74.04 14.92 89.62 25.45Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M43.53 47.1C41.42 48.01 39.45 49.11 37.61 50.4C35.08 52.17 32.81 54.3 30.79 56.79C30.02 57.73 29.29 58.73 28.59 59.77C27.64 61.19 26.78 62.71 26.02 64.31L13.13 70.76C15.27 62.94 19.04 57.05 24.42 53.1C25.52 52.3 26.66 51.57 27.84 50.94C31.48 48.94 35.5 47.73 39.91 47.3C41.09 47.17 42.29 47.11 43.53 47.1Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function TypographyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 121 107"
      fill="none"
      className={className}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M118.08 82.02V94.27L98.0801 104.27V92.02L106.71 87.71L118.08 82.02Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M93.6101 77.1899L91.3901 78.2999L79.3901 84.2999V65.9199L83.3801 68.2299L90.0701 72.0899V75.1499L91.3901 75.9099L93.6101 77.1899Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M107.23 78.8199L98.7001 83.0799L90.0701 87.3999V90.4599L79.3901 84.2999L91.3901 78.2999L93.6101 77.1899L98.0801 79.7699L103.86 76.8799L107.23 78.8199Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M118.08 57.52V69.77L98.0801 79.77V67.52L99.3901 66.87L109.55 61.79L118.08 57.52Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M71.3899 66.46V75.65L63.3799 79.65V70.46L70.5899 66.86L71.3899 66.46Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M48.9602 48.3496L48.6802 48.4897L44.7002 50.4796V45.8896L48.6802 48.1896L48.9602 48.3496Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M83.3799 42.0796V46.1196L71.3899 52.1096V57.2696L70.5799 57.6696L63.3799 61.2696V52.0796L64.6999 51.4196L66.3199 50.6096L74.8499 46.3496L75.3699 46.0896L83.3799 42.0796Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M83.3799 42.0797L75.3699 46.0897L74.8499 46.3497L66.3199 50.6097L64.6999 51.4197L63.3799 52.0797L59.3799 45.1797L66.5899 41.5697L70.8499 39.4397L79.3799 35.1797L83.3799 42.0797Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M27.06 26.5198L22 23.5998L2 12.0498V48.7998L10 53.4198V44.2298L18.53 49.1598L20.68 50.3998V59.5898L28.68 64.2098V27.4598L27.06 26.5198ZM20.68 41.2098L10 35.0498V25.8598L18.53 30.7798L20.68 32.0198V41.2098Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M20.68 32.0198V41.2098L10 35.0498L18.53 30.7798L20.68 32.0198Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M18.53 30.7799L10 35.0499V25.8599L18.53 30.7799Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M48.6802 17.46V26.09L39.6402 30.61L36.6902 32.08V60.21L28.6802 64.21V27.46L31.6302 25.99L40.1602 21.72L48.6802 17.46Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M48.68 17.4598L40.16 21.7198L31.63 25.9898L28.68 27.4598L27.06 26.5198L22 23.5998L2 12.0498L22 2.0498L48.68 17.4598Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M18.53 49.16L10 53.42V44.23L18.53 49.16Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M79.3799 35.1796L70.8499 39.4396L66.5899 41.5696L59.3799 45.1796L57.4899 44.0896L56.6899 43.6296L48.6799 38.9996L36.6899 32.0796L39.6399 30.6096L48.6799 26.0896L56.6899 22.0796L79.3799 35.1796Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M71.3899 75.6499V75.9299L59.3799 81.9299L63.3799 79.6499L71.3899 75.6499Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M63.3799 61.2696V52.0796L59.3799 45.1796L57.4899 44.0896L56.6899 43.6296L48.6799 38.9996L36.6899 32.0796V68.8296L59.3799 81.9296L63.3799 79.6496V70.4596L59.3799 63.5496L62.1399 61.9796L63.3799 61.2696ZM55.3699 70.4296L44.6999 64.2696V59.6696L48.9699 62.1396L55.3699 65.8396V70.4296ZM55.3699 56.6496L48.6799 52.7796L44.6999 50.4796V45.8896L48.6799 48.1896L48.9599 48.3496L55.3699 52.0496V56.6496Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M55.3702 65.8396V70.4296L44.7002 64.2696L48.9702 62.1396L55.3702 65.8396Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M48.9702 62.1399L44.7002 64.2699V59.6699L48.9702 62.1399Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M55.3702 52.0496V56.6496L48.6802 52.7796L44.7002 50.4796L48.6802 48.4896L48.9602 48.3496L55.3702 52.0496Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M71.3899 57.27V66.46L70.5899 66.86L63.3799 70.46L59.3799 63.55L62.1399 61.98L63.3799 61.27L70.5799 57.67L71.3899 57.27Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M90.0701 75.1499V72.0899L83.3801 68.2299L79.3901 65.9199V84.2999L90.0701 90.4599V87.3999L98.0801 92.0199V104.27L71.3901 88.8599V52.1099L76.1701 54.8699L82.1401 58.3199L91.3901 63.6599L98.0801 67.5199V79.7699L93.6101 77.1899L91.3901 75.9099L90.0701 75.1499Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M118.08 57.5199L109.55 61.7899L99.3901 66.8699L98.0801 67.5199L91.3901 63.6599L82.1401 58.3199L76.1701 54.8699L71.3901 52.1099L83.3801 46.1199L91.3901 42.1099L118.08 57.5199Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M118.08 82.0199L106.71 87.7099L98.0798 92.0199L90.0698 87.3999L98.6998 83.0799L107.23 78.8199L110.07 77.3999L118.08 82.0199Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ToolsInformationPageClient() {
  const [frontCard, setFrontCard] = useState<"easing" | "shadow">("easing")

  const swapCards = () => {
    setFrontCard((prev) => (prev === "easing" ? "shadow" : "easing"))
  }

  return (
    <div className="relative min-h-screen overflow-clip">
      <StripeBgGuides columnCount={6} animated={false} />
      <div className="relative container flex h-full w-full flex-col items-center justify-center px-6">
        <Spacer size={"5xl"} sizeMobile={"3xl"} />
        <div className="relative">
          <div className="text-brand/40 md:text-brand absolute -top-4 -left-16 -translate-y-1/4 sm:-left-24 md:top-1/2 md:-left-72 md:-translate-y-1/2 lg:-left-80">
            <ThemeIcon className="size-20 sm:size-24 md:size-40" />
          </div>
          <div className="text-brand/40 md:text-brand absolute -right-16 -bottom-4 translate-y-1/4 sm:-right-24 md:top-1/2 md:-right-72 md:-translate-y-1/2 lg:-right-80">
            <ShadowIcon className="size-20 sm:size-24 md:size-40" />
          </div>
          <h1 className="display text-center text-[2.5rem] leading-[0.9] tracking-tight max-lg:text-[3rem] sm:text-5xl md:text-8xl">
            Powerful Tools for
            <br />
            Design Engineers
          </h1>
        </div>
        <Spacer size={"2xl"} sizeMobile={"md"} />
        <p className="text-muted-foreground text-center text-lg md:text-3xl">
          Professional tools at your fingertips.
          <br />
          Design faster. Build better. For free.
        </p>
        <Spacer size={"3xl"} sizeMobile={"lg"} />
        <div className="flex flex-row gap-2">
          <Link href="/tools">
            <HeroButton>Explore Tools</HeroButton>
          </Link>
          <Button
            asChild
            size={"lg"}
            variant={"outline"}
            className="rounded-full"
          >
            <Link href="/">Back Home</Link>
          </Button>
        </div>
        <Spacer size={"6xl"} sizeMobile={"6xl"} />
      </div>
      {/* Stacked Tools - Easing & Shadow Composer */}
      <div className="relative px-6 lg:px-20">
        <div className="relative">
          {/* Shadow Composer */}
          <motion.div
            className="absolute inset-0"
            animate={{
              zIndex: frontCard === "shadow" ? 10 : 0,
              x: frontCard === "shadow" ? 0 : 24,
              y: frontCard === "shadow" ? 0 : -24,
              right: frontCard === "shadow" ? 0 : -32,
              rotateZ: frontCard === "shadow" ? 0 : 1,
            }}
            transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="bg-background text-foreground dark relative h-full rounded-3xl border">
              <ShadowComposerPageClient hasBackgroundDecoration={false} />
              {frontCard === "easing" && (
                <div
                  className="absolute inset-0 z-50 cursor-pointer rounded-3xl transition-colors hover:bg-white/5"
                  onClick={swapCards}
                />
              )}
            </div>
          </motion.div>
          {/* Easing Composer */}
          <motion.div
            className="relative"
            animate={{
              zIndex: frontCard === "easing" ? 10 : 0,
              x: frontCard === "easing" ? 0 : 24,
              y: frontCard === "easing" ? 0 : -24,
              marginRight: frontCard === "easing" ? 0 : -32,
              rotateZ: frontCard === "easing" ? 0 : 1,
            }}
            transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="bg-background text-foreground dark relative rounded-3xl border">
              <EasingComposerClient hasBackgroundDecoration={false} />
              {frontCard === "shadow" && (
                <div
                  className="absolute inset-0 z-50 cursor-pointer rounded-3xl transition-colors hover:bg-white/5"
                  onClick={swapCards}
                />
              )}
            </div>
          </motion.div>
        </div>
        {/* Mobile swap button */}
        <button
          onClick={swapCards}
          className="bg-brand text-primary-foreground absolute -bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium shadow-lg transition-opacity hover:opacity-90"
        >
          <svg
            className="size-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
            />
          </svg>
          Swap Tool
        </button>
      </div>

      <Spacer size="5xl" />

      {/* Theme Generator */}
      <div className="px-6 lg:px-20">
        <div className="bg-background text-foreground dark rounded-3xl">
          <ThemeGeneratorPageClient hasBackgroundDecoration={false} />
        </div>
      </div>

      <Spacer size="5xl" />

      {/* Typography Composer */}
      <div className="px-6 lg:px-20">
        <div className="bg-background text-foreground dark rounded-3xl">
          <TypographyComposerClient hasBackgroundDecoration={false} />
        </div>
      </div>

      <Spacer size="5xl" />

      {/* Spacing Generator */}
      <div className="px-6 lg:px-20">
        <div className="bg-background text-foreground dark rounded-3xl">
          <SpacingGeneratorClient hasBackgroundDecoration={false} />
        </div>
      </div>

      <Spacer size="5xl" />

      {/* Background Decorations */}
      <div className="px-6 lg:px-20">
        <div className="bg-background text-foreground dark rounded-3xl">
          <BackgroundDecorationsPageClient hasBackgroundDecoration={false} />
        </div>
      </div>

      <Spacer size="5xl" />

      {/* Tool Icons Grid */}
      <div className="container px-6">
        <div className="grid grid-cols-3 gap-8 md:grid-cols-6">
          <div className="text-brand flex items-center justify-center">
            <ThemeIcon className="size-16 md:size-20" />
          </div>
          <div className="text-brand flex items-center justify-center">
            <ShadowIcon className="size-16 md:size-20" />
          </div>
          <div className="text-brand flex items-center justify-center">
            <EasingIcon className="size-16 md:size-20" />
          </div>
          <div className="text-brand flex items-center justify-center">
            <SpacingIcon className="size-16 md:size-20" />
          </div>
          <div className="text-brand flex items-center justify-center">
            <TypographyIcon className="size-16 md:size-20" />
          </div>
          <div className="text-brand flex items-center justify-center">
            <BackgroundDecorationsIcon className="size-16 md:size-20" />
          </div>
        </div>
      </div>

      <Spacer size="5xl" />

      {/* Why Pitsi - Purpose Section */}
      <PurposeSection />

      <Spacer size="5xl" />

      <FeatureBentoCardsBlock />

      <Spacer size="5xl" />

      <FeatureSolutionsGridBlock />

      <Spacer size="5xl" />

      <FeatureValuesBlock />

      <Spacer size="5xl" />
    </div>
  )
}
