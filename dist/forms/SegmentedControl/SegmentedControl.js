var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useController } from "react-hook-form";
import { SegmentedControl as $SegmentedControl, } from "../../core";
export function SegmentedControlForm(_a) {
    var name = _a.name, control = _a.control, defaultValue = _a.defaultValue, rules = _a.rules, shouldUnregister = _a.shouldUnregister, onChange = _a.onChange, props = __rest(_a, ["name", "control", "defaultValue", "rules", "shouldUnregister", "onChange"]);
    var _b = useController({
        name: name,
        control: control,
        defaultValue: defaultValue,
        rules: rules,
        shouldUnregister: shouldUnregister,
    }).field, value = _b.value, fieldOnChange = _b.onChange, field = __rest(_b, ["value", "onChange"]);
    return (_jsx($SegmentedControl, __assign({ value: value, onChange: function (e) {
            fieldOnChange(e);
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        } }, field, props)));
}
