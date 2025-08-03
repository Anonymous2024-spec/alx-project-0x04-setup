import { ReactNode } from "react";
// from pages/index.tsx
export interface PageRouteProps {
  pageRoute: string;
}

// from Button.tsx
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: "red" | "blue" | "orange" | "green";
  action?: () => void;
}

// from Layout.tsx
export interface LayoutProps {
  children: ReactNode;
}
