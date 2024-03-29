import { createTheme, rem, type MantineThemeOverride } from "@mantine/core"

import styles from "./styles.module.css"
import { Anchor, Avatar, Badge, Button, Checkbox, Chip, Notification, Tabs, TextInput, Textarea, Tooltip } from "../../core"

import "../styles.css"

const DEFAULT_FONT_FAMILY = "-apple-system BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji"
import { ButtonConfig } from "../../core/Buttons/Button/Button.config"
import { COLORS } from "../utils"
import { AvatarConfig } from "../../core/DataDisplay/Avatar/Avatar.config"
import { CheckboxConfig } from "../../core/Inputs/Checkbox/Checkbox.config"
import { TooltipConfig } from "../../core/Overlays/Tooltip/Tooltip.config"
import { NotificationConfig } from "../../core/Feedback/Notification/Notification.config"
import { AnchorConfig } from "../../core/Navigation/Anchor/Anchor.config"
import { ChipConfig } from "../../core/Inputs/Chip/Chip.config"
import { BadgeConfig } from "../../core/DataDisplay/Badge/Badge.config"
import { TabsConfig } from "../../core/Navigation/Tabs/Tabs.config"
import { DatePickerInput } from "@mantine/dates"
import { DatePickerInputConfig } from "../../dates/DatePickerInput/DatePickerInput.config"
import { TextInputConfig } from "../../core/Inputs/TextInput/TextInput.config"
import { TextareaConfig } from "../../core/Inputs/Textarea/Textarea.config"

export const theme: MantineThemeOverride = createTheme({
    activeClassName: styles.active,
    defaultRadius: "md",
    breakpoints: {
        xs: "30em",
        sm: "48em",
        md: "64em",
        lg: "74em",
        xl: "90em",
    },
    primaryColor: "majorelle-blue",
    colors: COLORS,
    fontFamily: "Segoe UI, Roboto, Verdana, sans-serif",
    fontFamilyMonospace: "Monaco, Courier, monospace",
    fontSizes: {
        xs: rem(10),
        sm: rem(11),
        md: rem(14),
        lg: rem(16),
        xl: rem(20),
    },
    lineHeights: {
        xs: "1.4",
        sm: "1.45",
        md: "1.55",
        lg: "1.6",
        xl: "1.65",
    },
    headings: {
        fontFamily: DEFAULT_FONT_FAMILY,
        fontWeight: "700",
        sizes: {
            h1: {
                fontSize: rem(34),
                lineHeight: "1.3"
            },
            h2: {
                fontSize: rem(26),
                lineHeight: "1.35"
            },
            h3: {
                fontSize: rem(22),
                lineHeight: "1.4"
            },
            h4: {
                fontSize: rem(18),
                lineHeight: "1.45"
            },
            h5: {
                fontSize: rem(16),
                lineHeight: "1.5"
            },
            h6: {
                fontSize: rem(14),
                lineHeight: "1.5"
            },
        },
    },
    radius: {
        xs: rem(2),
        sm: rem(4),
        md: rem(8),
        lg: rem(16),
        xl: rem(32)
    },
    spacing: {
        xs: rem(10),
        sm: rem(12),
        md: rem(16),
        lg: rem(20),
        xl: rem(32),
    },
    shadows: {
        xs: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), 0 ${rem(1)} ${rem(2)} rgba(0, 0, 0, 0.1)`,
        sm: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${rem(10)} ${rem(15)} ${rem(-5)}, rgba(0, 0, 0, 0.04) 0 ${rem(7)} ${rem(7)} ${rem(-5)}`,
        md: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${rem(20)} ${rem(25)} ${rem(-5)}, rgba(0, 0, 0, 0.04) 0 ${rem(10)} ${rem(10)} ${rem(-5)}`,
        lg: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${rem(28)} ${rem(23)} ${rem(-7)}, rgba(0, 0, 0, 0.04) 0 ${rem(12)} ${rem(12)} ${rem(-7)}`,
        xl: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${rem(36)} ${rem(28)} ${rem(-7)}, rgba(0, 0, 0, 0.04) 0 ${rem(17)} ${rem(17)} ${rem(-7)}`,
    },
    components: {
        Anchor: Anchor.extend(AnchorConfig),
        Avatar: Avatar.extend(AvatarConfig),
        Badge: Badge.extend(BadgeConfig),
        Button: Button.extend(ButtonConfig),
        Chip: Chip.extend(ChipConfig),
        Checkbox: Checkbox.extend(CheckboxConfig),
        Tooltip: Tooltip.extend(TooltipConfig),
        Notification: Notification.extend(NotificationConfig),
        Tabs: Tabs.extend(TabsConfig),
        DatePickerInput: DatePickerInput.extend(DatePickerInputConfig),
        TextInput: TextInput.extend(TextInputConfig),
        Textarea: Textarea.extend(TextareaConfig),
    },
    other: {

    }
})