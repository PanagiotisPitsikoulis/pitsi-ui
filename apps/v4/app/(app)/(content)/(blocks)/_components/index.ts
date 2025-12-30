export {
  // Component
  BlockThemeWrapper,
  type BlockThemeWrapperProps,
  // Types
  type TintLevel,
  type ColorPalette,
  type CustomTheme,
  type CustomFonts,
  // Constants
  DEFAULT_TINT,
  // Theme API
  getThemeStyles,
  getFontStyles,
  getPaletteThemeStyles,
  getPresetKey,
} from "./block-theme-wrapper"
export { BlockContainer } from "./block-container"
export { BlockProvider, useBlockContext } from "./block-context"
export { DevBlockOverlay } from "./dev-block-overlay"
export {
  // Types
  type TemplateFonts,
  type FontPreset,
  // Constants
  fontPresets,
  // Legacy API
  templateFonts,
  getTemplateFonts,
  getTemplateFontStyles,
  getAllFontFamilies,
} from "./template-fonts"
export {
  ScrollContainerProvider,
  useScrollContainer,
} from "./scroll-container-context"
export {
  RelatedBlocksSection,
  type BlockItem,
} from "./related-blocks-section"
export {
  TemplateBlocksSection,
  type BlockMetadata,
} from "./template-blocks-section"
export { HeroSwitcher } from "./hero-switcher"
