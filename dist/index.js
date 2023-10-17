'use strict';

var jsxRuntime = require('react/jsx-runtime');
var core = require('@mantine/core');
var react = require('react');
var dates = require('@mantine/dates');
var reactHookForm = require('react-hook-form');
var hooks = require('@mantine/hooks');

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

var ActionIcon = core.createPolymorphicComponent(react.forwardRef(function (props, ref) {
    return (jsxRuntime.jsx(core.ActionIcon, __assign({}, props, { ref: ref })));
}));

var Button = core.createPolymorphicComponent(react.forwardRef(function (props, ref) {
    return (jsxRuntime.jsx(core.Button, __assign({}, props, { ref: ref })));
}));

function CloseButton(props) {
    return (jsxRuntime.jsx(core.CloseButton, __assign({}, props)));
}

function CopyButton(props) {
    return (jsxRuntime.jsx(core.CopyButton, __assign({}, props)));
}

function FileButton(props) {
    return (jsxRuntime.jsx(core.FileButton, __assign({}, props)));
}

var UnstyledButton = core.createPolymorphicComponent(react.forwardRef(function (props, ref) {
    return (jsxRuntime.jsx(core.UnstyledButton, __assign({}, props, { ref: ref })));
}));

function Autocomplete(props) {
    return (jsxRuntime.jsx(core.Autocomplete, __assign({}, props)));
}

function Combobox(props) {
    return (jsxRuntime.jsx(core.Combobox, __assign({}, props)));
}

function MultiSelect(props) {
    return (jsxRuntime.jsx(core.MultiSelect, __assign({}, props)));
}

function Pill(props) {
    return (jsxRuntime.jsx(core.Pill, __assign({}, props)));
}

function PillsInput(props) {
    return (jsxRuntime.jsx(core.PillsInput, __assign({}, props)));
}

function Select(props) {
    return (jsxRuntime.jsx(core.Select, __assign({}, props)));
}

function TagsInput(props) {
    return (jsxRuntime.jsx(core.TagsInput, __assign({}, props)));
}

function Accordion(props) {
    return (jsxRuntime.jsx(core.Accordion, __assign({}, props)));
}

var Avatar = core.createPolymorphicComponent(react.forwardRef(function (props, ref) {
    return (jsxRuntime.jsx(core.Avatar, __assign({}, props, { ref: ref })));
}));

var BackgroundImage = core.createPolymorphicComponent(react.forwardRef(function (props, ref) {
    return (jsxRuntime.jsx(core.BackgroundImage, __assign({}, props, { ref: ref })));
}));

var Badge = core.createPolymorphicComponent(react.forwardRef(function (props, ref) {
    return (jsxRuntime.jsx(core.Badge, __assign({}, props, { ref: ref })));
}));

var Card = core.createPolymorphicComponent(react.forwardRef(function (props, ref) {
    return (jsxRuntime.jsx(core.Card, __assign({}, props, { ref: ref })));
}));

var ColorSwatch = core.createPolymorphicComponent(react.forwardRef(function (props, ref) {
    return (jsxRuntime.jsx(core.ColorSwatch, __assign({}, props, { ref: ref })));
}));

var Image = core.createPolymorphicComponent(react.forwardRef(function (props, ref) {
    return (jsxRuntime.jsx(core.Image, __assign({}, props, { ref: ref })));
}));

function Indicator(props) {
    return (jsxRuntime.jsx(core.Indicator, __assign({}, props)));
}

function Kbd(props) {
    return (jsxRuntime.jsx(core.Kbd, __assign({}, props)));
}

function Spoiler(props) {
    return (jsxRuntime.jsx(core.Spoiler, __assign({}, props)));
}

function ThemeIcon(props) {
    return (jsxRuntime.jsx(core.ThemeIcon, __assign({}, props)));
}

function Timeline(props) {
    return (jsxRuntime.jsx(core.Timeline, __assign({}, props)));
}

function Alert(props) {
    return (jsxRuntime.jsx(core.Alert, __assign({}, props)));
}

function Loader(props) {
    return (jsxRuntime.jsx(core.Loader, __assign({}, props)));
}

function Notification(props) {
    return (jsxRuntime.jsx(core.Notification, __assign({}, props)));
}

function Progress(props) {
    return (jsxRuntime.jsx(core.Progress, __assign({}, props)));
}

function RingProgress(props) {
    return (jsxRuntime.jsx(core.RingProgress, __assign({}, props)));
}

function Skeleton(props) {
    return (jsxRuntime.jsx(core.Skeleton, __assign({}, props)));
}

function Checkbox(props) {
    return (jsxRuntime.jsx(core.Checkbox, __assign({}, props)));
}
function CheckboxGroup(props) {
    return (jsxRuntime.jsx(core.CheckboxGroup, __assign({}, props)));
}

function Chip(props) {
    return (jsxRuntime.jsx(core.Chip, __assign({}, props)));
}
function ChipGroup(props) {
    return (jsxRuntime.jsx(core.ChipGroup, __assign({}, props)));
}

function ColorInput(props) {
    return (jsxRuntime.jsx(core.ColorInput, __assign({}, props)));
}

function ColorPicker(props) {
    return (jsxRuntime.jsx(core.ColorPicker, __assign({}, props)));
}

function Fieldset(props) {
    return (jsxRuntime.jsx(core.Fieldset, __assign({}, props)));
}

function FileInput(props) {
    return (jsxRuntime.jsx(core.FileInput, __assign({}, props)));
}

var Input = core.createPolymorphicComponent(react.forwardRef(function (props, ref) {
    return (jsxRuntime.jsx(core.Input, __assign({}, props, { ref: ref })));
}));

function JsonInput(props) {
    return (jsxRuntime.jsx(core.JsonInput, __assign({}, props)));
}

function NativeSelect(props) {
    return (jsxRuntime.jsx(core.NativeSelect, __assign({}, props)));
}

function NumberInput(props) {
    return (jsxRuntime.jsx(core.NumberInput, __assign({}, props)));
}

function PasswordInput(props) {
    return (jsxRuntime.jsx(core.PasswordInput, __assign({}, props)));
}

function PinInput(props) {
    return (jsxRuntime.jsx(core.PinInput, __assign({}, props)));
}

function Radio(props) {
    return (jsxRuntime.jsx(core.Radio, __assign({}, props)));
}
function RadioGroup(props) {
    return (jsxRuntime.jsx(core.RadioGroup, __assign({}, props)));
}

function Rating(props) {
    return (jsxRuntime.jsx(core.Rating, __assign({}, props)));
}

function SegmentedControl(props) {
    return (jsxRuntime.jsx(core.SegmentedControl, __assign({}, props)));
}

function Slider(props) {
    return (jsxRuntime.jsx(core.Slider, __assign({}, props)));
}

function Switch(props) {
    return (jsxRuntime.jsx(core.Switch, __assign({}, props)));
}
function SwitchGroup(props) {
    return (jsxRuntime.jsx(core.SwitchGroup, __assign({}, props)));
}

function Textarea(props) {
    return (jsxRuntime.jsx(core.Textarea, __assign({}, props)));
}

function TextInput(props) {
    return (jsxRuntime.jsx(core.TextInput, __assign({}, props)));
}

function AspectRatio(props) {
    return (jsxRuntime.jsx(core.AspectRatio, __assign({}, props)));
}

var Center = core.createPolymorphicComponent(react.forwardRef(function (props, ref) {
    return (jsxRuntime.jsx(core.Center, __assign({}, props, { ref: ref })));
}));

function Container(props) {
    return (jsxRuntime.jsx(core.Container, __assign({}, props)));
}

function Flex(props) {
    return (jsxRuntime.jsx(core.Flex, __assign({}, props)));
}

function Grid(props) {
    return (jsxRuntime.jsx(core.Grid, __assign({}, props)));
}

function Group(props) {
    return (jsxRuntime.jsx(core.Group, __assign({}, props)));
}

function SimpleGrid(props) {
    return (jsxRuntime.jsx(core.SimpleGrid, __assign({}, props)));
}

function Space(props) {
    return (jsxRuntime.jsx(core.Space, __assign({}, props)));
}

function Stack(props) {
    return (jsxRuntime.jsx(core.Stack, __assign({}, props)));
}

var Box = core.createPolymorphicComponent(react.forwardRef(function (props, ref) {
    return (jsxRuntime.jsx(core.Box, __assign({}, props, { ref: ref })));
}));

function Collapse(props) {
    return (jsxRuntime.jsx(core.Collapse, __assign({}, props)));
}

function Divider(props) {
    return (jsxRuntime.jsx(core.Divider, __assign({}, props)));
}

function FocusTrap(props) {
    return (jsxRuntime.jsx(core.FocusTrap, __assign({}, props)));
}

var Paper = core.createPolymorphicComponent(react.forwardRef(function (props, ref) {
    return (jsxRuntime.jsx(core.Paper, __assign({}, props, { ref: ref })));
}));

function Portal(props) {
    return (jsxRuntime.jsx(core.Portal, __assign({}, props)));
}

function ScrollArea(props) {
    return (jsxRuntime.jsx(core.ScrollArea, __assign({}, props)));
}

function Transition(props) {
    return (jsxRuntime.jsx(core.Transition, __assign({}, props)));
}

function VisuallyHidden(props) {
    return (jsxRuntime.jsx(core.VisuallyHidden, __assign({}, props)));
}

var Anchor = core.createPolymorphicComponent(react.forwardRef(function (props, ref) {
    return (jsxRuntime.jsx(core.Anchor, __assign({}, props, { ref: ref })));
}));

function Breadcrumbs(props) {
    return (jsxRuntime.jsx(core.Breadcrumbs, __assign({}, props)));
}

function Burger(props) {
    return (jsxRuntime.jsx(core.Burger, __assign({}, props)));
}

var NavLink = core.createPolymorphicComponent(react.forwardRef(function (props, ref) {
    return (jsxRuntime.jsx(core.NavLink, __assign({}, props, { ref: ref })));
}));

function Pagination(props) {
    return (jsxRuntime.jsx(core.Pagination, __assign({}, props)));
}

function Stepper(props) {
    return (jsxRuntime.jsx(core.Stepper, __assign({}, props)));
}

function Tabs(props) {
    return (jsxRuntime.jsx(core.Tabs, __assign({}, props)));
}

function Affix(props) {
    return (jsxRuntime.jsx(core.Affix, __assign({}, props)));
}

function Dialog(props) {
    return (jsxRuntime.jsx(core.Dialog, __assign({}, props)));
}

function Drawer(props) {
    return (jsxRuntime.jsx(core.Drawer, __assign({}, props)));
}

function HoverCard(props) {
    return (jsxRuntime.jsx(core.HoverCard, __assign({}, props)));
}

function LoadingOverlay(props) {
    return (jsxRuntime.jsx(core.LoadingOverlay, __assign({}, props)));
}

function Menu(props) {
    return (jsxRuntime.jsx(core.Menu, __assign({}, props)));
}

function Modal(props) {
    return (jsxRuntime.jsx(core.Modal, __assign({}, props)));
}

var Overlay = core.createPolymorphicComponent(react.forwardRef(function (props, ref) {
    return (jsxRuntime.jsx(core.Overlay, __assign({}, props, { ref: ref })));
}));

function Popover(props) {
    return (jsxRuntime.jsx(core.Popover, __assign({}, props)));
}

function Tooltip(props) {
    return (jsxRuntime.jsx(core.Tooltip, __assign({}, props)));
}

function Blockquote(props) {
    return (jsxRuntime.jsx(core.Blockquote, __assign({}, props)));
}

function Code(props) {
    return (jsxRuntime.jsx(core.Code, __assign({}, props)));
}

function Highlight(props) {
    return (jsxRuntime.jsx(core.Highlight, __assign({}, props)));
}

function List(props) {
    return (jsxRuntime.jsx(core.List, __assign({}, props)));
}

function Mark(props) {
    return (jsxRuntime.jsx(core.Mark, __assign({}, props)));
}

function Table(props) {
    return (jsxRuntime.jsx(core.Table, __assign({}, props)));
}

var Text = core.createPolymorphicComponent(react.forwardRef(function (props, ref) {
    return (jsxRuntime.jsx(core.Text, __assign({}, props, { ref: ref })));
}));

function Title(props) {
    return (jsxRuntime.jsx(core.Title, __assign({}, props)));
}

function TypographyStylesProvider(props) {
    return (jsxRuntime.jsx(core.TypographyStylesProvider, __assign({}, props)));
}

function Calendar(props) {
    return (jsxRuntime.jsx(dates.Calendar, __assign({}, props)));
}

function DateInput(props) {
    return (jsxRuntime.jsx(dates.DateInput, __assign({}, props)));
}

function DatePickerInput(props) {
    return (jsxRuntime.jsx(dates.DatePickerInput, __assign({}, props)));
}

function DateTimePicker(props) {
    return (jsxRuntime.jsx(dates.DateTimePicker, __assign({}, props)));
}

function MonthPicker(props) {
    return (jsxRuntime.jsx(dates.MonthPicker, __assign({}, props)));
}

function MonthPickerInput(props) {
    return (jsxRuntime.jsx(dates.MonthPickerInput, __assign({}, props)));
}

function TimeInput(props) {
    return (jsxRuntime.jsx(dates.TimeInput, __assign({}, props)));
}

function YearPicker(props) {
    return (jsxRuntime.jsx(dates.YearPicker, __assign({}, props)));
}

function YearPickerInput(props) {
    return (jsxRuntime.jsx(dates.YearPickerInput, __assign({}, props)));
}

function AutocompleteForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = reactHookForm.useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsxRuntime.jsx(Autocomplete, __assign({ error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message, value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        } }, field, props)));
}

var CheckboxGroupForm = function (_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = reactHookForm.useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsxRuntime.jsx(CheckboxGroup, __assign({ error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message, value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        } }, field, props)));
};

var CheckboxForm = function (_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = reactHookForm.useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsxRuntime.jsx(Checkbox, __assign({ error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message, value: value, checked: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        } }, field, props)));
};
CheckboxForm.Group = CheckboxGroupForm;
CheckboxForm.Item = Checkbox;

var ChipGroupForm = function (_a) {
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _b = reactHookForm.useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }).field, value = _b.value, fieldOnChange = _b.onChange; _b.ref; var field = __rest(_b, ["value", "onChange", "ref"]);
    return (jsxRuntime.jsx(ChipGroup, __assign({ value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        } }, field, props)));
};

var ChipForm = function (_a) {
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _b = reactHookForm.useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }).field, value = _b.value, fieldOnChange = _b.onChange, field = __rest(_b, ["value", "onChange"]);
    return (jsxRuntime.jsx(Chip, __assign({ value: value, checked: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        } }, field, props)));
};
ChipForm.Group = ChipGroupForm;
ChipForm.Item = Chip;

function ColorInputForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = reactHookForm.useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsxRuntime.jsx(ColorInput, __assign({ error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message, value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        } }, field, props)));
}

function ColorPickerForm(_a) {
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _b = reactHookForm.useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }).field, value = _b.value, fieldOnChange = _b.onChange, field = __rest(_b, ["value", "onChange"]);
    return (jsxRuntime.jsx(ColorPicker, __assign({ value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        } }, field, props)));
}

function DateInputForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = reactHookForm.useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsxRuntime.jsx(DateInput, __assign({ error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message, value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        } }, field, props)));
}

function DatePickerInputForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = reactHookForm.useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsxRuntime.jsx(DatePickerInput, __assign({ error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message, value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        } }, field, props)));
}

function DateTimePickerForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = reactHookForm.useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsxRuntime.jsx(DateTimePicker, __assign({ error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message, value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        } }, field, props)));
}

function FileInputForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister; _a.multiple; var props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "multiple"]);
    var _c = reactHookForm.useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, field = __rest(_d, ["value"]), fieldState = _c.fieldState;
    return (jsxRuntime.jsx(FileInput, __assign({ value: value, error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message }, field, props)));
}

function JsonInputForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = reactHookForm.useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsxRuntime.jsx(JsonInput, __assign({ value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        }, error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message }, field, props)));
}

function MonthPickerInputForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = reactHookForm.useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsxRuntime.jsx(MonthPickerInput, __assign({ error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message, value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        } }, field, props)));
}

function MultiSelectForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = reactHookForm.useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsxRuntime.jsx(MultiSelect, __assign({ value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        }, error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message }, field, props)));
}

function NativeSelectForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = reactHookForm.useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsxRuntime.jsx(NativeSelect, __assign({ value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        }, error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message }, field, props)));
}

function NumberInputForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = reactHookForm.useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsxRuntime.jsx(NumberInput, __assign({ value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        }, error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message }, field, props)));
}

function PasswordInputForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = reactHookForm.useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsxRuntime.jsx(PasswordInput, __assign({ value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        }, error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message }, field, props)));
}

function PinInputForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = reactHookForm.useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsxRuntime.jsx(PinInput, __assign({ value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        }, error: !(((_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message) == null) }, field, props)));
}

function RadioGroupForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = reactHookForm.useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsxRuntime.jsx(RadioGroup, __assign({ value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        }, error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message }, field, props)));
}

function RadioForm(_a) {
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _b = reactHookForm.useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }).field, value = _b.value, fieldOnChange = _b.onChange, field = __rest(_b, ["value", "onChange"]);
    return (jsxRuntime.jsx(Radio, __assign({ value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        } }, field, props)));
}
RadioForm.Group = RadioGroupForm;
RadioForm.Item = Radio;

function SegmentedControlForm(_a) {
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _b = reactHookForm.useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }).field, value = _b.value, fieldOnChange = _b.onChange, field = __rest(_b, ["value", "onChange"]);
    return (jsxRuntime.jsx(SegmentedControl, __assign({ value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        } }, field, props)));
}

function SelectForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = reactHookForm.useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsxRuntime.jsx(Select, __assign({ value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        }, error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message }, field, props)));
}

function SliderForm(_a) {
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _b = reactHookForm.useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }).field, value = _b.value, fieldOnChange = _b.onChange, field = __rest(_b, ["value", "onChange"]);
    return (jsxRuntime.jsx(Slider, __assign({ value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        } }, field, props)));
}

function SwitchGroupForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = reactHookForm.useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsxRuntime.jsx(SwitchGroup, __assign({ value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        }, error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message }, field, props)));
}

function SwitchForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = reactHookForm.useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsxRuntime.jsx(Switch, __assign({ value: value, checked: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        }, error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message }, field, props)));
}
SwitchForm.Item = Switch;
SwitchForm.Group = SwitchGroupForm;

function TextareaForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = reactHookForm.useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsxRuntime.jsx(Textarea, __assign({ value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        }, error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message }, field, props)));
}

function TextInputForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = reactHookForm.useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsxRuntime.jsx(TextInput, __assign({ value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        }, error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message }, field, props)));
}

function TimeInputForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = reactHookForm.useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsxRuntime.jsx(TimeInput, __assign({ error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message, value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        } }, field, props)));
}

function YearPickerInputForm(_a) {
    var _b;
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _c = reactHookForm.useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }), _d = _c.field, value = _d.value, fieldOnChange = _d.onChange, field = __rest(_d, ["value", "onChange"]), fieldState = _c.fieldState;
    return (jsxRuntime.jsx(YearPickerInput, __assign({ error: (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message, value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        } }, field, props)));
}

Object.defineProperty(exports, 'MantineProvider', {
    enumerable: true,
    get: function () { return core.MantineProvider; }
});
Object.defineProperty(exports, 'DatesProvider', {
    enumerable: true,
    get: function () { return dates.DatesProvider; }
});
exports.Accordion = Accordion;
exports.ActionIcon = ActionIcon;
exports.Affix = Affix;
exports.Alert = Alert;
exports.Anchor = Anchor;
exports.AspectRatio = AspectRatio;
exports.Autocomplete = Autocomplete;
exports.AutocompleteForm = AutocompleteForm;
exports.Avatar = Avatar;
exports.BackgroundImage = BackgroundImage;
exports.Badge = Badge;
exports.Blockquote = Blockquote;
exports.Box = Box;
exports.Breadcrumbs = Breadcrumbs;
exports.Burger = Burger;
exports.Button = Button;
exports.Calendar = Calendar;
exports.Card = Card;
exports.Center = Center;
exports.Checkbox = Checkbox;
exports.CheckboxForm = CheckboxForm;
exports.CheckboxGroup = CheckboxGroup;
exports.CheckboxGroupForm = CheckboxGroupForm;
exports.Chip = Chip;
exports.ChipForm = ChipForm;
exports.ChipGroup = ChipGroup;
exports.ChipGroupForm = ChipGroupForm;
exports.CloseButton = CloseButton;
exports.Code = Code;
exports.Collapse = Collapse;
exports.ColorInput = ColorInput;
exports.ColorInputForm = ColorInputForm;
exports.ColorPicker = ColorPicker;
exports.ColorPickerForm = ColorPickerForm;
exports.ColorSwatch = ColorSwatch;
exports.Combobox = Combobox;
exports.Container = Container;
exports.CopyButton = CopyButton;
exports.DateInput = DateInput;
exports.DateInputForm = DateInputForm;
exports.DatePickerInput = DatePickerInput;
exports.DatePickerInputForm = DatePickerInputForm;
exports.DateTimePicker = DateTimePicker;
exports.DateTimePickerForm = DateTimePickerForm;
exports.Dialog = Dialog;
exports.Divider = Divider;
exports.Drawer = Drawer;
exports.Fieldset = Fieldset;
exports.FileButton = FileButton;
exports.FileInput = FileInput;
exports.FileInputForm = FileInputForm;
exports.Flex = Flex;
exports.FocusTrap = FocusTrap;
exports.Grid = Grid;
exports.Group = Group;
exports.Highlight = Highlight;
exports.HoverCard = HoverCard;
exports.Image = Image;
exports.Indicator = Indicator;
exports.Input = Input;
exports.JsonInput = JsonInput;
exports.JsonInputForm = JsonInputForm;
exports.Kbd = Kbd;
exports.List = List;
exports.Loader = Loader;
exports.LoadingOverlay = LoadingOverlay;
exports.Mark = Mark;
exports.Menu = Menu;
exports.Modal = Modal;
exports.MonthPicker = MonthPicker;
exports.MonthPickerInput = MonthPickerInput;
exports.MonthPickerInputForm = MonthPickerInputForm;
exports.MultiSelect = MultiSelect;
exports.MultiSelectForm = MultiSelectForm;
exports.NativeSelect = NativeSelect;
exports.NativeSelectForm = NativeSelectForm;
exports.NavLink = NavLink;
exports.Notification = Notification;
exports.NumberInput = NumberInput;
exports.NumberInputForm = NumberInputForm;
exports.Overlay = Overlay;
exports.Pagination = Pagination;
exports.Paper = Paper;
exports.PasswordInput = PasswordInput;
exports.PasswordInputForm = PasswordInputForm;
exports.Pill = Pill;
exports.PillsInput = PillsInput;
exports.PinInput = PinInput;
exports.PinInputForm = PinInputForm;
exports.Popover = Popover;
exports.Portal = Portal;
exports.Progress = Progress;
exports.Radio = Radio;
exports.RadioForm = RadioForm;
exports.RadioGroup = RadioGroup;
exports.RadioGroupForm = RadioGroupForm;
exports.Rating = Rating;
exports.RingProgress = RingProgress;
exports.ScrollArea = ScrollArea;
exports.SegmentedControl = SegmentedControl;
exports.SegmentedControlForm = SegmentedControlForm;
exports.Select = Select;
exports.SelectForm = SelectForm;
exports.SimpleGrid = SimpleGrid;
exports.Skeleton = Skeleton;
exports.Slider = Slider;
exports.SliderForm = SliderForm;
exports.Space = Space;
exports.Spoiler = Spoiler;
exports.Stack = Stack;
exports.Stepper = Stepper;
exports.Switch = Switch;
exports.SwitchForm = SwitchForm;
exports.SwitchGroup = SwitchGroup;
exports.SwitchGroupForm = SwitchGroupForm;
exports.Table = Table;
exports.Tabs = Tabs;
exports.TagsInput = TagsInput;
exports.Text = Text;
exports.TextInput = TextInput;
exports.TextInputForm = TextInputForm;
exports.Textarea = Textarea;
exports.TextareaForm = TextareaForm;
exports.ThemeIcon = ThemeIcon;
exports.TimeInput = TimeInput;
exports.TimeInputForm = TimeInputForm;
exports.Timeline = Timeline;
exports.Title = Title;
exports.Tooltip = Tooltip;
exports.Transition = Transition;
exports.TypographyStylesProvider = TypographyStylesProvider;
exports.UnstyledButton = UnstyledButton;
exports.VisuallyHidden = VisuallyHidden;
exports.YearPicker = YearPicker;
exports.YearPickerInput = YearPickerInput;
exports.YearPickerInputForm = YearPickerInputForm;
Object.keys(hooks).forEach(function (k) {
    if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
        enumerable: true,
        get: function () { return hooks[k]; }
    });
});
//# sourceMappingURL=index.js.map
