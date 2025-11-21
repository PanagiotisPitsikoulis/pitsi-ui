import { type RegistryItem } from "pitsi/schema"

import { Index } from "@/registry/__index__"
import { type Style } from "@/registry/styles"




export type RegistryIndexItem = RegistryItem & {
  component?: React.ComponentType<any>
}


export function getRegistryIndexItem(
  name: string,
  style: Style["name"]
): RegistryIndexItem | null {
  return Index[style]?.[name] || null
}


export function getRegistryComponent(
  name: string,
  style: Style["name"]
): React.ComponentType<any> | null {
  return Index[style]?.[name]?.component || null
}


export function registryItemExists(
  name: string,
  style: Style["name"]
): boolean {
  return !!Index[style]?.[name]
}


export function registryComponentExists(
  name: string,
  style: Style["name"]
): boolean {
  return !!Index[style]?.[name]?.component
}
