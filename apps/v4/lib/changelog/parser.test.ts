import { describe, it, expect } from "vitest"

import {
  getAllChanges,
  getChangeType,
  parseChangelog,
  type ChangelogEntry,
} from "@/lib/changelog/parser"

describe("changelog parser", () => {
  describe("parseChangelog", () => {
    it("should parse a simple changelog entry", () => {
      const content = `
## 1.0.0

### Patch Changes

- Fixed a bug
`
      const entries = parseChangelog(content)
      expect(entries).toHaveLength(1)
      expect(entries[0].version).toBe("1.0.0")
      expect(entries[0].changes.patch).toHaveLength(1)
      expect(entries[0].changes.patch[0].description).toBe("Fixed a bug")
    })

    it("should parse multiple versions", () => {
      const content = `
## 2.0.0

### Major Changes

- Breaking change

## 1.0.0

### Patch Changes

- Fixed a bug
`
      const entries = parseChangelog(content)
      expect(entries).toHaveLength(2)
      expect(entries[0].version).toBe("2.0.0")
      expect(entries[1].version).toBe("1.0.0")
    })

    it("should parse all change types", () => {
      const content = `
## 1.0.0

### Major Changes

- Major breaking change

### Minor Changes

- New feature added

### Patch Changes

- Bug fix
`
      const entries = parseChangelog(content)
      expect(entries[0].changes.major).toHaveLength(1)
      expect(entries[0].changes.minor).toHaveLength(1)
      expect(entries[0].changes.patch).toHaveLength(1)
    })

    it("should parse commit links", () => {
      const content = `
## 1.0.0

### Patch Changes

- [\`abc123\`](https://github.com/repo/commit/abc123) - Fixed bug
`
      const entries = parseChangelog(content)
      expect(entries[0].changes.patch[0].commit).toBe("abc123")
      expect(entries[0].changes.patch[0].description).toBe("Fixed bug")
    })

    it("should handle entries without commits", () => {
      const content = `
## 1.0.0

### Minor Changes

- Added new feature without commit link
`
      const entries = parseChangelog(content)
      expect(entries[0].changes.minor[0].commit).toBeUndefined()
      expect(entries[0].changes.minor[0].description).toBe(
        "Added new feature without commit link"
      )
    })

    it("should return empty array for empty content", () => {
      const entries = parseChangelog("")
      expect(entries).toEqual([])
    })

    it("should return empty array for content without versions", () => {
      const content = `
# Changelog

Some introductory text
`
      const entries = parseChangelog(content)
      expect(entries).toEqual([])
    })

    it("should handle multiple changes per section", () => {
      const content = `
## 1.0.0

### Patch Changes

- First fix
- Second fix
- Third fix
`
      const entries = parseChangelog(content)
      expect(entries[0].changes.patch).toHaveLength(3)
    })
  })

  describe("getChangeType", () => {
    it("should return major when major changes exist", () => {
      const entry: ChangelogEntry = {
        version: "1.0.0",
        changes: {
          major: [{ type: "major", description: "Breaking change" }],
          minor: [],
          patch: [],
        },
      }
      expect(getChangeType(entry)).toBe("major")
    })

    it("should return minor when no major but minor changes exist", () => {
      const entry: ChangelogEntry = {
        version: "1.0.0",
        changes: {
          major: [],
          minor: [{ type: "minor", description: "New feature" }],
          patch: [],
        },
      }
      expect(getChangeType(entry)).toBe("minor")
    })

    it("should return patch when only patch changes exist", () => {
      const entry: ChangelogEntry = {
        version: "1.0.0",
        changes: {
          major: [],
          minor: [],
          patch: [{ type: "patch", description: "Bug fix" }],
        },
      }
      expect(getChangeType(entry)).toBe("patch")
    })

    it("should return patch when no changes exist", () => {
      const entry: ChangelogEntry = {
        version: "1.0.0",
        changes: {
          major: [],
          minor: [],
          patch: [],
        },
      }
      expect(getChangeType(entry)).toBe("patch")
    })

    it("should prioritize major over minor and patch", () => {
      const entry: ChangelogEntry = {
        version: "1.0.0",
        changes: {
          major: [{ type: "major", description: "Breaking" }],
          minor: [{ type: "minor", description: "Feature" }],
          patch: [{ type: "patch", description: "Fix" }],
        },
      }
      expect(getChangeType(entry)).toBe("major")
    })
  })

  describe("getAllChanges", () => {
    it("should return all changes combined", () => {
      const entry: ChangelogEntry = {
        version: "1.0.0",
        changes: {
          major: [{ type: "major", description: "Major 1" }],
          minor: [
            { type: "minor", description: "Minor 1" },
            { type: "minor", description: "Minor 2" },
          ],
          patch: [{ type: "patch", description: "Patch 1" }],
        },
      }
      const allChanges = getAllChanges(entry)
      expect(allChanges).toHaveLength(4)
    })

    it("should return empty array when no changes", () => {
      const entry: ChangelogEntry = {
        version: "1.0.0",
        changes: {
          major: [],
          minor: [],
          patch: [],
        },
      }
      const allChanges = getAllChanges(entry)
      expect(allChanges).toEqual([])
    })

    it("should maintain order: major, minor, patch", () => {
      const entry: ChangelogEntry = {
        version: "1.0.0",
        changes: {
          major: [{ type: "major", description: "Major" }],
          minor: [{ type: "minor", description: "Minor" }],
          patch: [{ type: "patch", description: "Patch" }],
        },
      }
      const allChanges = getAllChanges(entry)
      expect(allChanges[0].type).toBe("major")
      expect(allChanges[1].type).toBe("minor")
      expect(allChanges[2].type).toBe("patch")
    })
  })
})
