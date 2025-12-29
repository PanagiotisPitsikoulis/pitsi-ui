import type {
  BlockBaseClassNames,
  BlockHeaderClassNames,
  BlockImage,
  BlockSectionHeader,
  BlockSocialLink,
} from "./types"

// ============================================================================
// Team Content Types
// ============================================================================

export interface TeamMember {
  name: string
  role: string
  bio?: string
  avatar?: BlockImage
  social?: BlockSocialLink[]
}

export interface TeamContent extends BlockSectionHeader {
  /** Array of team members */
  members: TeamMember[]
}

// ============================================================================
// Team ClassNames Types
// ============================================================================

export interface TeamMemberClassNames {
  root?: string
  avatar?: string
  name?: string
  role?: string
  bio?: string
  social?: string
  socialLink?: string
}

export interface TeamClassNames extends BlockBaseClassNames {
  container?: string
  header?: BlockHeaderClassNames
  grid?: string
  member?: TeamMemberClassNames
}

// ============================================================================
// Team Props
// ============================================================================

export interface TeamBlockProps {
  content?: Partial<TeamContent>
  classNames?: TeamClassNames
}

// ============================================================================
// Team Defaults
// ============================================================================

export const teamDefaults: TeamContent = {
  badge: "Our Team",
  title: "Meet the Plant Experts",
  description: "Passionate horticulturists dedicated to bringing nature into your home.",
  members: [
    {
      name: "Sarah Green",
      role: "Head Horticulturist",
      bio: "15 years of experience in tropical plant care.",
      social: [{ platform: "linkedin", href: "#" }],
    },
    {
      name: "Mike Chen",
      role: "Plant Curator",
      bio: "Specializes in rare and exotic species.",
      social: [{ platform: "twitter", href: "#" }],
    },
    {
      name: "Emma Wilson",
      role: "Customer Success",
      bio: "Making sure every plant parent succeeds.",
      social: [{ platform: "instagram", href: "#" }],
    },
  ],
}
