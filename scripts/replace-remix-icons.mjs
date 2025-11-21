#!/usr/bin/env node
import { readFileSync, writeFileSync, readdirSync, statSync } from "fs"
import { dirname, join } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, "..")

// Recursively find all files with given extensions
function findFiles(dir, extensions) {
  const files = []

  function traverse(currentDir) {
    try {
      const entries = readdirSync(currentDir)

      for (const entry of entries) {
        const fullPath = join(currentDir, entry)

        // Skip node_modules, dist, .next
        if (entry === "node_modules" || entry === "dist" || entry === ".next") {
          continue
        }

        const stat = statSync(fullPath)

        if (stat.isDirectory()) {
          traverse(fullPath)
        } else if (stat.isFile()) {
          const ext = entry.split(".").pop()
          if (extensions.includes(ext)) {
            files.push(fullPath)
          }
        }
      }
    } catch (err) {
      // Skip directories we can't read
    }
  }

  traverse(dir)
  return files
}

// Mapping of Remix Icons to Lucide Icons
const iconMapping = {
  RiAddLine: "Plus",
  RiArrowDownSLine: "ChevronDown",
  RiArrowLeftLine: "ArrowLeft",
  RiArrowRightLine: "ArrowRight",
  RiArrowRightSLine: "ChevronRight",
  RiArrowRightUpLine: "ArrowUpRight",
  RiArrowUpLine: "ArrowUp",
  RiArrowUpSLine: "ChevronUp",
  RiBankCardLine: "CreditCard",
  RiBarChartBoxLine: "BarChart3",
  RiBold: "Bold",
  RiBookmarkLine: "Bookmark",
  RiBox1Fill: "Box",
  RiCalendarLine: "Calendar",
  RiChat1Line: "MessageSquare",
  RiCheckboxMultipleBlankLine: "Layers",
  RiCheckLine: "Check",
  RiClipboardLine: "Clipboard",
  RiCommandLine: "Terminal",
  RiComputerLine: "Monitor",
  RiCornerDownLeftLine: "CornerDownLeft",
  RiCpuLine: "Cpu",
  RiDashboardLine: "LayoutDashboard",
  RiDatabase2Line: "Database",
  RiDivideLine: "Minus",
  RiEqualizer3Fill: "SlidersHorizontal",
  RiExpandUpDownLine: "ChevronsUpDown",
  RiFileLine: "File",
  RiFingerprintLine: "Fingerprint",
  RiFlashlightLine: "Zap",
  RiFolderLine: "Folder",
  RiFullscreenLine: "Maximize",
  RiHeartLine: "Heart",
  RiHome5Line: "Home",
  RiIdCardLine: "CreditCard",
  RiInboxLine: "Inbox",
  RiInformationLine: "Info",
  RiItalic: "Italic",
  RiLayoutGridLine: "LayoutGrid",
  RiLoader4Line: "Loader2",
  RiLock2Line: "Lock",
  RiLockLine: "Lock",
  RiLogoutBoxLine: "LogOut",
  RiMailLine: "Mail",
  RiMapPinLine: "MapPin",
  RiMoonLine: "Moon",
  RiMore2Line: "MoreHorizontal",
  RiPlayCircleLine: "PlayCircle",
  RiPulseLine: "Activity",
  RiQuestionLine: "HelpCircle",
  RiRefreshLine: "RotateCw",
  RiSearchLine: "Search",
  RiSettings3Line: "Settings",
  RiShare2Line: "Share2",
  RiSmartphoneLine: "Smartphone",
  RiSoundModuleLine: "Radio",
  RiSparklingLine: "Sparkles",
  RiStarLine: "Star",
  RiStrikethrough: "Strikethrough",
  RiSubtractLine: "Minus",
  RiSunLine: "Sun",
  RiTabletLine: "Tablet",
  RiTerminalLine: "Terminal",
  RiUnderline: "Underline",
  RiUserLine: "User",
}

function replaceIconsInFile(filePath) {
  let content = readFileSync(filePath, "utf-8")
  let modified = false

  // Check if file uses @remixicon/react
  if (!content.includes("@remixicon/react")) {
    return false
  }

  console.log(`Processing: ${filePath}`)

  // Extract Remix icons used in this file
  const remixIconsUsed = new Set()
  for (const remixIcon of Object.keys(iconMapping)) {
    if (content.includes(remixIcon)) {
      remixIconsUsed.add(remixIcon)
    }
  }

  if (remixIconsUsed.size === 0) {
    console.log(`  ⚠️  No Remix icons found in file`)
    return false
  }

  // Replace import statement
  const importRegex = /import\s+{([^}]+)}\s+from\s+['"]@remixicon\/react['"]/g
  content = content.replace(importRegex, (match, imports) => {
    const lucideIcons = Array.from(remixIconsUsed)
      .map((ri) => iconMapping[ri])
      .filter((icon, index, self) => self.indexOf(icon) === index) // Remove duplicates
      .sort()

    modified = true
    return `import { ${lucideIcons.join(", ")} } from "lucide-react"`
  })

  // Replace icon usage in JSX and object properties
  for (const [remixIcon, lucideIcon] of Object.entries(iconMapping)) {
    if (remixIconsUsed.has(remixIcon)) {
      // Replace component usage in JSX
      const jsxRegex = new RegExp(`<${remixIcon}\\b`, "g")
      if (content.match(jsxRegex)) {
        content = content.replace(jsxRegex, `<${lucideIcon}`)
        modified = true
      }

      // Replace direct references (e.g., in object properties, arrays)
      // Match word boundaries to avoid partial matches
      const refRegex = new RegExp(`\\b${remixIcon}\\b(?![A-Za-z])`, "g")
      if (content.match(refRegex)) {
        content = content.replace(refRegex, lucideIcon)
        modified = true
      }
    }
  }

  if (modified) {
    writeFileSync(filePath, content, "utf-8")
    console.log(`  ✓ Updated with ${remixIconsUsed.size} icon(s)`)
    return true
  }

  return false
}

function main() {
  console.log("🔄 Replacing Remix Icons with Lucide Icons...\n")

  // Find all TypeScript/JavaScript files in apps/v4
  const v4Dir = join(rootDir, "apps", "v4")
  const files = findFiles(v4Dir, ["ts", "tsx", "js", "jsx"])

  console.log(`Found ${files.length} files to check\n`)

  let updatedCount = 0
  for (const file of files) {
    if (replaceIconsInFile(file)) {
      updatedCount++
    }
  }

  console.log(`\n✅ Completed! Updated ${updatedCount} file(s)`)
}

main()
