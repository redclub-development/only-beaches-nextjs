import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

/**
 * Shared page shell so header + footer are not duplicated on every route.
 *
 * - **`home-hero`**: transparent overlay header over a full-bleed hero (homepage).
 * - **`app`**: fixed “inner” marketing header + standard app footer.
 */
export type SiteChromeProps =
  | {
      preset: "home-hero";
      hero: ReactNode;
      children: ReactNode;
    }
  | {
      preset: "app";
      children: ReactNode;
    };

export function SiteChrome(props: SiteChromeProps) {
  if (props.preset === "home-hero") {
    return (
      <>
        <div className="relative">
          <SiteHeader />
          {props.hero}
        </div>
        {props.children}
        <SiteFooter variant="home" />
      </>
    );
  }

  return (
    <>
      <SiteHeader variant="solid" withLocationSelector />
      {props.children}
      <SiteFooter variant="app" />
    </>
  );
}
