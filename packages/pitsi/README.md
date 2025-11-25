# pitsi

A CLI for adding beautifully designed components to your React projects.

**pitsi/ui** provides a collection of accessible, customizable components built with Radix UI and Tailwind CSS. Unlike traditional component libraries, pitsi adds components directly to your project's source code, giving you full control and customization.

## Features

✨ **Beautifully Designed** - Components that look great out of the box
🎨 **Fully Customizable** - Copy to your project, make it yours
♿ **Accessible** - Built on Radix UI primitives
🎯 **TypeScript** - Full type safety
🌙 **Dark Mode** - Built-in dark mode support
📦 **Tree-shakeable** - Only bundle what you use

## Quick Start

Initialize pitsi in your project:

```bash
npx pitsi init
```

This command:
- Installs dependencies
- Adds the `cn` utility function
- Configures `tailwind.config.js`
- Sets up CSS variables for theming

## Add Components

Add components to your project:

```bash
npx pitsi add button
```

Or browse all available components:

```bash
npx pitsi add
```

### Example

```bash
# Add multiple components at once
npx pitsi add button card dialog

# Add with specific style
npx pitsi add alert-dialog
```

## Available Commands

- `pitsi init` - Initialize your project with pitsi
- `pitsi add [component]` - Add components to your project
- `pitsi diff [component]` - Check for updates to components
- `pitsi search [query]` - Search for components

## Documentation

Visit [pitsiui.com/docs](https://www.pitsiui.com/docs/cli) for full documentation.

## Examples

Check out example projects:
- [Next.js](https://github.com/PanagiotisPitsikoulis/pitsi-ui/tree/main/apps/v4)
- [Vite](https://www.pitsiui.com/docs/installation/vite)

## Contributing

Contributions are welcome! Please read our [contributing guidelines](https://github.com/PanagiotisPitsikoulis/pitsi-ui/blob/main/CONTRIBUTING.md).

## License

Licensed under the [MIT license](https://github.com/PanagiotisPitsikoulis/pitsi-ui/blob/main/LICENSE.md).
