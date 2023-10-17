import { jsx } from 'react/jsx-runtime';
import { createPolymorphicComponent, ActionIcon as ActionIcon$1, Button as Button$1, CloseButton as CloseButton$1, CopyButton as CopyButton$1, FileButton as FileButton$1, UnstyledButton as UnstyledButton$1, Autocomplete as Autocomplete$1, Combobox as Combobox$1, MultiSelect as MultiSelect$1, Pill as Pill$1, PillsInput as PillsInput$1, Select as Select$1, TagsInput as TagsInput$1, Accordion as Accordion$1, Avatar as Avatar$1, BackgroundImage as BackgroundImage$1, Badge as Badge$1, Card as Card$1, ColorSwatch as ColorSwatch$1, Image as Image$1, Indicator as Indicator$1, Kbd as Kbd$1, Spoiler as Spoiler$1, ThemeIcon as ThemeIcon$1, Timeline as Timeline$1, Alert as Alert$1, Loader as Loader$1, Notification as Notification$1, Progress as Progress$1, RingProgress as RingProgress$1, Skeleton as Skeleton$1, Checkbox as Checkbox$1, CheckboxGroup as CheckboxGroup$1, Chip as Chip$1, ChipGroup as ChipGroup$1, ColorInput as ColorInput$1, ColorPicker as ColorPicker$1, Fieldset as Fieldset$1, FileInput as FileInput$1, Input as Input$1, JsonInput as JsonInput$1, NativeSelect as NativeSelect$1, NumberInput as NumberInput$1, PasswordInput as PasswordInput$1, PinInput as PinInput$1, Radio as Radio$1, RadioGroup as RadioGroup$1, Rating as Rating$1, SegmentedControl as SegmentedControl$1, Slider as Slider$1, Switch as Switch$1, SwitchGroup as SwitchGroup$1, Textarea as Textarea$1, TextInput as TextInput$1, AspectRatio as AspectRatio$1, Center as Center$1, Container as Container$1, Flex as Flex$1, Grid as Grid$1, Group as Group$1, SimpleGrid as SimpleGrid$1, Space as Space$1, Stack as Stack$1, Box as Box$1, Collapse as Collapse$1, Divider as Divider$1, FocusTrap as FocusTrap$1, Paper as Paper$1, Portal as Portal$1, ScrollArea as ScrollArea$1, Transition as Transition$1, VisuallyHidden as VisuallyHidden$1, Anchor as Anchor$1, Breadcrumbs as Breadcrumbs$1, Burger as Burger$1, NavLink as NavLink$1, Pagination as Pagination$1, Stepper as Stepper$1, Tabs as Tabs$1, Affix as Affix$1, Dialog as Dialog$1, Drawer as Drawer$1, HoverCard as HoverCard$1, LoadingOverlay as LoadingOverlay$1, Menu as Menu$1, Modal as Modal$1, Overlay as Overlay$1, Popover as Popover$1, Tooltip as Tooltip$1, Blockquote as Blockquote$1, Code as Code$1, Highlight as Highlight$1, List as List$1, Mark as Mark$1, Table as Table$1, Text as Text$1, Title as Title$1, TypographyStylesProvider as TypographyStylesProvider$1 } from '@mantine/core';
export { MantineProvider } from '@mantine/core';
import { forwardRef } from 'react';
import { Calendar as Calendar$1, DateInput as DateInput$1, DatePickerInput as DatePickerInput$1, DateTimePicker as DateTimePicker$1, MonthPicker as MonthPicker$1, MonthPickerInput as MonthPickerInput$1, TimeInput as TimeInput$1, YearPicker as YearPicker$1, YearPickerInput as YearPickerInput$1 } from '@mantine/dates';
export { DatesProvider } from '@mantine/dates';
import { useController } from 'react-hook-form';
export * from '@mantine/hooks';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var ActionIcon = createPolymorphicComponent(forwardRef(function (props, ref) {
    return (jsx(ActionIcon$1, __assign({}, props, { ref: ref })));
}));

var Button = createPolymorphicComponent(forwardRef(function (props, ref) {
    return (jsx(Button$1, __assign({}, props, { ref: ref })));
}));

function CloseButton(props) {
    return (jsx(CloseButton$1, __assign({}, props)));
}

function CopyButton(props) {
    return (jsx(CopyButton$1, __assign({}, props)));
}

function FileButton(props) {
    return (jsx(FileButton$1, __assign({}, props)));
}

var UnstyledButton = createPolymorphicComponent(forwardRef(function (props, ref) {
    return (jsx(UnstyledButton$1, __assign({}, props, { ref: ref })));
}));

function Autocomplete(props) {
    return (jsx(Autocomplete$1, __assign({}, props)));
}

function Combobox(props) {
    return (jsx(Combobox$1, __assign({}, props)));
}

function MultiSelect(props) {
    return (jsx(MultiSelect$1, __assign({}, props)));
}

function Pill(props) {
    return (jsx(Pill$1, __assign({}, props)));
}

function PillsInput(props) {
    return (jsx(PillsInput$1, __assign({}, props)));
}

function Select(props) {
    return (jsx(Select$1, __assign({}, props)));
}

function TagsInput(props) {
    return (jsx(TagsInput$1, __assign({}, props)));
}

function Accordion(props) {
    return (jsx(Accordion$1, __assign({}, props)));
}

var Avatar = createPolymorphicComponent(forwardRef(function (props, ref) {
    return (jsx(Avatar$1, __assign({}, props, { ref: ref })));
}));

var BackgroundImage = createPolymorphicComponent(forwardRef(function (props, ref) {
    return (jsx(BackgroundImage$1, __assign({}, props, { ref: ref })));
}));

var Badge = createPolymorphicComponent(forwardRef(function (props, ref) {
    return (jsx(Badge$1, __assign({}, props, { ref: ref })));
}));

var Card = createPolymorphicComponent(forwardRef(function (props, ref) {
    return (jsx(Card$1, __assign({}, props, { ref: ref })));
}));

var ColorSwatch = createPolymorphicComponent(forwardRef(function (props, ref) {
    return (jsx(ColorSwatch$1, __assign({}, props, { ref: ref })));
}));

var Image = createPolymorphicComponent(forwardRef(function (props, ref) {
    return (jsx(Image$1, __assign({}, props, { ref: ref })));
}));

function Indicator(props) {
    return (jsx(Indicator$1, __assign({}, props)));
}

function Kbd(props) {
    return (jsx(Kbd$1, __assign({}, props)));
}

function Spoiler(props) {
    return (jsx(Spoiler$1, __assign({}, props)));
}

function ThemeIcon(props) {
    return (jsx(ThemeIcon$1, __assign({}, props)));
}

function Timeline(props) {
    return (jsx(Timeline$1, __assign({}, props)));
}

function Alert(props) {
    return (jsx(Alert$1, __assign({}, props)));
}

function Loader(props) {
    return (jsx(Loader$1, __assign({}, props)));
}

function Notification(props) {
    return (jsx(Notification$1, __assign({}, props)));
}

function Progress(props) {
    return (jsx(Progress$1, __assign({}, props)));
}

function RingProgress(props) {
    return (jsx(RingProgress$1, __assign({}, props)));
}

function Skeleton(props) {
    return (jsx(Skeleton$1, __assign({}, props)));
}

function Checkbox(props) {
    return (jsx(Checkbox$1, __assign({}, props)));
}
function CheckboxGroup(props) {
    return (jsx(CheckboxGroup$1, __assign({}, props)));
}

function Chip(props) {
    return (jsx(Chip$1, __assign({}, props)));
}
function ChipGroup(props) {
    return (jsx(ChipGroup$1, __assign({}, props)));
}

function ColorInput(props) {
    return (jsx(ColorInput$1, __assign({}, props)));
}

function ColorPicker(props) {
    return (jsx(ColorPicker$1, __assign({}, props)));
}

function Fieldset(props) {
    return (jsx(Fieldset$1, __assign({}, props)));
}

function FileInput(props) {
    return (jsx(FileInput$1, __assign({}, props)));
}

var Input = createPolymorphicComponent(forwardRef(function (props, ref) {
    return (jsx(Input$1, __assign({}, props, { ref: ref })));
}));

function JsonInput(props) {
    return (jsx(JsonInput$1, __assign({}, props)));
}

function NativeSelect(props) {
    return (jsx(NativeSelect$1, __assign({}, props)));
}

function NumberInput(props) {
    return (jsx(NumberInput$1, __assign({}, props)));
}

function PasswordInput(props) {
    return (jsx(PasswordInput$1, __assign({}, props)));
}

function PinInput(props) {
    return (jsx(PinInput$1, __assign({}, props)));
}

function Radio(props) {
    return (jsx(Radio$1, __assign({}, props)));
}
function RadioGroup(props) {
    return (jsx(RadioGroup$1, __assign({}, props)));
}

function Rating(props) {
    return (jsx(Rating$1, __assign({}, props)));
}

function SegmentedControl(props) {
    return (jsx(SegmentedControl$1, __assign({}, props)));
}

function Slider(props) {
    return (jsx(Slider$1, __assign({}, props)));
}

function Switch(props) {
    return (jsx(Switch$1, __assign({}, props)));
}
function SwitchGroup(props) {
    return (jsx(SwitchGroup$1, __assign({}, props)));
}

function Textarea(props) {
    return (jsx(Textarea$1, __assign({}, props)));
}

function TextInput(props) {
    return (jsx(TextInput$1, __assign({}, props)));
}

function AspectRatio(props) {
    return (jsx(AspectRatio$1, __assign({}, props)));
}

var Center = createPolymorphicComponent(forwardRef(function (props, ref) {
    return (jsx(Center$1, __assign({}, props, { ref: ref })));
}));

function Container(props) {
    return (jsx(Container$1, __assign({}, props)));
}

function Flex(props) {
    return (jsx(Flex$1, __assign({}, props)));
}

function Grid(props) {
    return (jsx(Grid$1, __assign({}, props)));
}

function Group(props) {
    return (jsx(Group$1, __assign({}, props)));
}

function SimpleGrid(props) {
    return (jsx(SimpleGrid$1, __assign({}, props)));
}

function Space(props) {
    return (jsx(Space$1, __assign({}, props)));
}

function Stack(props) {
    return (jsx(Stack$1, __assign({}, props)));
}

var Box = createPolymorphicComponent(forwardRef(function (props, ref) {
    return (jsx(Box$1, __assign({}, props, { ref: ref })));
}));

function Collapse(props) {
    return (jsx(Collapse$1, __assign({}, props)));
}

function Divider(props) {
    return (jsx(Divider$1, __assign({}, props)));
}

function FocusTrap(props) {
    return (jsx(FocusTrap$1, __assign({}, props)));
}

var Paper = createPolymorphicComponent(forwardRef(function (props, ref) {
    return (jsx(Paper$1, __assign({}, props, { ref: ref })));
}));

function Portal(props) {
    return (jsx(Portal$1, __assign({}, props)));
}

function ScrollArea(props) {
    return (jsx(ScrollArea$1, __assign({}, props)));
}

function Transition(props) {
    return (jsx(Transition$1, __assign({}, props)));
}

function VisuallyHidden(props) {
    return (jsx(VisuallyHidden$1, __assign({}, props)));
}

var Anchor = createPolymorphicComponent(forwardRef(function (props, ref) {
    return (jsx(Anchor$1, __assign({}, props, { ref: ref })));
}));

function Breadcrumbs(props) {
    return (jsx(Breadcrumbs$1, __assign({}, props)));
}

function Burger(props) {
    return (jsx(Burger$1, __assign({}, props)));
}

var NavLink = createPolymorphicComponent(forwardRef(function (props, ref) {
    return (jsx(NavLink$1, __assign({}, props, { ref: ref })));
}));

function Pagination(props) {
    return (jsx(Pagination$1, __assign({}, props)));
}

function Stepper(props) {
    return (jsx(Stepper$1, __assign({}, props)));
}

function Tabs(props) {
    return (jsx(Tabs$1, __assign({}, props)));
}

function Affix(props) {
    return (jsx(Affix$1, __assign({}, props)));
}

function Dialog(props) {
    return (jsx(Dialog$1, __assign({}, props)));
}

function Drawer(props) {
    return (jsx(Drawer$1, __assign({}, props)));
}

function HoverCard(props) {
    return (jsx(HoverCard$1, __assign({}, props)));
}

function LoadingOverlay(props) {
    return (jsx(LoadingOverlay$1, __assign({}, props)));
}

function Menu(props) {
    return (jsx(Menu$1, __assign({}, props)));
}

function Modal(props) {
    return (jsx(Modal$1, __assign({}, props)));
}

var Overlay = createPolymorphicComponent(forwardRef(function (props, ref) {
    return (jsx(Overlay$1, __assign({}, props, { ref: ref })));
}));

function Popover(props) {
    return (jsx(Popover$1, __assign({}, props)));
}

function Tooltip(props) {
    return (jsx(Tooltip$1, __assign({}, props)));
}

function Blockquote(props) {
    return (jsx(Blockquote$1, __assign({}, props)));
}

function Code(props) {
    return (jsx(Code$1, __assign({}, props)));
}

function Highlight(props) {
    return (jsx(Highlight$1, __assign({}, props)));
}

function List(props) {
    return (jsx(List$1, __assign({}, props)));
}

function Mark(props) {
    return (jsx(Mark$1, __assign({}, props)));
}

function Table(props) {
    return (jsx(Table$1, __assign({}, props)));
}

var Text = createPolymorphicComponent(forwardRef(function (props, ref) {
    return (jsx(Text$1, __assign({}, props, { ref: ref })));
}));

function Title(props) {
    return (jsx(Title$1, __assign({}, props)));
}

function TypographyStylesProvider(props) {
    return (jsx(TypographyStylesProvider$1, __assign({}, props)));
}

function Calendar(props) {
    return (jsx(Calendar$1, __assign({}, props)));
}

function DateInput(props) {
    return (jsx(DateInput$1, __assign({}, props)));
}

function DatePickerInput(props) {
    return (jsx(DatePickerInput$1, __assign({}, props)));
}

function DateTimePicker(props) {
    return (jsx(DateTimePicker$1, __assign({}, props)));
}

function MonthPicker(props) {
    return (jsx(MonthPicker$1, __assign({}, props)));
}

function MonthPickerInput(props) {
    return (jsx(MonthPickerInput$1, __assign({}, props)));
}

function TimeInput(props) {
    return (jsx(TimeInput$1, __assign({}, props)));
}

function YearPicker(props) {
    return (jsx(YearPicker$1, __assign({}, props)));
}

function YearPickerInput(props) {
    return (jsx(YearPickerInput$1, __assign({}, props)));
}

function AutocompleteForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsx(Autocomplete, __assign({ error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message, value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        } }, field, props)));
}

var CheckboxGroupForm = function (_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsx(CheckboxGroup, __assign({ error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message, value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        } }, field, props)));
};

var CheckboxForm = function (_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsx(Checkbox, __assign({ error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message, value: value, checked: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        } }, field, props)));
};
CheckboxForm.Group = CheckboxGroupForm;
CheckboxForm.Item = Checkbox;

var ChipGroupForm = function (_a) {
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _b = useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }).field, value = _b.value, fieldOnChange = _b.onChange; _b.ref; var field = __rest(_b, ["value", "onChange", "ref"]);
    return (jsx(ChipGroup, __assign({ value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        } }, field, props)));
};

var ChipForm = function (_a) {
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _b = useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }).field, value = _b.value, fieldOnChange = _b.onChange, field = __rest(_b, ["value", "onChange"]);
    return (jsx(Chip, __assign({ value: value, checked: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        } }, field, props)));
};
ChipForm.Group = ChipGroupForm;
ChipForm.Item = Chip;

function ColorInputForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsx(ColorInput, __assign({ error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message, value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        } }, field, props)));
}

function ColorPickerForm(_a) {
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _b = useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }).field, value = _b.value, fieldOnChange = _b.onChange, field = __rest(_b, ["value", "onChange"]);
    return (jsx(ColorPicker, __assign({ value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        } }, field, props)));
}

function DateInputForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsx(DateInput, __assign({ error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message, value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        } }, field, props)));
}

function DatePickerInputForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsx(DatePickerInput, __assign({ error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message, value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        } }, field, props)));
}

function DateTimePickerForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsx(DateTimePicker, __assign({ error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message, value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        } }, field, props)));
}

function FileInputForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister; _a.multiple; var props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "multiple"]);
    var _c = useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, field = __rest(_d, ["value"]), fieldState = _c.fieldState;
    return (jsx(FileInput, __assign({ value: value, error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message }, field, props)));
}

function JsonInputForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsx(JsonInput, __assign({ value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        }, error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message }, field, props)));
}

function MonthPickerInputForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsx(MonthPickerInput, __assign({ error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message, value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        } }, field, props)));
}

function MultiSelectForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsx(MultiSelect, __assign({ value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        }, error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message }, field, props)));
}

function NativeSelectForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsx(NativeSelect, __assign({ value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        }, error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message }, field, props)));
}

function NumberInputForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsx(NumberInput, __assign({ value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        }, error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message }, field, props)));
}

function PasswordInputForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsx(PasswordInput, __assign({ value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        }, error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message }, field, props)));
}

function PinInputForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsx(PinInput, __assign({ value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        }, error: !(((_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message) == null) }, field, props)));
}

function RadioGroupForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsx(RadioGroup, __assign({ value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        }, error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message }, field, props)));
}

function RadioForm(_a) {
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _b = useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }).field, value = _b.value, fieldOnChange = _b.onChange, field = __rest(_b, ["value", "onChange"]);
    return (jsx(Radio, __assign({ value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        } }, field, props)));
}
RadioForm.Group = RadioGroupForm;
RadioForm.Item = Radio;

function SegmentedControlForm(_a) {
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _b = useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }).field, value = _b.value, fieldOnChange = _b.onChange, field = __rest(_b, ["value", "onChange"]);
    return (jsx(SegmentedControl, __assign({ value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        } }, field, props)));
}

function SelectForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsx(Select, __assign({ value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        }, error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message }, field, props)));
}

function SliderForm(_a) {
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _b = useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }).field, value = _b.value, fieldOnChange = _b.onChange, field = __rest(_b, ["value", "onChange"]);
    return (jsx(Slider, __assign({ value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        } }, field, props)));
}

function SwitchGroupForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsx(SwitchGroup, __assign({ value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        }, error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message }, field, props)));
}

function SwitchForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsx(Switch, __assign({ value: value, checked: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        }, error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message }, field, props)));
}
SwitchForm.Item = Switch;
SwitchForm.Group = SwitchGroupForm;

function TextareaForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsx(Textarea, __assign({ value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        }, error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message }, field, props)));
}

function TextInputForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsx(TextInput, __assign({ value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        }, error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message }, field, props)));
}

function TimeInputForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsx(TimeInput, __assign({ error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message, value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        } }, field, props)));
}

function YearPickerInputForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsx(YearPickerInput, __assign({ error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message, value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        } }, field, props)));
}

export { Accordion, ActionIcon, Affix, Alert, Anchor, AspectRatio, Autocomplete, AutocompleteForm, Avatar, BackgroundImage, Badge, Blockquote, Box, Breadcrumbs, Burger, Button, Calendar, Card, Center, Checkbox, CheckboxForm, CheckboxGroup, CheckboxGroupForm, Chip, ChipForm, ChipGroup, ChipGroupForm, CloseButton, Code, Collapse, ColorInput, ColorInputForm, ColorPicker, ColorPickerForm, ColorSwatch, Combobox, Container, CopyButton, DateInput, DateInputForm, DatePickerInput, DatePickerInputForm, DateTimePicker, DateTimePickerForm, Dialog, Divider, Drawer, Fieldset, FileButton, FileInput, FileInputForm, Flex, FocusTrap, Grid, Group, Highlight, HoverCard, Image, Indicator, Input, JsonInput, JsonInputForm, Kbd, List, Loader, LoadingOverlay, Mark, Menu, Modal, MonthPicker, MonthPickerInput, MonthPickerInputForm, MultiSelect, MultiSelectForm, NativeSelect, NativeSelectForm, NavLink, Notification, NumberInput, NumberInputForm, Overlay, Pagination, Paper, PasswordInput, PasswordInputForm, Pill, PillsInput, PinInput, PinInputForm, Popover, Portal, Progress, Radio, RadioForm, RadioGroup, RadioGroupForm, Rating, RingProgress, ScrollArea, SegmentedControl, SegmentedControlForm, Select, SelectForm, SimpleGrid, Skeleton, Slider, SliderForm, Space, Spoiler, Stack, Stepper, Switch, SwitchForm, SwitchGroup, SwitchGroupForm, Table, Tabs, TagsInput, Text, TextInput, TextInputForm, Textarea, TextareaForm, ThemeIcon, TimeInput, TimeInputForm, Timeline, Title, Tooltip, Transition, TypographyStylesProvider, UnstyledButton, VisuallyHidden, YearPicker, YearPickerInput, YearPickerInputForm };
//# sourceMappingURL=index.esm.js.map
