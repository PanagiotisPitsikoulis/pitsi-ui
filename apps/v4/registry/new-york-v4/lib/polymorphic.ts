/**
 * Props type for the "as" prop that enables polymorphic components.
 *
 * @template T - The React element type that the component can render as.
 */
type AsProp<T extends React.ElementType> = {
  as?: T
}

/**
 * Helper type to determine which props should be omitted to avoid conflicts.
 *
 * @template T - The React element type.
 * @template P - The component's own props.
 */
type PropsToOmit<T extends React.ElementType, P> = keyof (AsProp<T> & P)

/**
 * Core polymorphic component props without ref.
 *
 * Combines the component's own props with the props of the target element,
 * while properly handling prop conflicts and children.
 *
 * @template T - The React element type to render as.
 * @template Props - The component's own props.
 */
type PolymorphicComponentProp<
  T extends React.ElementType,
  Props = {},
> = React.PropsWithChildren<Props & AsProp<T>> &
  Omit<React.ComponentPropsWithoutRef<T>, PropsToOmit<T, Props>>

/**
 * Extracts the correct ref type for a polymorphic component.
 *
 * @template T - The React element type.
 *
 * @example
 * ```tsx
 * const ref = useRef<PolymorphicRef<'button'>>(null)
 * ```
 */
export type PolymorphicRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>["ref"]

/**
 * Polymorphic component props with ref support.
 *
 * @template T - The React element type to render as.
 * @template Props - The component's own props.
 */
type PolymorphicComponentPropWithRef<
  T extends React.ElementType,
  Props = {},
> = PolymorphicComponentProp<T, Props> & { ref?: PolymorphicRef<T> }

/**
 * Complete props type for a polymorphic component with ref support.
 *
 * Use this type when defining props for a polymorphic component that forwards refs.
 *
 * @template T - The React element type to render as (e.g., 'button', 'a', 'div').
 * @template P - The component's own props.
 *
 * @example
 * ```tsx
 * type ButtonProps<T extends React.ElementType = 'button'> = PolymorphicComponentPropsWithRef<T, {
 *   variant?: 'primary' | 'secondary'
 * }>
 * ```
 */
export type PolymorphicComponentPropsWithRef<
  T extends React.ElementType,
  P = {},
> = PolymorphicComponentPropWithRef<T, P>

/**
 * Props type for a polymorphic component without ref support.
 *
 * Use this type when defining props for a polymorphic component that doesn't need ref forwarding.
 *
 * @template T - The React element type to render as (e.g., 'button', 'a', 'div').
 * @template P - The component's own props.
 *
 * @example
 * ```tsx
 * type TextProps<T extends React.ElementType = 'p'> = PolymorphicComponentProps<T, {
 *   size?: 'sm' | 'md' | 'lg'
 * }>
 * ```
 */
export type PolymorphicComponentProps<
  T extends React.ElementType,
  P = {},
> = PolymorphicComponentProp<T, P>

/**
 * Type definition for a polymorphic component function.
 *
 * Use this type when defining the component itself to ensure proper type inference
 * for the "as" prop and all element-specific props.
 *
 * @template P - The component's own props (excluding the "as" prop and element props).
 *
 * @example
 * ```tsx
 * type ButtonOwnProps = {
 *   variant?: 'primary' | 'secondary'
 * }
 *
 * const Button: PolymorphicComponent<ButtonOwnProps> = React.forwardRef(
 *   <T extends React.ElementType = 'button'>(
 *     { as, variant, ...props }: PolymorphicComponentPropsWithRef<T, ButtonOwnProps>,
 *     ref: PolymorphicRef<T>
 *   ) => {
 *     const Component = as || 'button'
 *     return <Component ref={ref} {...props} />
 *   }
 * )
 * ```
 */
export type PolymorphicComponent<P> = <T extends React.ElementType>(
  props: PolymorphicComponentPropsWithRef<T, P>
) => React.ReactNode
