import type { ReactElement } from "react";
import { sitePath } from "./paths";

type BrandImageProps = { readonly size: 32 };

export function BrandImage({ size }: BrandImageProps): ReactElement {
  return <img src={sitePath("assets/modconductor.svg")} width={size} height={size} alt="" className="size-7 shrink-0 sm:size-8" />;
}
