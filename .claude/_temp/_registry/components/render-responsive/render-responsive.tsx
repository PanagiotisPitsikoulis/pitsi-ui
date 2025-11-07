"use client";

import type React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

/**
 * Props for RenderResponsive.
 * Expects two children in order: [desktop, mobile].
 */
export type RenderResponsiveProps = {
  children: React.ReactNode[];
};

/**
 * Renders the first child on desktop and the second child on mobile.
 * If only one child is provided, it is rendered on all devices.
 */
export function RenderResponsive({ children }: RenderResponsiveProps) {
  const isMobile = useIsMobile();

  if (!Array.isArray(children) || children.length === 0) return null;
  if (children.length === 1) return children[0];

  return isMobile ? children[1] : children[0];
}
