import { ExtendsRootComponent } from "@mantine/core/lib/core/factory/factory"
import { CheckboxFactory } from "@mantine/core/lib/components/Checkbox"
import { rem } from "@mantine/core"

export const CheckboxConfig: ExtendsRootComponent<CheckboxFactory> = {
    defaultProps: {
        radius: "sm",
        w: rem(24),
        h: rem(24),
    }
}
