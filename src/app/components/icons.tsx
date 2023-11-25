import { type FC } from "react";
import Link from "next/link";
import { ProjectInfo } from "../models/project.model";

export const dextools: FC<{ fill: string; config: ProjectInfo }> = ({
  fill,
  config,
}) => (
  <Link href={config.dextools} target="_blank">
    <svg
      fill="none"
      height="100%"
      viewBox="0 -.058 754.779 867.058"
      width="auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={fill}
        fillRule="evenodd"
        clipRule="evenodd"
        d="m280.395 49.025c-51.649 26.905-93.905 49.672-93.896 50.598.023 2.39 123.959 65.156 128.358 65.003 2.001-.067 16.517-6.749 32.256-14.847l28.621-14.721 31.258 16.067 31.256 16.07 51.188-23.001c77.13-34.659 85.141-38.457 83.885-39.733-1.666-1.693-29.331-16.555-104.388-56.07-36.274-19.098-71.481-37.823-78.24-41.612-6.758-3.789-13.21-6.837-14.337-6.778s-44.311 22.12-95.961 49.024zm-226.532 117.306-53.766 27.772v121.886c0 67.038.706 121.885 1.572 121.885.863 0 27.316-11.467 58.783-25.482l57.213-25.482v-128.476l27.958 15.232a33224.294 33224.294 0 0 0 64.671 35.109l36.712 19.877 16.336-7.387a3822.03 3822.03 0 0 0 30.674-14.056c7.885-3.672 27.241-12.39 43.012-19.377 15.771-6.99 30.37-14.019 32.44-15.621 2.75-2.128-30.782-20.658-124.025-68.54-70.285-36.093-130.046-65.509-132.802-65.368s-29.206 12.752-58.778 28.028zm529.148 7.799c-36.618 16.531-66.604 30.717-66.638 31.526-.032.808 19.926 12.675 44.354 26.367 24.426 13.695 44.412 25.632 44.412 26.531 0 .897-21.615 11.37-48.03 23.278-26.419 11.905-93.194 42.061-148.393 67.014l-184.954 83.602c-46.525 21.032-88.462 39.989-93.193 42.132-95.03 43.019-121.15 54.956-124.737 57.005-3.607 2.063-4.424 14.048-5.066 74.201l-.766 71.744 48.08 24.498 48.079 24.497 66.669-30.088c36.669-16.547 66.669-30.953 66.669-32.014 0-1.058-6.776-5.473-15.054-9.815-8.282-4.342-25.378-13.954-37.995-21.364-12.616-7.411-25.196-14.21-27.958-15.112-2.761-.899-4.98-2.472-4.935-3.498.046-1.023 29.404-14.968 65.236-30.991 69.597-31.117 122.858-55.1 237.202-106.809a305577.39 305577.39 0 0 1 153.411-69.31c44.948-20.288 97.208-43.983 116.134-52.655l34.41-15.767.765-72.561.769-72.558-48.765-25.03c-26.822-13.765-49.748-24.994-50.95-24.953-1.201.038-32.141 13.595-68.756 30.13zm153.872 261.772c-7.186 3.51-21.38 10.082-31.542 14.603s-29.446 13.222-42.852 19.339l-24.374 11.117-.556 63.702c-.307 35.035-1.597 63.545-2.867 63.36-2.885-.429-48.567-23.857-94.487-48.463-33.143-17.757-35.225-18.463-43.013-14.606-4.502 2.231-31.413 14.3-59.801 26.825-28.389 12.523-52.541 23.587-53.677 24.589-1.133 1 56.002 31.967 126.97 68.819l129.029 67.003 55.119-28.513c30.312-15.68 56.088-29.983 57.275-31.782 2.672-4.045 2.443-242.93-.232-242.607-1.058.127-7.806 3.104-14.992 6.614zm-305.227 280.391a25013.26 25013.26 0 0 0 -28.675 12.349c-28.856 12.484-23.201 12.898-57.531-4.192-22.865-11.382-32.721-14.894-36.999-13.189-3.209 1.278-30.826 13.703-61.376 27.61-30.548 13.907-56.602 25.285-57.898 25.285-12.817 0 8.491 12.731 90.714 54.207l96.428 48.637 40.572-20.03c22.315-11.017 67.323-33.078 100.021-49.024 32.695-15.95 59.042-29.413 58.549-29.921-.497-.506-27.893-14.574-60.883-31.262l-59.982-30.338z"
      />
    </svg>
  </Link>
);

export const etherscan: FC<{ fill: string; config: ProjectInfo }> = ({
  fill,
  config,
}) => (
  <Link href={config.etherscan} target="_blank">
    <svg
      width="auto"
      height="100%"
      viewBox="0 0 122 122"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={fill}
        d="M25.29 57.9139C25.2901 57.2347 25.4244 56.5623 25.6851 55.9352C25.9458 55.308 26.3278 54.7386 26.8092 54.2595C27.2907 53.7804 27.8619 53.4011 28.4903 53.1434C29.1187 52.8858 29.7918 52.7548 30.471 52.7579L39.061 52.7859C40.4305 52.7859 41.744 53.33 42.7124 54.2984C43.6809 55.2669 44.225 56.5803 44.225 57.9499V90.4299C45.192 90.1429 46.434 89.8369 47.793 89.5169C48.737 89.2952 49.5783 88.761 50.1805 88.0009C50.7826 87.2409 51.1102 86.2996 51.11 85.3299V45.0399C51.11 43.6702 51.654 42.3567 52.6224 41.3881C53.5908 40.4195 54.9043 39.8752 56.274 39.8749H64.881C66.2506 39.8752 67.5641 40.4195 68.5325 41.3881C69.5009 42.3567 70.045 43.6702 70.045 45.0399V82.4329C70.045 82.4329 72.2 81.5609 74.299 80.6749C75.0787 80.3452 75.7441 79.7931 76.2122 79.0877C76.6803 78.3822 76.9302 77.5545 76.931 76.7079V32.1299C76.931 30.7605 77.4749 29.4472 78.4431 28.4788C79.4113 27.5103 80.7245 26.9662 82.0939 26.9659H90.701C92.0706 26.9659 93.384 27.51 94.3525 28.4784C95.3209 29.4468 95.865 30.7603 95.865 32.1299V68.8389C103.327 63.4309 110.889 56.9269 116.89 49.1059C117.761 47.9707 118.337 46.6377 118.567 45.2257C118.797 43.8138 118.674 42.3668 118.209 41.0139C115.431 33.0217 111.016 25.6973 105.245 19.5096C99.474 13.3218 92.4749 8.40687 84.6955 5.07934C76.9161 1.75182 68.5277 0.0849617 60.0671 0.185439C51.6065 0.285917 43.2601 2.15152 35.562 5.66286C27.8638 9.17419 20.9834 14.2539 15.3611 20.577C9.73881 26.9001 5.49842 34.3272 2.91131 42.3832C0.324207 50.4391 -0.552649 58.9464 0.336851 67.3607C1.22635 75.775 3.86263 83.911 8.07696 91.2479C8.81111 92.5135 9.89118 93.5434 11.1903 94.2165C12.4894 94.8896 13.9536 95.178 15.411 95.0479C17.039 94.9049 19.066 94.7019 21.476 94.4189C22.5251 94.2998 23.4937 93.7989 24.1972 93.0116C24.9008 92.2244 25.2901 91.2058 25.291 90.1499L25.29 57.9139Z"
      />
      <path
        fill={fill}
        d="M25.1021 110.009C34.1744 116.609 44.8959 120.571 56.0802 121.456C67.2646 122.34 78.4757 120.114 88.4731 115.022C98.4705 109.93 106.864 102.172 112.726 92.6059C118.587 83.0395 121.688 72.0381 121.685 60.8188C121.685 59.4188 121.62 58.0337 121.527 56.6567C99.308 89.7947 58.2831 105.287 25.104 110.004"
      />
    </svg>
  </Link>
);

export const telegram: FC<{ fill: string; config: ProjectInfo }> = ({
  fill,
  config,
}) => (
  <Link href={config.telegram} target="_blank">
    <svg
      width="auto"
      height="100%"
      viewBox="0 0 122 26"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M24,24l-24,0l0,-24l24,0l0,24Zm-7.744,-5.148c0.215,0.153 0.491,0.191 0.738,0.097c0.246,-0.093 0.428,-0.304 0.483,-0.56c0.579,-2.722 1.985,-9.614 2.512,-12.09c0.039,-0.187 -0.027,-0.381 -0.173,-0.506c-0.147,-0.124 -0.351,-0.16 -0.532,-0.093c-2.795,1.034 -11.404,4.264 -14.923,5.567c-0.223,0.082 -0.368,0.297 -0.361,0.533c0.008,0.235 0.167,0.44 0.395,0.509c1.578,0.471 3.65,1.128 3.65,1.128c0,0 0.967,2.924 1.472,4.41c0.063,0.187 0.21,0.334 0.402,0.384c0.193,0.05 0.397,-0.002 0.541,-0.138c0.811,-0.765 2.064,-1.948 2.064,-1.948c0,0 2.381,1.746 3.732,2.707Zm-7.34,-5.784l1.119,3.692l0.249,-2.338c0,0 4.324,-3.9 6.79,-6.124c0.072,-0.065 0.082,-0.174 0.022,-0.251c-0.06,-0.077 -0.169,-0.095 -0.251,-0.043c-2.857,1.825 -7.929,5.064 -7.929,5.064Z"
      />
    </svg>
  </Link>
);

export const uniswap: FC<{ fill: string; config: ProjectInfo }> = ({
  fill,
  config,
}) => (
  <Link href={config.uniswap} target="_blank">
    <svg
      width="auto"
      height="100%"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 168.3 193.8"
      enableBackground="new 0 0 168.3 193.8"
    >
      <path
        fill={fill}
        d="M66,44.1c-2.1-0.3-2.2-0.4-1.2-0.5c1.9-0.3,6.3,0.1,9.4,0.8c7.2,1.7,13.7,6.1,20.6,13.8l1.8,2.1l2.6-0.4c11.1-1.8,22.5-0.4,32,4c2.6,1.2,6.7,3.6,7.2,4.2c0.2,0.2,0.5,1.5,0.7,2.8c0.7,4.7,0.4,8.2-1.1,10.9c-0.8,1.5-0.8,1.9-0.3,3.2c0.4,1,1.6,1.7,2.7,1.7c2.4,0,4.9-3.8,6.1-9.1l0.5-2.1l0.9,1c5.1,5.7,9.1,13.6,9.7,19.2l0.2,1.5l-0.9-1.3c-1.5-2.3-2.9-3.8-4.8-5.1c-3.4-2.3-7-3-16.5-3.5c-8.6-0.5-13.5-1.2-18.3-2.8c-8.2-2.7-12.4-6.2-22.1-19.1c-4.3-5.7-7-8.8-9.7-11.4C79.6,48.3,73.7,45.3,66,44.1z"
      />
      <path
        fill={fill}
        d="M140.5,56.8c0.2-3.8,0.7-6.3,1.8-8.6c0.4-0.9,0.8-1.7,0.9-1.7c0.1,0-0.1,0.7-0.4,1.5c-0.8,2.2-0.9,5.3-0.4,8.8c0.7,4.5,1,5.1,5.8,10c2.2,2.3,4.8,5.2,5.8,6.4l1.7,2.2l-1.7-1.6c-2.1-2-6.9-5.8-8-6.3c-0.7-0.4-0.8-0.4-1.3,0.1c-0.4,0.4-0.5,1-0.5,3.9c-0.1,4.5-0.7,7.3-2.2,10.2c-0.8,1.5-0.9,1.2-0.2-0.5c0.5-1.3,0.6-1.9,0.6-6.2c0-8.7-1-10.8-7.1-14.3c-1.5-0.9-4.1-2.2-5.6-2.9c-1.6-0.7-2.8-1.3-2.7-1.3c0.2-0.2,6.1,1.5,8.4,2.5c3.5,1.4,4.1,1.5,4.5,1.4C140.2,60.1,140.4,59.3,140.5,56.8z"
      />
      <path
        fill={fill}
        d="M70.1,71.7c-4.2-5.8-6.9-14.8-6.3-21.5l0.2-2.1l1,0.2c1.8,0.3,4.9,1.5,6.4,2.4c4,2.4,5.8,5.7,7.5,13.9c0.5,2.4,1.2,5.2,1.5,6.1c0.5,1.5,2.4,5,4,7.2c1.1,1.6,0.4,2.4-2.1,2.2C78.5,79.7,73.4,76.2,70.1,71.7z"
      />
      <path
        fill={fill}
        d="M135.4,115.2c-19.8-8-26.8-14.9-26.8-26.6c0-1.7,0.1-3.1,0.1-3.1c0.1,0,0.8,0.6,1.7,1.3c4,3.2,8.5,4.6,21,6.4c7.3,1.1,11.5,1.9,15.3,3.2c12.1,4,19.6,12.2,21.4,23.3c0.5,3.2,0.2,9.3-0.6,12.5c-0.7,2.5-2.7,7.1-3.2,7.2c-0.1,0-0.3-0.5-0.3-1.3c-0.2-4.2-2.3-8.2-5.8-11.3C154,123.2,148.6,120.5,135.4,115.2z"
      />
      <path
        fill={fill}
        d="M121.4,118.5c-0.2-1.5-0.7-3.4-1-4.2l-0.5-1.5l0.9,1.1c1.3,1.5,2.3,3.3,3.2,5.8c0.7,1.9,0.7,2.5,0.7,5.6c0,3-0.1,3.7-0.7,5.4c-1,2.7-2.2,4.6-4.2,6.7c-3.6,3.7-8.3,5.7-15,6.6c-1.2,0.1-4.6,0.4-7.6,0.6c-7.5,0.4-12.5,1.2-17,2.8c-0.6,0.2-1.2,0.4-1.3,0.3c-0.2-0.2,2.9-2,5.4-3.2c3.5-1.7,7.1-2.6,15-4c3.9-0.6,7.9-1.4,8.9-1.8C118.1,135.6,123,127.9,121.4,118.5z"
      />
      <path
        fill={fill}
        d="M130.5,134.6c-2.6-5.7-3.2-11.1-1.8-16.2c0.2-0.5,0.4-1,0.6-1c0.2,0,0.8,0.3,1.4,0.7c1.2,0.8,3.7,2.2,10.1,5.7c8.1,4.4,12.7,7.8,15.9,11.7c2.8,3.4,4.5,7.3,5.3,12.1c0.5,2.7,0.2,9.2-0.5,11.9c-2.2,8.5-7.2,15.3-14.5,19.2c-1.1,0.6-2,1-2.1,1c-0.1,0,0.3-1,0.9-2.2c2.4-5.1,2.7-10,0.9-15.5c-1.1-3.4-3.4-7.5-8-14.4C133.2,139.6,131.9,137.5,130.5,134.6z"
      />
      <path
        fill={fill}
        d="M56,165.2c7.4-6.2,16.5-10.6,24.9-12c3.6-0.6,9.6-0.4,12.9,0.5c5.3,1.4,10.1,4.4,12.6,8.1c2.4,3.6,3.5,6.7,4.6,13.6c0.4,2.7,0.9,5.5,1,6.1c0.8,3.6,2.4,6.4,4.4,7.9c3.1,2.3,8.5,2.4,13.8,0.4c0.9-0.3,1.7-0.6,1.7-0.5c0.2,0.2-2.5,2-4.3,2.9c-2.5,1.3-4.5,1.7-7.2,1.7c-4.8,0-8.9-2.5-12.2-7.5c-0.7-1-2.1-3.9-3.3-6.6c-3.5-8.1-5.3-10.5-9.4-13.2c-3.6-2.3-8.2-2.8-11.7-1.1c-4.6,2.2-5.8,8.1-2.6,11.7c1.3,1.5,3.7,2.7,5.7,3c3.7,0.5,6.9-2.4,6.9-6.1c0-2.4-0.9-3.8-3.3-4.9c-3.2-1.4-6.7,0.2-6.6,3.3c0,1.3,0.6,2.1,1.9,2.7c0.8,0.4,0.8,0.4,0.2,0.3c-2.9-0.6-3.6-4.2-1.3-6.5c2.8-2.8,8.7-1.6,10.7,2.3c0.8,1.6,0.9,4.8,0.2,6.8c-1.7,4.4-6.5,6.7-11.4,5.4c-3.3-0.9-4.7-1.8-8.7-5.9c-7-7.2-9.7-8.6-19.7-10.1l-1.9-0.3L56,165.2z"
      />
      <path
        fill={fill}
        d="M3.4,4.3c23.3,28.3,59.2,72.3,61,74.7c1.5,2,0.9,3.9-1.6,5.3c-1.4,0.8-4.3,1.6-5.7,1.6c-1.6,0-3.5-0.8-4.8-2.1c-0.9-0.9-4.8-6.6-13.6-20.3c-6.7-10.5-12.4-19.2-12.5-19.3C25.8,44,25.8,44,38,65.8C45.7,79.5,48.2,84.4,48.2,85c0,1.3-0.4,2-2,3.8c-2.7,3-3.9,6.4-4.8,13.5c-1,7.9-3.7,13.5-11.4,23c-4.5,5.6-5.2,6.6-6.3,8.9c-1.4,2.8-1.8,4.4-2,8c-0.2,3.8,0.2,6.2,1.3,9.8c1,3.2,2.1,5.3,4.8,9.4c2.3,3.6,3.7,6.3,3.7,7.3c0,0.8,0.2,0.8,3.8,0c8.6-2,15.7-5.4,19.6-9.6c2.4-2.6,3-4,3-7.6c0-2.3-0.1-2.8-0.7-4.2c-1-2.2-2.9-4-7-6.8c-5.4-3.7-7.7-6.7-8.3-10.7c-0.5-3.4,0.1-5.7,3.1-12c3.1-6.5,3.9-9.2,4.4-15.8c0.3-4.2,0.8-5.9,2-7.2c1.3-1.4,2.4-1.9,5.5-2.3c5.1-0.7,8.4-2,11-4.5c2.3-2.1,3.3-4.2,3.4-7.3l0.1-2.3L70.1,77C65.4,71.6,0.3,0,0,0C-0.1,0,1.5,1.9,3.4,4.3z M34.1,146.5c1.1-1.9,0.5-4.3-1.3-5.5c-1.7-1.1-4.3-0.6-4.3,0.9c0,0.4,0.2,0.8,0.8,1c0.9,0.5,1,1,0.3,2.1c-0.7,1.1-0.7,2.1,0.2,2.8C31.2,148.9,33.1,148.3,34.1,146.5z"
      />
      <path
        fill={fill}
        d="M74.6,93.9c-2.4,0.7-4.7,3.3-5.4,5.9c-0.4,1.6-0.2,4.5,0.5,5.4c1.1,1.4,2.1,1.8,4.9,1.8c5.5,0,10.2-2.4,10.7-5.3c0.5-2.4-1.6-5.7-4.5-7.2C79.3,93.7,76.2,93.4,74.6,93.9z M81,98.9c0.8-1.2,0.5-2.5-1-3.4c-2.7-1.7-6.8-0.3-6.8,2.3c0,1.3,2.1,2.7,4.1,2.7C78.6,100.5,80.4,99.7,81,98.9z"
      />
    </svg>
  </Link>
);

export const twitter: FC<{ fill: string; config: ProjectInfo }> = ({
  fill,
  config,
}) => (
  <Link href={config.twitter} target="_blank">
    <svg
      width="auto"
      height="100%"
      viewBox="0 0 1220 1249"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={fill}
        d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
      />
    </svg>
  </Link>
);

export const LockIcon: FC<{ fill: string; config: ProjectInfo }> = ({
  fill,
  config,
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
    <path
      fill={fill}
      d="M224 64c44.2 0 80 35.8 80 80v48H144V144c0-44.2 35.8-80 80-80zM80 144v48H0V512H448V192H368V144C368 64.5 303.5 0 224 0S80 64.5 80 144zM256 320v64 32H192V384 320 288h64v32z"
    />
  </svg>
);

export const RewardIcon: FC<{ fill: string; config: ProjectInfo }> = ({
  fill,
  config,
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
    <path
      fill={fill}
      d="M0 160v96H128V32C57.3 32 0 89.3 0 160zM0 480H128V288H0V480zm416 0V288H352v64H224V288H160V480H416zm160 0V288H448V480H576zm0-320c0-70.7-57.3-128-128-128V256H576V160zM416 256V32H160V256h64V192H352v64h64zM304 240V224H272v16 64 16h32V304 240z"
    />
  </svg>
);

export const TaxIcon: FC<{ fill: string; config: ProjectInfo }> = ({
  fill,
  config,
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
    <path
      fill={fill}
      d="M512 112v64h24L640 88 536 0H512V64L384 64l-24 0 0 48 24 0 128 0zM256 400l-128 0 0-64H104L0 424l104 88h24l0-64 128 0 24 0 0-48-24 0zm64-248l0-88H32V355l51.3-43.4 8.9-7.6H104h24 32v32 24l96 0 64 0 0 88H608V157l-51.3 43.4-8.9 7.6H536 512 480V176 152l-96 0-64 0zM96 192V128h64c0 35.3-28.7 64-64 64zM480 384c0-35.3 28.7-64 64-64v64H480zM320 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
    />
  </svg>
);

export const icons = [dextools, etherscan, telegram, uniswap, twitter];