"use client"

import * as React from "react"
import { ChevronRight, File, Folder } from "lucide-react"

import { FileTree as FileTreeType } from "@/lib/registry"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/new-york-v4/ui/collapsible"
import {
  Sidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarProvider,
} from "@/registry/new-york-v4/ui/sidebar"

interface FileTreeProps {
  tree: FileTreeType[]
  activeFile: string | null
  setActiveFile: (file: string) => void
}

interface TreeItemProps {
  item: FileTreeType
  index: number
  activeFile: string | null
  setActiveFile: (file: string) => void
}

function TreeItem({ item, index, activeFile, setActiveFile }: TreeItemProps) {
  if (!item.children) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton
          isActive={item.path === activeFile}
          onClick={() => item.path && setActiveFile(item.path)}
          className="hover:bg-background/80 focus:bg-background/80 focus-visible:bg-background/80 active:bg-background/80 data-[active=true]:bg-background data-[active=true]:border-border rounded-none pl-(--index) whitespace-nowrap data-[active=true]:border data-[active=true]:shadow-xs"
          data-index={index}
          style={
            {
              "--index": `${index * (index === 2 ? 1.2 : 1.3)}rem`,
            } as React.CSSProperties
          }
        >
          <ChevronRight className="invisible" />
          <File className="h-4 w-4" />
          {item.name}
        </SidebarMenuButton>
      </SidebarMenuItem>
    )
  }

  return (
    <SidebarMenuItem>
      <Collapsible
        className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
        defaultOpen
        suppressHydrationWarning
      >
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            className="hover:bg-background/80 focus:bg-background/80 focus-visible:bg-background/80 active:bg-background/80 data-[active=true]:bg-background data-[active=true]:border-border rounded-none pl-(--index) whitespace-nowrap data-[active=true]:border data-[active=true]:shadow-xs"
            style={
              {
                "--index": `${index * (index === 1 ? 1 : 1.2)}rem`,
              } as React.CSSProperties
            }
          >
            <ChevronRight className="transition-transform" />
            <Folder />
            {item.name}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent suppressHydrationWarning>
          <SidebarMenuSub className="m-0 w-full translate-x-0 border-none p-0">
            {item.children.map((subItem, key) => (
              <TreeItem
                key={key}
                item={subItem}
                index={index + 1}
                activeFile={activeFile}
                setActiveFile={setActiveFile}
              />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  )
}

export function FileTreeSidebar({ tree, activeFile, setActiveFile }: FileTreeProps) {
  if (!tree || tree.length === 0) {
    return null
  }

  return (
    <SidebarProvider className="flex !min-h-full flex-col border-r">
      <Sidebar collapsible="none" className="w-full flex-1">
        <SidebarGroupLabel className="h-12 rounded-none border-b px-4 text-sm">
          Files
        </SidebarGroupLabel>
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu className="translate-x-0 gap-1.5">
              {tree.map((file, index) => (
                <TreeItem
                  key={index}
                  item={file}
                  index={1}
                  activeFile={activeFile}
                  setActiveFile={setActiveFile}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </Sidebar>
    </SidebarProvider>
  )
}
