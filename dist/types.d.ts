import * as react from 'react';
import * as _mantine_core_lib_core_factory_create_polymorphic_component from '@mantine/core/lib/core/factory/create-polymorphic-component';
import { ActionIconProps as ActionIconProps$1, ButtonProps as ButtonProps$1, CloseButtonProps as CloseButtonProps$1, CopyButtonProps as CopyButtonProps$1, FileButtonProps as FileButtonProps$1, UnstyledButtonProps as UnstyledButtonProps$1, AutocompleteProps as AutocompleteProps$1, ComboboxProps as ComboboxProps$1, MultiSelectProps as MultiSelectProps$1, PillProps as PillProps$1, PillsInputProps as PillsInputProps$1, SelectProps as SelectProps$1, TagsInputProps as TagsInputProps$1, AccordionProps as AccordionProps$1, AvatarProps as AvatarProps$1, BackgroundImageProps as BackgroundImageProps$1, BadgeProps as BadgeProps$1, CardProps as CardProps$1, ColorSwatchProps as ColorSwatchProps$1, ImageProps as ImageProps$1, IndicatorProps as IndicatorProps$1, KbdProps as KbdProps$1, SpoilerProps as SpoilerProps$1, ThemeIconProps as ThemeIconProps$1, TimelineProps as TimelineProps$1, AlertProps as AlertProps$1, LoaderProps as LoaderProps$1, NotificationProps as NotificationProps$1, ProgressProps as ProgressProps$1, RingProgressProps as RingProgressProps$1, SkeletonProps as SkeletonProps$1, CheckboxProps as CheckboxProps$1, CheckboxGroupProps as CheckboxGroupProps$1, ChipProps as ChipProps$1, ChipGroupProps as ChipGroupProps$1, ColorInputProps as ColorInputProps$1, ColorPickerProps as ColorPickerProps$1, FieldsetProps as FieldsetProps$1, FileInputProps as FileInputProps$1, InputProps as InputProps$1, JsonInputProps as JsonInputProps$1, NativeSelectProps as NativeSelectProps$1, NumberInputProps as NumberInputProps$1, PasswordInputProps as PasswordInputProps$1, PinInputProps as PinInputProps$1, RadioProps as RadioProps$1, RadioGroupProps as RadioGroupProps$1, RatingProps as RatingProps$1, SegmentedControlProps as SegmentedControlProps$1, SliderProps as SliderProps$1, SwitchProps as SwitchProps$1, SwitchGroupProps as SwitchGroupProps$1, TextareaProps as TextareaProps$1, TextInputProps as TextInputProps$1, AspectRatioProps as AspectRatioProps$1, CenterProps as CenterProps$1, ContainerProps as ContainerProps$1, FlexProps as FlexProps$1, GridProps as GridProps$1, GroupProps as GroupProps$1, SimpleGridProps as SimpleGridProps$1, SpaceProps as SpaceProps$1, StackProps as StackProps$1, BoxProps as BoxProps$1, CollapseProps as CollapseProps$1, DividerProps as DividerProps$1, FocusTrapProps as FocusTrapProps$1, PaperProps as PaperProps$1, PortalProps as PortalProps$1, ScrollAreaProps as ScrollAreaProps$1, TransitionProps as TransitionProps$1, VisuallyHiddenProps as VisuallyHiddenProps$1, AnchorProps as AnchorProps$1, BreadcrumbsProps as BreadcrumbsProps$1, BurgerProps as BurgerProps$1, NavLinkProps as NavLinkProps$1, PaginationProps as PaginationProps$1, StepperProps as StepperProps$1, TabsProps as TabsProps$1, AffixProps as AffixProps$1, DialogProps as DialogProps$1, DrawerProps as DrawerProps$1, HoverCardProps as HoverCardProps$1, LoadingOverlayProps as LoadingOverlayProps$1, MenuProps as MenuProps$1, ModalProps as ModalProps$1, OverlayProps as OverlayProps$1, PopoverProps as PopoverProps$1, TooltipProps as TooltipProps$1, BlockquoteProps as BlockquoteProps$1, CodeProps as CodeProps$1, HighlightProps as HighlightProps$1, ListProps as ListProps$1, MarkProps as MarkProps$1, TableProps as TableProps$1, TextProps as TextProps$1, TitleProps as TitleProps$1, TypographyStylesProviderProps as TypographyStylesProviderProps$1 } from '@mantine/core';
export { MantineProvider } from '@mantine/core';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { CalendarProps as CalendarProps$1, DateInputProps as DateInputProps$1, DatePickerType, DatePickerInputProps as DatePickerInputProps$1, DateTimePickerProps as DateTimePickerProps$1, MonthPickerProps as MonthPickerProps$1, MonthPickerInputProps as MonthPickerInputProps$1, TimeInputProps as TimeInputProps$1, YearPickerProps as YearPickerProps$1, YearPickerInputProps as YearPickerInputProps$1 } from '@mantine/dates';
export { DatePickerType, DatesProvider } from '@mantine/dates';
import { FieldValues, UseControllerProps } from 'react-hook-form';
export * from '@mantine/hooks';

type ActionIconProps = ActionIconProps$1;
declare const ActionIcon: (<C = "button">(props: _mantine_core_lib_core_factory_create_polymorphic_component.PolymorphicComponentProps<C, ActionIconProps$1>) => react.ReactElement<any, string | react.JSXElementConstructor<any>>) & Omit<react.FunctionComponent<(ActionIconProps$1 & {
    component?: any;
} & Omit<Omit<any, "ref">, keyof ActionIconProps$1 | "component"> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (ActionIconProps$1 & {
    component: react.ElementType<any>;
    renderRoot?(props: Record<string, any>): any;
})>, never> & Record<string, never>;

type ButtonProps = ButtonProps$1 & {};
declare const Button: (<C = "button">(props: _mantine_core_lib_core_factory_create_polymorphic_component.PolymorphicComponentProps<C, ButtonProps$1>) => react.ReactElement<any, string | react.JSXElementConstructor<any>>) & Omit<react.FunctionComponent<(ButtonProps$1 & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof ButtonProps$1> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (ButtonProps$1 & {
    component: react.ElementType<any>;
    renderRoot?(props: Record<string, any>): any;
})>, never> & Record<string, never>;

type CloseButtonProps = CloseButtonProps$1 & {};
declare function CloseButton(props: CloseButtonProps): react_jsx_runtime.JSX.Element;

type CopyButtonProps = CopyButtonProps$1 & {};
declare function CopyButton(props: CopyButtonProps): react_jsx_runtime.JSX.Element;

type FileButtonProps = FileButtonProps$1 & {};
declare function FileButton(props: FileButtonProps$1): react_jsx_runtime.JSX.Element;

type UnstyledButtonProps = UnstyledButtonProps$1 & {};
declare const UnstyledButton: (<C = "button">(props: _mantine_core_lib_core_factory_create_polymorphic_component.PolymorphicComponentProps<C, UnstyledButtonProps$1>) => react.ReactElement<any, string | react.JSXElementConstructor<any>>) & Omit<react.FunctionComponent<(UnstyledButtonProps$1 & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof UnstyledButtonProps$1> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (UnstyledButtonProps$1 & {
    component: react.ElementType<any>;
    renderRoot?(props: Record<string, any>): any;
})>, never> & Record<string, never>;

type AutocompleteProps = AutocompleteProps$1 & {};
declare function Autocomplete(props: AutocompleteProps$1): react_jsx_runtime.JSX.Element;

type ComboboxProps = ComboboxProps$1 & {};
declare function Combobox(props: ComboboxProps$1): react_jsx_runtime.JSX.Element;

type MultiSelectProps = MultiSelectProps$1 & {};
declare function MultiSelect(props: MultiSelectProps$1): react_jsx_runtime.JSX.Element;

type PillProps = PillProps$1 & {};
declare function Pill(props: PillProps$1): react_jsx_runtime.JSX.Element;

type PillsInputProps = PillsInputProps$1 & {};
declare function PillsInput(props: PillsInputProps$1): react_jsx_runtime.JSX.Element;

type SelectProps = SelectProps$1 & {};
declare function Select(props: SelectProps$1): react_jsx_runtime.JSX.Element;

type TagsInputProps = TagsInputProps$1 & {};
declare function TagsInput(props: TagsInputProps$1): react_jsx_runtime.JSX.Element;

type AccordionProps = AccordionProps$1 & {};
declare function Accordion(props: AccordionProps): react_jsx_runtime.JSX.Element;

type AvatarProps = AvatarProps$1 & {};
declare const Avatar: (<C = "div">(props: _mantine_core_lib_core_factory_create_polymorphic_component.PolymorphicComponentProps<C, AvatarProps$1>) => react.ReactElement<any, string | react.JSXElementConstructor<any>>) & Omit<react.FunctionComponent<(AvatarProps$1 & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof AvatarProps$1> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (AvatarProps$1 & {
    component: react.ElementType<any>;
    renderRoot?(props: Record<string, any>): any;
})>, never> & Record<string, never>;

type BackgroundImageProps = BackgroundImageProps$1 & {};
declare const BackgroundImage: (<C = "div">(props: _mantine_core_lib_core_factory_create_polymorphic_component.PolymorphicComponentProps<C, BackgroundImageProps$1>) => react.ReactElement<any, string | react.JSXElementConstructor<any>>) & Omit<react.FunctionComponent<(BackgroundImageProps$1 & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof BackgroundImageProps$1> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (BackgroundImageProps$1 & {
    component: react.ElementType<any>;
    renderRoot?(props: Record<string, any>): any;
})>, never> & Record<string, never>;

type BadgeProps = BadgeProps$1 & {};
declare const Badge: (<C = "p">(props: _mantine_core_lib_core_factory_create_polymorphic_component.PolymorphicComponentProps<C, BadgeProps$1>) => react.ReactElement<any, string | react.JSXElementConstructor<any>>) & Omit<react.FunctionComponent<(BadgeProps$1 & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof BadgeProps$1> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (BadgeProps$1 & {
    component: react.ElementType<any>;
    renderRoot?(props: Record<string, any>): any;
})>, never> & Record<string, never>;

type CardProps = CardProps$1 & {};
declare const Card: (<C = "div">(props: _mantine_core_lib_core_factory_create_polymorphic_component.PolymorphicComponentProps<C, CardProps$1>) => react.ReactElement<any, string | react.JSXElementConstructor<any>>) & Omit<react.FunctionComponent<(CardProps$1 & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof CardProps$1> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (CardProps$1 & {
    component: react.ElementType<any>;
    renderRoot?(props: Record<string, any>): any;
})>, never> & Record<string, never>;

type ColorSwatchProps = ColorSwatchProps$1 & {};
declare const ColorSwatch: (<C = "div">(props: _mantine_core_lib_core_factory_create_polymorphic_component.PolymorphicComponentProps<C, ColorSwatchProps$1>) => react.ReactElement<any, string | react.JSXElementConstructor<any>>) & Omit<react.FunctionComponent<(ColorSwatchProps$1 & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof ColorSwatchProps$1> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (ColorSwatchProps$1 & {
    component: react.ElementType<any>;
    renderRoot?(props: Record<string, any>): any;
})>, never> & Record<string, never>;

type ImageProps = ImageProps$1 & {};
declare const Image: (<C = "img">(props: _mantine_core_lib_core_factory_create_polymorphic_component.PolymorphicComponentProps<C, ImageProps$1>) => react.ReactElement<any, string | react.JSXElementConstructor<any>>) & Omit<react.FunctionComponent<(ImageProps$1 & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof ImageProps$1> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (ImageProps$1 & {
    component: react.ElementType<any>;
    renderRoot?(props: Record<string, any>): any;
})>, never> & Record<string, never>;

type IndicatorProps = IndicatorProps$1 & {};
declare function Indicator(props: IndicatorProps): react_jsx_runtime.JSX.Element;

type KbdProps = KbdProps$1 & {};
declare function Kbd(props: KbdProps): react_jsx_runtime.JSX.Element;

type SpoilerProps = SpoilerProps$1 & {};
declare function Spoiler(props: SpoilerProps): react_jsx_runtime.JSX.Element;

type ThemeIconProps = ThemeIconProps$1 & {};
declare function ThemeIcon(props: ThemeIconProps): react_jsx_runtime.JSX.Element;

type TimelineProps = TimelineProps$1 & {};
declare function Timeline(props: TimelineProps): react_jsx_runtime.JSX.Element;

type AlertProps = AlertProps$1 & {};
declare function Alert(props: AlertProps): react_jsx_runtime.JSX.Element;

type LoaderProps = LoaderProps$1 & {};
declare function Loader(props: LoaderProps): react_jsx_runtime.JSX.Element;

type NotificationProps = NotificationProps$1 & {};
declare function Notification(props: NotificationProps): react_jsx_runtime.JSX.Element;

type ProgressProps = ProgressProps$1 & {};
declare function Progress(props: ProgressProps): react_jsx_runtime.JSX.Element;

type RingProgressProps = RingProgressProps$1 & {};
declare function RingProgress(props: RingProgressProps): react_jsx_runtime.JSX.Element;

type SkeletonProps = SkeletonProps$1 & {};
declare function Skeleton(props: SkeletonProps): react_jsx_runtime.JSX.Element;

type CheckboxProps = CheckboxProps$1 & {};
type CheckboxGroupProps = CheckboxGroupProps$1 & {};
declare function Checkbox(props: CheckboxProps$1): react_jsx_runtime.JSX.Element;
declare function CheckboxGroup(props: CheckboxGroupProps$1): react_jsx_runtime.JSX.Element;

type ChipProps = ChipProps$1 & {};
type ChipGroupProps<T> = ChipGroupProps$1<T extends boolean ? boolean : boolean> & {};
declare function Chip(props: ChipProps): react_jsx_runtime.JSX.Element;
declare function ChipGroup(props: ChipGroupProps<boolean>): react_jsx_runtime.JSX.Element;

type ColorInputProps = ColorInputProps$1 & {};
declare function ColorInput(props: ColorInputProps): react_jsx_runtime.JSX.Element;

type ColorPickerProps = ColorPickerProps$1 & {};
declare function ColorPicker(props: ColorPickerProps): react_jsx_runtime.JSX.Element;

type FieldsetProps = FieldsetProps$1 & {};
declare function Fieldset(props: FieldsetProps): react_jsx_runtime.JSX.Element;

type FileInputProps = FileInputProps$1 & {};
declare function FileInput(props: FileInputProps): react_jsx_runtime.JSX.Element;

type InputProps = InputProps$1 & {};
declare const Input: (<C = "input">(props: _mantine_core_lib_core_factory_create_polymorphic_component.PolymorphicComponentProps<C, InputProps$1>) => react.ReactElement<any, string | react.JSXElementConstructor<any>>) & Omit<react.FunctionComponent<(InputProps$1 & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof InputProps$1> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (InputProps$1 & {
    component: react.ElementType<any>;
    renderRoot?(props: Record<string, any>): any;
})>, never> & Record<string, never>;

type JsonInputProps = JsonInputProps$1 & {};
declare function JsonInput(props: JsonInputProps): react_jsx_runtime.JSX.Element;

type NativeSelectProps = NativeSelectProps$1 & {};
declare function NativeSelect(props: NativeSelectProps): react_jsx_runtime.JSX.Element;

type NumberInputProps = NumberInputProps$1 & {};
declare function NumberInput(props: NumberInputProps): react_jsx_runtime.JSX.Element;

type PasswordInputProps = PasswordInputProps$1 & {};
declare function PasswordInput(props: PasswordInputProps): react_jsx_runtime.JSX.Element;

type PinInputProps = PinInputProps$1 & {};
declare function PinInput(props: PinInputProps): react_jsx_runtime.JSX.Element;

type RadioProps = RadioProps$1 & {};
type RadioGroupProps = RadioGroupProps$1 & {};
declare function Radio(props: RadioProps): react_jsx_runtime.JSX.Element;
declare function RadioGroup(props: RadioGroupProps): react_jsx_runtime.JSX.Element;

type RatingProps = RatingProps$1 & {};
declare function Rating(props: RatingProps): react_jsx_runtime.JSX.Element;

type SegmentedControlProps = SegmentedControlProps$1 & {};
declare function SegmentedControl(props: SegmentedControlProps): react_jsx_runtime.JSX.Element;

type SliderProps = SliderProps$1 & {};
declare function Slider(props: SliderProps): react_jsx_runtime.JSX.Element;

type SwitchProps = SwitchProps$1 & {};
type SwitchGroupProps = SwitchGroupProps$1 & {};
declare function Switch(props: SwitchProps): react_jsx_runtime.JSX.Element;
declare function SwitchGroup(props: SwitchGroupProps): react_jsx_runtime.JSX.Element;

type TextareaProps = TextareaProps$1 & {};
declare function Textarea(props: TextareaProps): react_jsx_runtime.JSX.Element;

type TextInputProps = TextInputProps$1 & {};
declare function TextInput(props: TextInputProps): react_jsx_runtime.JSX.Element;

type AspectRatioProps = AspectRatioProps$1 & {};
declare function AspectRatio(props: AspectRatioProps): react_jsx_runtime.JSX.Element;

type CenterProps = CenterProps$1 & {};
declare const Center: (<C = "div">(props: _mantine_core_lib_core_factory_create_polymorphic_component.PolymorphicComponentProps<C, CenterProps$1>) => react.ReactElement<any, string | react.JSXElementConstructor<any>>) & Omit<react.FunctionComponent<(CenterProps$1 & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof CenterProps$1> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (CenterProps$1 & {
    component: react.ElementType<any>;
    renderRoot?(props: Record<string, any>): any;
})>, never> & Record<string, never>;

type ContainerProps = ContainerProps$1 & {};
declare function Container(props: ContainerProps): react_jsx_runtime.JSX.Element;

type FlexProps = FlexProps$1 & {};
declare function Flex(props: FlexProps): react_jsx_runtime.JSX.Element;

type GridProps = GridProps$1 & {};
declare function Grid(props: GridProps): react_jsx_runtime.JSX.Element;

type GroupProps = GroupProps$1 & {};
declare function Group(props: GroupProps): react_jsx_runtime.JSX.Element;

type SimpleGridProps = SimpleGridProps$1 & {};
declare function SimpleGrid(props: SimpleGridProps): react_jsx_runtime.JSX.Element;

type SpaceProps = SpaceProps$1 & {};
declare function Space(props: SpaceProps): react_jsx_runtime.JSX.Element;

type StackProps = StackProps$1 & {};
declare function Stack(props: StackProps): react_jsx_runtime.JSX.Element;

type BoxProps = BoxProps$1 & {};
declare const Box: (<C = "div">(props: _mantine_core_lib_core_factory_create_polymorphic_component.PolymorphicComponentProps<C, BoxProps$1>) => react.ReactElement<any, string | react.JSXElementConstructor<any>>) & Omit<react.FunctionComponent<(BoxProps$1 & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof BoxProps$1> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (BoxProps$1 & {
    component: react.ElementType<any>;
    renderRoot?(props: Record<string, any>): any;
})>, never> & Record<string, never>;

type CollapseProps = CollapseProps$1 & {};
declare function Collapse(props: CollapseProps): react_jsx_runtime.JSX.Element;

type DividerProps = DividerProps$1 & {};
declare function Divider(props: DividerProps): react_jsx_runtime.JSX.Element;

type FocusTrapProps = FocusTrapProps$1 & {};
declare function FocusTrap(props: FocusTrapProps): react_jsx_runtime.JSX.Element;

type PaperProps = PaperProps$1 & {};
declare const Paper: (<C = "div">(props: _mantine_core_lib_core_factory_create_polymorphic_component.PolymorphicComponentProps<C, PaperProps$1>) => react.ReactElement<any, string | react.JSXElementConstructor<any>>) & Omit<react.FunctionComponent<(PaperProps$1 & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof PaperProps$1> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (PaperProps$1 & {
    component: react.ElementType<any>;
    renderRoot?(props: Record<string, any>): any;
})>, never> & Record<string, never>;

type PortalProps = PortalProps$1 & {};
declare function Portal(props: PortalProps): react_jsx_runtime.JSX.Element;

type ScrollAreaProps = ScrollAreaProps$1 & {};
declare function ScrollArea(props: ScrollAreaProps): react_jsx_runtime.JSX.Element;

type TransitionProps = TransitionProps$1 & {};
declare function Transition(props: TransitionProps): react_jsx_runtime.JSX.Element;

type VisuallyHiddenProps = VisuallyHiddenProps$1 & {};
declare function VisuallyHidden(props: VisuallyHiddenProps): react_jsx_runtime.JSX.Element;

type AnchorProps = AnchorProps$1 & {};
declare const Anchor: (<C = "a">(props: _mantine_core_lib_core_factory_create_polymorphic_component.PolymorphicComponentProps<C, AnchorProps$1>) => react.ReactElement<any, string | react.JSXElementConstructor<any>>) & Omit<react.FunctionComponent<(AnchorProps$1 & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof AnchorProps$1> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (AnchorProps$1 & {
    component: react.ElementType<any>;
    renderRoot?(props: Record<string, any>): any;
})>, never> & Record<string, never>;

type BreadcrumbsProps = BreadcrumbsProps$1 & {};
declare function Breadcrumbs(props: BreadcrumbsProps): react_jsx_runtime.JSX.Element;

type BurgerProps = BurgerProps$1 & {};
declare function Burger(props: BurgerProps): react_jsx_runtime.JSX.Element;

type NavLinkProps = NavLinkProps$1 & {};
declare const NavLink: (<C = "a">(props: _mantine_core_lib_core_factory_create_polymorphic_component.PolymorphicComponentProps<C, NavLinkProps$1>) => react.ReactElement<any, string | react.JSXElementConstructor<any>>) & Omit<react.FunctionComponent<(NavLinkProps$1 & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof NavLinkProps$1> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (NavLinkProps$1 & {
    component: react.ElementType<any>;
    renderRoot?(props: Record<string, any>): any;
})>, never> & Record<string, never>;

type PaginationProps = PaginationProps$1 & {};
declare function Pagination(props: PaginationProps): react_jsx_runtime.JSX.Element;

type StepperProps = StepperProps$1 & {};
declare function Stepper(props: StepperProps): react_jsx_runtime.JSX.Element;

type TabsProps = TabsProps$1 & {};
declare function Tabs(props: TabsProps): react_jsx_runtime.JSX.Element;

type AffixProps = AffixProps$1 & {};
declare function Affix(props: AffixProps): react_jsx_runtime.JSX.Element;

type DialogProps = DialogProps$1 & {};
declare function Dialog(props: DialogProps): react_jsx_runtime.JSX.Element;

type DrawerProps = DrawerProps$1 & {};
declare function Drawer(props: DrawerProps): react_jsx_runtime.JSX.Element;

type HoverCardProps = HoverCardProps$1 & {};
declare function HoverCard(props: HoverCardProps): react_jsx_runtime.JSX.Element;

type LoadingOverlayProps = LoadingOverlayProps$1 & {};
declare function LoadingOverlay(props: LoadingOverlayProps): react_jsx_runtime.JSX.Element;

type MenuProps = MenuProps$1 & {};
declare function Menu(props: MenuProps): react_jsx_runtime.JSX.Element;

type ModalProps = ModalProps$1 & {};
declare function Modal(props: ModalProps): react_jsx_runtime.JSX.Element;

type OverlayProps = OverlayProps$1 & {};
declare const Overlay: (<C = "div">(props: _mantine_core_lib_core_factory_create_polymorphic_component.PolymorphicComponentProps<C, OverlayProps$1>) => react.ReactElement<any, string | react.JSXElementConstructor<any>>) & Omit<react.FunctionComponent<(OverlayProps$1 & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof OverlayProps$1> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (OverlayProps$1 & {
    component: react.ElementType<any>;
    renderRoot?(props: Record<string, any>): any;
})>, never> & Record<string, never>;

type PopoverProps = PopoverProps$1 & {};
declare function Popover(props: PopoverProps): react_jsx_runtime.JSX.Element;

type TooltipProps = TooltipProps$1 & {};
declare function Tooltip(props: TooltipProps): react_jsx_runtime.JSX.Element;

type BlockquoteProps = BlockquoteProps$1 & {};
declare function Blockquote(props: BlockquoteProps): react_jsx_runtime.JSX.Element;

type CodeProps = CodeProps$1 & {};
declare function Code(props: CodeProps): react_jsx_runtime.JSX.Element;

type HighlightProps = HighlightProps$1 & {};
declare function Highlight(props: HighlightProps): react_jsx_runtime.JSX.Element;

type ListProps = ListProps$1 & {};
declare function List(props: ListProps): react_jsx_runtime.JSX.Element;

type MarkProps = MarkProps$1 & {};
declare function Mark(props: MarkProps): react_jsx_runtime.JSX.Element;

type TableProps = TableProps$1 & {};
declare function Table(props: TableProps): react_jsx_runtime.JSX.Element;

type TextProps = TextProps$1 & {};
declare const Text: (<C = "p">(props: _mantine_core_lib_core_factory_create_polymorphic_component.PolymorphicComponentProps<C, TextProps$1>) => react.ReactElement<any, string | react.JSXElementConstructor<any>>) & Omit<react.FunctionComponent<(TextProps$1 & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof TextProps$1> & {
    ref?: any;
    renderRoot?(props: any): any;
}) | (TextProps$1 & {
    component: react.ElementType<any>;
    renderRoot?(props: Record<string, any>): any;
})>, never> & Record<string, never>;

type TitleProps = TitleProps$1 & {};
declare function Title(props: TitleProps): react_jsx_runtime.JSX.Element;

type TypographyStylesProviderProps = TypographyStylesProviderProps$1 & {};
declare function TypographyStylesProvider(props: TypographyStylesProviderProps): react_jsx_runtime.JSX.Element;

type CalendarProps = CalendarProps$1;
declare function Calendar(props: CalendarProps): react_jsx_runtime.JSX.Element;

type DateInputProps = DateInputProps$1;
declare function DateInput(props: DateInputProps): react_jsx_runtime.JSX.Element;

type DatePickerInputProps<T extends DatePickerType = "default"> = DatePickerInputProps$1<T> & {};
declare function DatePickerInput(props: DatePickerInputProps): react_jsx_runtime.JSX.Element;

type DateTimePickerProps = DateTimePickerProps$1;
declare function DateTimePicker(props: DateTimePickerProps): react_jsx_runtime.JSX.Element;

type MonthPickerProps = MonthPickerProps$1;
declare function MonthPicker(props: MonthPickerProps): react_jsx_runtime.JSX.Element;

type MonthPickerInputProps<T extends DatePickerType = "default"> = MonthPickerInputProps$1<T> & {};
declare function MonthPickerInput(props: MonthPickerInputProps): react_jsx_runtime.JSX.Element;

type TimeInputProps = TimeInputProps$1;
declare function TimeInput(props: TimeInputProps): react_jsx_runtime.JSX.Element;

type YearPickerProps<T extends DatePickerType = "default"> = YearPickerProps$1<T> & {};
declare function YearPicker(props: YearPickerProps): react_jsx_runtime.JSX.Element;

type YearPickerInputProps = YearPickerInputProps$1;
declare function YearPickerInput(props: YearPickerInputProps): react_jsx_runtime.JSX.Element;

type AutocompleteFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<AutocompleteProps, "value" | "defaultValue">;
declare function AutocompleteForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: AutocompleteFormProps<T>): react_jsx_runtime.JSX.Element;

type CheckboxGroupFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<CheckboxGroupProps, "checked" | "defaultValue">;
declare const CheckboxGroupForm: <T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: CheckboxGroupFormProps<T>) => react_jsx_runtime.JSX.Element;

type CheckboxFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<CheckboxProps, "checked" | "defaultValue">;
declare const CheckboxForm: {
    <T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: CheckboxFormProps<T>): react_jsx_runtime.JSX.Element;
    Group: <T_1 extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: CheckboxGroupFormProps<T_1>) => react_jsx_runtime.JSX.Element;
    Item: typeof Checkbox;
};

type ChipGroupFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<ChipGroupProps<boolean>, "value" | "defaultValue">;
declare const ChipGroupForm: <T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: ChipGroupFormProps<T>) => react_jsx_runtime.JSX.Element;

type ChipFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<ChipProps, "value" | "defaultValue">;
declare const ChipForm: {
    <T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: ChipFormProps<T>): react_jsx_runtime.JSX.Element;
    Group: <T_1 extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: ChipGroupFormProps<T_1>) => react_jsx_runtime.JSX.Element;
    Item: typeof Chip;
};

type ColorInputFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<ColorInputProps, "value" | "defaultValue">;
declare function ColorInputForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: ColorInputFormProps<T>): react_jsx_runtime.JSX.Element;

type ColorPickerFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<ColorPickerProps, "value" | "defaultValue">;
declare function ColorPickerForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: ColorPickerFormProps<T>): react_jsx_runtime.JSX.Element;

type DateInputFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<DateInputProps, "value" | "defaultValue">;
declare function DateInputForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: DateInputFormProps<T>): react_jsx_runtime.JSX.Element;

type DatePickerInputFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<DatePickerInputProps, "value" | "defaultValue">;
declare function DatePickerInputForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: DatePickerInputFormProps<T>): react_jsx_runtime.JSX.Element;

type DateTimePickerFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<DateTimePickerProps$1, "value" | "defaultValue">;
declare function DateTimePickerForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: DateTimePickerFormProps<T>): react_jsx_runtime.JSX.Element;

type FileInputFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<FileInputProps, "value" | "defaultValue">;
declare function FileInputForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, multiple, ...props }: FileInputFormProps<T>): react_jsx_runtime.JSX.Element;

type JsonInputFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<JsonInputProps, "value" | "defaultValue">;
declare function JsonInputForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: JsonInputFormProps<T>): react_jsx_runtime.JSX.Element;

type MonthPickerInputFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<MonthPickerInputProps, "value" | "defaultValue">;
declare function MonthPickerInputForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: MonthPickerInputFormProps<T>): react_jsx_runtime.JSX.Element;

type MultiSelectFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<MultiSelectProps, "value" | "defaultValue">;
declare function MultiSelectForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: MultiSelectFormProps<T>): react_jsx_runtime.JSX.Element;

type NativeSelectFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<NativeSelectProps, "value" | "defaultValue">;
declare function NativeSelectForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: NativeSelectFormProps<T>): react_jsx_runtime.JSX.Element;

type NumberInputFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<NumberInputProps, "value" | "defaultValue">;
declare function NumberInputForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: NumberInputFormProps<T>): react_jsx_runtime.JSX.Element;

type PasswordInputFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<PasswordInputProps, "value" | "defaultValue">;
declare function PasswordInputForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: PasswordInputFormProps<T>): react_jsx_runtime.JSX.Element;

type PinInputFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<PinInputProps, "value" | "defaultValue">;
declare function PinInputForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: PinInputFormProps<T>): react_jsx_runtime.JSX.Element;

type RadioGroupFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<RadioGroupProps, "value" | "defaultValue">;
declare function RadioGroupForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: RadioGroupFormProps<T>): react_jsx_runtime.JSX.Element;

type RadioFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<RadioProps, "value" | "defaultValue">;
declare function RadioForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: RadioFormProps<T>): react_jsx_runtime.JSX.Element;
declare namespace RadioForm {
    var Group: typeof RadioGroupForm;
    var Item: typeof Radio;
}

type SegmentedControlFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<SegmentedControlProps, "values" | "defaultValues">;
declare function SegmentedControlForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: SegmentedControlFormProps<T>): react_jsx_runtime.JSX.Element;

type SelectFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<SelectProps, "value" | "defaultValue">;
declare function SelectForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: SelectFormProps<T>): react_jsx_runtime.JSX.Element;

type SliderFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<SliderProps, "value" | "defaultValue">;
declare function SliderForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: SliderFormProps<T>): react_jsx_runtime.JSX.Element;

type SwitchGroupFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<SwitchGroupProps, "value" | "checked" | "defaultValue">;
declare function SwitchGroupForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: SwitchGroupFormProps<T>): react_jsx_runtime.JSX.Element;

type SwitchFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<SwitchProps, "value" | "checked" | "defaultValue">;
declare function SwitchForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: SwitchFormProps<T>): react_jsx_runtime.JSX.Element;
declare namespace SwitchForm {
    var Item: typeof Switch;
    var Group: typeof SwitchGroupForm;
}

type TextareaFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<TextareaProps, "value" | "defaultValue">;
declare function TextareaForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: TextareaFormProps<T>): react_jsx_runtime.JSX.Element;

type TextInputFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<TextInputProps, "value" | "defaultValue">;
declare function TextInputForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: TextInputFormProps<T>): react_jsx_runtime.JSX.Element;

type TimeInputFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<TimeInputProps, "value" | "defaultValue">;
declare function TimeInputForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: TimeInputFormProps<T>): react_jsx_runtime.JSX.Element;

type YearPickerInputFormProps<T extends FieldValues> = UseControllerProps<T> & Omit<YearPickerInputProps, "value" | "defaultValue">;
declare function YearPickerInputForm<T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onChange, ...props }: YearPickerInputFormProps<T>): react_jsx_runtime.JSX.Element;

export { Accordion, type AccordionProps, ActionIcon, type ActionIconProps, Affix, type AffixProps, Alert, type AlertProps, Anchor, type AnchorProps, AspectRatio, type AspectRatioProps, Autocomplete, AutocompleteForm, type AutocompleteFormProps, type AutocompleteProps, Avatar, type AvatarProps, BackgroundImage, type BackgroundImageProps, Badge, type BadgeProps, Blockquote, type BlockquoteProps, Box, type BoxProps, Breadcrumbs, type BreadcrumbsProps, Burger, type BurgerProps, Button, type ButtonProps, Calendar, type CalendarProps, Card, type CardProps, Center, type CenterProps, Checkbox, CheckboxForm, type CheckboxFormProps, CheckboxGroup, CheckboxGroupForm, type CheckboxGroupFormProps, type CheckboxGroupProps, type CheckboxProps, Chip, ChipForm, type ChipFormProps, ChipGroup, ChipGroupForm, type ChipGroupFormProps, type ChipGroupProps, type ChipProps, CloseButton, type CloseButtonProps, Code, type CodeProps, Collapse, type CollapseProps, ColorInput, ColorInputForm, type ColorInputFormProps, type ColorInputProps, ColorPicker, ColorPickerForm, type ColorPickerFormProps, type ColorPickerProps, ColorSwatch, type ColorSwatchProps, Combobox, type ComboboxProps, Container, type ContainerProps, CopyButton, type CopyButtonProps, DateInput, DateInputForm, type DateInputFormProps, type DateInputProps, DatePickerInput, DatePickerInputForm, type DatePickerInputFormProps, type DatePickerInputProps, DateTimePicker, DateTimePickerForm, type DateTimePickerFormProps, type DateTimePickerProps, Dialog, type DialogProps, Divider, type DividerProps, Drawer, type DrawerProps, Fieldset, type FieldsetProps, FileButton, type FileButtonProps, FileInput, FileInputForm, type FileInputFormProps, type FileInputProps, Flex, type FlexProps, FocusTrap, type FocusTrapProps, Grid, type GridProps, Group, type GroupProps, Highlight, type HighlightProps, HoverCard, type HoverCardProps, Image, type ImageProps, Indicator, type IndicatorProps, Input, type InputProps, JsonInput, JsonInputForm, type JsonInputFormProps, type JsonInputProps, Kbd, type KbdProps, List, type ListProps, Loader, type LoaderProps, LoadingOverlay, type LoadingOverlayProps, Mark, type MarkProps, Menu, type MenuProps, Modal, type ModalProps, MonthPicker, MonthPickerInput, MonthPickerInputForm, type MonthPickerInputFormProps, type MonthPickerInputProps, type MonthPickerProps, MultiSelect, MultiSelectForm, type MultiSelectFormProps, type MultiSelectProps, NativeSelect, NativeSelectForm, type NativeSelectFormProps, type NativeSelectProps, NavLink, type NavLinkProps, Notification, type NotificationProps, NumberInput, NumberInputForm, type NumberInputFormProps, type NumberInputProps, Overlay, type OverlayProps, Pagination, type PaginationProps, Paper, type PaperProps, PasswordInput, PasswordInputForm, type PasswordInputFormProps, type PasswordInputProps, Pill, type PillProps, PillsInput, type PillsInputProps, PinInput, PinInputForm, type PinInputFormProps, type PinInputProps, Popover, type PopoverProps, Portal, type PortalProps, Progress, type ProgressProps, Radio, RadioForm, type RadioFormProps, RadioGroup, RadioGroupForm, type RadioGroupFormProps, type RadioGroupProps, type RadioProps, Rating, type RatingProps, RingProgress, type RingProgressProps, ScrollArea, type ScrollAreaProps, SegmentedControl, SegmentedControlForm, type SegmentedControlFormProps, type SegmentedControlProps, Select, SelectForm, type SelectFormProps, type SelectProps, SimpleGrid, type SimpleGridProps, Skeleton, type SkeletonProps, Slider, SliderForm, type SliderFormProps, type SliderProps, Space, type SpaceProps, Spoiler, type SpoilerProps, Stack, type StackProps, Stepper, type StepperProps, Switch, SwitchForm, type SwitchFormProps, SwitchGroup, SwitchGroupForm, type SwitchGroupFormProps, type SwitchGroupProps, type SwitchProps, Table, type TableProps, Tabs, type TabsProps, TagsInput, type TagsInputProps, Text, TextInput, TextInputForm, type TextInputFormProps, type TextInputProps, type TextProps, Textarea, TextareaForm, type TextareaFormProps, type TextareaProps, ThemeIcon, type ThemeIconProps, TimeInput, TimeInputForm, type TimeInputFormProps, type TimeInputProps, Timeline, type TimelineProps, Title, type TitleProps, Tooltip, type TooltipProps, Transition, type TransitionProps, TypographyStylesProvider, type TypographyStylesProviderProps, UnstyledButton, type UnstyledButtonProps, VisuallyHidden, type VisuallyHiddenProps, YearPicker, YearPickerInput, YearPickerInputForm, type YearPickerInputFormProps, type YearPickerInputProps, type YearPickerProps };
