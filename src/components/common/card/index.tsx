import { HTMLAttributes, ReactNode } from "react";

import { THEME_COLORS, WIDTHS, FONT_SIZES, BORDER_RADII } from "@/theme";
import type {
  BorderRadiusType,
  FontSizeType,
  ThemeColorType,
  WidthSizeType,
} from "@/theme";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  header?: ReactNode;
  footer?: ReactNode;
  color?: ThemeColorType;
  size?: WidthSizeType;
  fontSize?: FontSizeType;
  round?: BorderRadiusType;
}

export const Card = ({
  children,
  header,
  footer,
  color = "light",
  size = "medium",
  fontSize = "medium",
  round = "small",
  ...props
}: CardProps) => {
  const style = {
    backgroundColor: THEME_COLORS[color],
    minWidth: WIDTHS[size],
    width: "fit-content",
    padding: "1rem",
    fontSize: FONT_SIZES[fontSize],
    borderRadius: BORDER_RADII[round],
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  };

  const headerStyle = {
    borderBottom: `1px solid ${THEME_COLORS.dark}`,
    paddingBottom: "0.5rem",
    marginBottom: "0.5rem",
    color: THEME_COLORS.dark,
  };

  const footerStyle = {
    borderTop: `1px solid ${THEME_COLORS.dark}`,
    paddingTop: "0.5rem",
    marginTop: "0.5rem",
    color: THEME_COLORS.dark,
  };

  return (
    <div {...props} style={style}>
      {header && <div style={headerStyle}>{header}</div>}
      {children}
      {footer && <div style={footerStyle}>{footer}</div>}
    </div>
  );
};
