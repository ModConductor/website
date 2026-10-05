import type { ReactElement } from "react";
import { sitePath } from "./paths";

type BrandImageProps = { readonly size: 32 | 36 };

export function BrandImage({ size }: BrandImageProps): ReactElement {
  return <img src={sitePath("assets/modconductor.svg")} width={size} height={size} alt="" className="shrink-0" />;
}
