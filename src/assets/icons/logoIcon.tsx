import React, { FC } from "react";
import { IIconsProps } from "@/assets/types";

export const LogoIcon: FC<IIconsProps> = ({ width, height, className }) => {
  return (
    <div className={className}>
      <svg width={width ?? 172} height={height ?? 30} fill="none">
        <path
          d="M57.876 15.633c-.162 1.98-.878 3.546-2.125 4.72-1.247 1.174-2.84 1.75-4.757 1.75-2.217 0-3.995-.76-5.311-2.257-1.34-1.496-2.01-3.522-2.01-6.055 0-2.348.67-4.351 1.987-5.963 1.316-1.612 3.14-2.417 5.473-2.417 1.616 0 3.071.483 4.341 1.427 1.27.944 2.01 2.187 2.194 3.753h-1.524c-.231-1.174-.808-2.118-1.732-2.809-.924-.69-2.032-1.036-3.325-1.036-1.756 0-3.187.645-4.273 1.934-1.085 1.29-1.616 2.993-1.616 5.111s.531 3.822 1.616 5.088c1.063 1.267 2.494 1.911 4.25 1.911 1.547 0 2.77-.483 3.671-1.427.924-.944 1.455-2.187 1.64-3.753h1.5v.023ZM58.453 5.802h1.64l5.242 10.637L70.53 5.802h1.616l-6.374 13.17c-.623 1.266-1.223 2.095-1.8 2.51-.578.413-1.317.598-2.194.598-.509 0-1.063-.138-1.663-.415v-1.29c.439.277 1.039.392 1.801.392.877 0 1.686-.736 2.379-2.187l.207-.414-6.05-12.364ZM73.556 21.757V5.802h1.524v14.643h7.805V5.802h1.524v14.643h7.805V5.802h1.525v15.932H73.556v.023ZM96.995 21.757V5.802h1.524V20.1l9.075-14.298h1.986v15.932h-1.524V7.437l-9.075 14.297h-1.986v.023ZM126.554 15.68c-.162 1.956-.855 3.522-2.102 4.696-1.247 1.174-2.863 1.75-4.872 1.75-2.264 0-4.065-.76-5.427-2.28-1.363-1.519-2.032-3.545-2.032-6.078 0-1.52.3-2.9.877-4.144a7.077 7.077 0 0 1 2.633-3.016c1.177-.76 2.54-1.151 4.11-1.151 1.686 0 3.164.46 4.434 1.404 1.247.944 2.009 2.28 2.263 4.052h-2.794c-.185-.944-.647-1.703-1.34-2.256-.692-.553-1.57-.806-2.609-.806-1.062 0-1.963.3-2.702.898-.739.599-1.27 1.335-1.57 2.21a8.715 8.715 0 0 0-.462 2.855c0 .783.092 1.497.277 2.188.185.69.439 1.312.808 1.888.37.575.855 1.036 1.478 1.38.624.346 1.34.507 2.171.507 2.379 0 3.741-1.358 4.087-4.075h2.772v-.023ZM140.548 5.802v2.417h-5.104v13.515h-2.817V8.22h-5.104V5.802h13.025ZM149.276 5.434c2.264 0 4.088.782 5.52 2.325 1.408 1.543 2.124 3.546 2.124 6.032 0 2.487-.716 4.49-2.124 6.032-1.432 1.543-3.28 2.326-5.543 2.326-2.286 0-4.133-.76-5.565-2.303-1.409-1.542-2.125-3.545-2.125-6.055 0-2.417.693-4.42 2.079-5.986 1.385-1.589 3.256-2.371 5.634-2.371Zm-.023 2.348c-1.478 0-2.632.53-3.533 1.612-.877 1.082-1.316 2.532-1.316 4.328 0 1.842.439 3.316 1.316 4.42.878 1.083 2.078 1.635 3.58 1.635 1.454 0 2.609-.552 3.487-1.634.877-1.105 1.316-2.556 1.316-4.375s-.439-3.27-1.316-4.351c-.878-1.105-2.056-1.635-3.534-1.635ZM159.507 5.802h6.928c1.732 0 3.071.414 4.064 1.22.993.806 1.501 2.026 1.501 3.638 0 1.52-.462 2.717-1.386 3.615-.923.898-2.193 1.335-3.787 1.335h-4.503v6.124h-2.817V5.802Zm2.794 2.325v5.227h3.903c2.032 0 3.048-.875 3.048-2.625 0-1.727-1.109-2.602-3.302-2.602h-3.649Z"
          fill={"currentColor"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.054 4.282A14.649 14.649 0 0 0 15.686 0C12.66 0 9.843.92 7.51 2.487c-.577.138-2.24.552-3.88 1.335C1.576 4.766.052 6.447.052 6.447a.18.18 0 0 0 0 .253c.046.046.092.046.139.046.554-.023 1.085.023 1.5.184.231.092.44.23.578.392a.86.86 0 0 1 .23.575c0 .115 0 .23-.022.368a14.596 14.596 0 0 0 2.84 16.693 14.649 14.649 0 0 0 10.369 4.282c4.04 0 7.713-1.635 10.368-4.282A14.561 14.561 0 0 0 30.35 14.62c0-4.052-1.64-7.69-4.296-10.338Zm-6.743 5.963s.832.645 2.333.484c.53-.07.923-.161 1.2-.253-.762.99-2.54 2.97-5.08 3.776-.623.207-1.293.276-1.894.299-.785 0-1.454-.115-1.847-.253h-.092c-.046 0-.093.023-.139.023a6.725 6.725 0 0 1-1.316-.921l-.416-.415a5.248 5.248 0 0 1-1.016-1.634 5.856 5.856 0 0 1-.462-2.464.329.329 0 0 0-.138-.046c-.139 0-.254.092-.254.23a5.807 5.807 0 0 0 1.5 4.237c.416.46.924.851 1.456 1.174-.509.161-.97.368-1.41.622a7.417 7.417 0 0 0-1.8 1.473c-.67.783-1.155 1.796-1.363 2.325-.046.115-.07.208-.092.277l-.023.069v.023c-.07.276-.231.552-.277.829-.047.276-.162 1.174-.162 1.473-.092 1.635.254 2.51.947 4.006.508 1.105.554.99.97 1.727l-2.217-1.312-.462-.369c-1.87-1.45-2.356-2.325-2.84-2.993a14.795 14.795 0 0 1-1.825-3.292 13.75 13.75 0 0 1-.808-4.697c0-3.845 1.57-7.345 4.087-9.854C8.342 2.233 11.852.69 15.71.69c.924 0 1.824.092 2.702.253a6.655 6.655 0 0 1 2.494 1.612 6.819 6.819 0 0 1 1.962 4.512V7.183c0 .139.047.875.07 1.29.023.368.208 1.174.254 1.45-.162.115-.6.092-1.64.23-1.362.162-2.078-.414-2.078-.414-.07-.07-.185.207-.254.3 0 .045 0 .16.092.207ZM17.95 28.412c.923-.3 1.662-.76 2.17-1.404.07.23.278.506.693.621-.9.346-1.87.622-2.863.783ZM2.846 7c-.185-.207-.346-.368-.623-.483-.347-.138-.578-.3-.993-.3.53-.506 1.57-1.335 3.002-2.003a28.78 28.78 0 0 1 2.217-.944c-.393.323-.762.645-1.109.99-.9.898-1.686 1.911-2.31 2.993-.045-.069-.091-.16-.184-.253Zm22.77 17.498a14.214 14.214 0 0 1-3.21 2.395c-.324.046-.716.069-1.109-.07-.739-.253-.623-1.15-.623-1.15a.221.221 0 0 0-.162-.208c-.07 0-.162.046-.185.115a4.748 4.748 0 0 1-2.61 2.395c-1.2.46-2.77.575-4.664.345a6.366 6.366 0 0 1-3.394-2.556 7.207 7.207 0 0 1-1.132-4.351c.023-.276.046-.553.092-.829.047-.276.116-.552.185-.806v-.092h.023c.023-.069.046-.161.093-.253.207-.53.67-1.52 1.339-2.28a7.55 7.55 0 0 1 1.755-1.45c.623-.368 1.34-.621 2.078-.783.44.138 1.155.254 1.963.254.647 0 1.363-.092 2.055-.323 3.487-1.105 5.589-4.26 5.82-4.604.046-.046.07-.116.046-.162 0 0-.254-1.082-.277-1.542-.046-.484-.07-1.313-.07-1.313v-.092c-.069-1.888-.877-3.591-2.124-4.858-.208-.23-.439-.414-.693-.621a13.98 13.98 0 0 1 4.803 3.13 13.846 13.846 0 0 1 4.088 9.855c0 3.845-1.57 7.322-4.087 9.854Z"
          fill={"currentColor"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.863 4.559a1.494 1.494 0 0 0-1.57 1.404c-.046.714.416 1.312 1.132 1.52.53.16.808-.161.808-.161s-.739-.323-.67-1.152c.047-.69 1.247-.621 1.016.346-.115.437.462.299.508.299.116-.207.185-.437.208-.69a1.543 1.543 0 0 0-1.432-1.566ZM10.074 15.265c-.207.046-.415.115-.623.184-.208.069-.416.138-.6.207h-.047a5.708 5.708 0 0 0-1.062 1.704 5.74 5.74 0 0 0-.439 1.957c0 .069.046.115.093.138.069.023.138-.023.138-.092a5.967 5.967 0 0 1 .624-1.727c.3-.53.67-1.013 1.131-1.45.139-.139.277-.254.439-.369.162-.115.3-.23.462-.322.046-.023.07-.092.046-.138-.023-.092-.092-.115-.162-.092ZM7.35 13.077l-.093-.046s-1.224.553-1.732-.437a1.324 1.324 0 0 1 .277-1.635c.162.254.37.484.623.645.278.161.6.276.97.3.162 0 .347-.024.508-.07h.023a1.48 1.48 0 0 0-.23.3c-.139.253-.231.529-.254.828-.024.484.138.921.415 1.244.3.322.716.53 1.201.552.185 0 .346-.023.531-.069.162-.046.323-.138.462-.207l.023-.092-.092-.046s-1.293.575-1.825-.46a1.433 1.433 0 0 1 .347-1.774l.023-.069V11.466l-.046-.046h-.046c-.093.092-.693.322-1.27.16a1.22 1.22 0 0 1-.786-.667 1.592 1.592 0 0 1 .208-1.842c.092-.115.185-.184.185-.184l.023-.069v-.645l-.092-.046c-.324.161-.6.392-.809.714-.184.3-.323.645-.346 1.013v.3c0 .091.023.16.046.23a1.743 1.743 0 0 0-.531.552c-.139.23-.23.484-.23.783-.024.46.115.898.392 1.197.277.3.67.507 1.154.53.162 0 .347-.023.508-.07a2.5 2.5 0 0 0 .44-.183l.022-.116ZM16.864 21.113a1.494 1.494 0 0 0-1.57 1.404c-.047.829.6 1.52 1.408 1.566a1.494 1.494 0 0 0 1.57-1.405c.047-.806-.6-1.52-1.408-1.565Z"
          fill={"currentColor"}
        />
        <path d="M37.416.345h-1.247v28.71h1.247V.346Z" fill={"currentColor"} />
      </svg>
    </div>
  );
};
