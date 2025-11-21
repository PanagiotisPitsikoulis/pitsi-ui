#!/bin/bash

# Script to replace Lucide React icons with Remix Icons
# Usage: ./scripts/replace-lucide-with-remix.sh

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting Lucide → Remix Icon replacement...${NC}\n"

# Base directory
BASE_DIR="/Users/panagiotispitsikoulis/Documents/pitsi-ui/apps/v4"

# Counter for stats
files_processed=0
files_modified=0

# Function to get remix icon name
get_remix_icon() {
    local lucide_icon="$1"
    case "$lucide_icon" in
        "Search") echo "RiSearchLine" ;;
        "Check") echo "RiCheckLine" ;;
        "CheckIcon") echo "RiCheckLine" ;;
        "ChevronRight") echo "RiArrowRightSLine" ;;
        "ChevronDown") echo "RiArrowDownSLine" ;;
        "ChevronUp") echo "RiArrowUpSLine" ;;
        "ChevronLeft") echo "RiArrowLeftSLine" ;;
        "ArrowUp") echo "RiArrowUpLine" ;;
        "ArrowRight") echo "RiArrowRightLine" ;;
        "ArrowDown") echo "RiArrowDownLine" ;;
        "ArrowLeft") echo "RiArrowLeftLine" ;;
        "ArrowUpIcon") echo "RiArrowUpLine" ;;
        "ArrowRightIcon") echo "RiArrowRightLine" ;;
        "ArrowDownIcon") echo "RiArrowDownLine" ;;
        "ArrowLeftIcon") echo "RiArrowLeftLine" ;;
        "Plus") echo "RiAddLine" ;;
        "PlusIcon") echo "RiAddLine" ;;
        "Minus") echo "RiSubtractLine" ;;
        "MinusIcon") echo "RiSubtractLine" ;;
        "Sparkles") echo "RiSparklingLine" ;;
        "Sparkle") echo "RiSparklingLine" ;;
        "Globe") echo "RiGlobalLine" ;;
        "Calendar") echo "RiCalendarLine" ;;
        "Calendar1") echo "RiCalendarLine" ;;
        "CalendarCheck") echo "RiCalendarCheckLine" ;;
        "Layout") echo "RiLayoutLine" ;;
        "Target") echo "RiTargetLine" ;;
        "Bold") echo "RiBoldLine" ;;
        "Italic") echo "RiItalicLine" ;;
        "Strikethrough") echo "RiStrikethroughLine" ;;
        "Underline") echo "RiUnderlineLine" ;;
        "Ellipsis") echo "RiMoreLine" ;;
        "Play") echo "RiPlayLine" ;;
        "Signature") echo "RiQuillPenLine" ;;
        "CirclePlay") echo "RiPlayCircleLine" ;;
        "Lock") echo "RiLockLine" ;;
        "Cpu") echo "RiCpuLine" ;;
        "Zap") echo "RiFlashlightLine" ;;
        "Star") echo "RiStarLine" ;;
        "User") echo "RiUserLine" ;;
        "UserIcon") echo "RiUserLine" ;;
        "Settings") echo "RiSettings3Line" ;;
        "LogOut") echo "RiLogoutBoxLine" ;;
        "MoreHorizontal") echo "RiMore2Line" ;;
        "MoreHorizontalIcon") echo "RiMore2Line" ;;
        "Menu") echo "RiMenuLine" ;;
        "X") echo "RiCloseLine" ;;
        "CornerDownLeft") echo "RiCornerDownLeftLine" ;;
        "CornerDownLeftIcon") echo "RiCornerDownLeftLine" ;;
        "SquareDashed") echo "RiDashboardLine" ;;
        "SquareDashedIcon") echo "RiDashboardLine" ;;
        "Copy") echo "RiFileCopyLine" ;;
        "CopyIcon") echo "RiFileCopyLine" ;;
        "ExternalLink") echo "RiExternalLinkLine" ;;
        "Home") echo "RiHomeLine" ;;
        "File") echo "RiFileLine" ;;
        "FileText") echo "RiFileTextLine" ;;
        "Folder") echo "RiFolderLine" ;;
        "Mail") echo "RiMailLine" ;;
        "Phone") echo "RiPhoneLine" ;;
        "Info") echo "RiInformationLine" ;;
        "AlertCircle") echo "RiErrorWarningLine" ;;
        "AlertTriangle") echo "RiAlertLine" ;;
        "Bell") echo "RiNotificationLine" ;;
        "Heart") echo "RiHeartLine" ;;
        "Share") echo "RiShareLine" ;;
        "Download") echo "RiDownloadLine" ;;
        "Upload") echo "RiUploadLine" ;;
        "Trash") echo "RiDeleteBinLine" ;;
        "Edit") echo "RiEditLine" ;;
        "Eye") echo "RiEyeLine" ;;
        "EyeOff") echo "RiEyeOffLine" ;;
        "Image") echo "RiImageLine" ;;
        "Music") echo "RiMusicLine" ;;
        "Video") echo "RiVideoLine" ;;
        "Code") echo "RiCodeLine" ;;
        "Terminal") echo "RiTerminalLine" ;;
        "Command") echo "RiCommandLine" ;;
        *) echo "" ;;
    esac
}

# Find all TypeScript/TSX files with lucide-react imports
while IFS= read -r file; do
    ((files_processed++))

    echo -e "${YELLOW}Processing: ${file}${NC}"

    # Create backup
    cp "$file" "$file.bak"

    # Flag to track if file was modified
    modified=false

    # Check if file has lucide-react import
    if grep -q "from ['\"]lucide-react['\"]" "$file"; then
        # Extract icons from import statement
        lucide_icons=$(grep -oE "import.*from ['\"]lucide-react['\"]" "$file" | head -1 | sed -E 's/.*\{([^}]+)\}.*/\1/' | tr ',' '\n' | sed 's/^[[:space:]]*//;s/[[:space:]]*$//' | grep -v '^$' | grep -v '^type ')

        if [ -n "$lucide_icons" ]; then
            # Build remix icons list
            remix_icons=""

            while IFS= read -r icon; do
                icon=$(echo "$icon" | xargs | sed 's/ as .*//')  # Remove " as X" aliases
                remix_icon=$(get_remix_icon "$icon")

                if [ -n "$remix_icon" ]; then
                    if [ -z "$remix_icons" ]; then
                        remix_icons="$remix_icon"
                    else
                        remix_icons="$remix_icons, $remix_icon"
                    fi

                    # Replace icon usage in JSX
                    sed -i '' "s|<${icon} |<${remix_icon} |g" "$file"
                    sed -i '' "s|<${icon}>|<${remix_icon}>|g" "$file"
                    sed -i '' "s|</${icon}>|</${remix_icon}>|g" "$file"
                fi
            done <<< "$lucide_icons"

            if [ -n "$remix_icons" ]; then
                # Replace import statement
                sed -i '' "s|import.*from ['\"]lucide-react['\"]|import { $remix_icons } from '@remixicon/react'|g" "$file"

                modified=true
                ((files_modified++))
                echo -e "${GREEN}✓ Modified${NC}"
            fi
        fi
    fi

    # If not modified, restore from backup
    if [ "$modified" = false ]; then
        mv "$file.bak" "$file" 2>/dev/null
        echo -e "  Skipped (no changes needed)"
    else
        rm "$file.bak"
    fi

done < <(grep -rl "from ['\"]lucide-react['\"]" "$BASE_DIR" --include="*.tsx" --include="*.ts" 2>/dev/null)

echo -e "\n${GREEN}=====================================${NC}"
echo -e "${GREEN}Replacement Complete!${NC}"
echo -e "${GREEN}=====================================${NC}"
echo -e "Files processed: ${files_processed}"
echo -e "Files modified:  ${files_modified}"
echo -e "\n${YELLOW}Note: Please review the changes and test your application.${NC}\n"
