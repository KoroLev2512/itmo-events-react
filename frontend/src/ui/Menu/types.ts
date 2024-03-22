import React from "react";
import { MenuItemProps } from "../MenuItem/types";

export type MenuProps = {
  children: React.ReactElement<MenuItemProps[]>[];
};
