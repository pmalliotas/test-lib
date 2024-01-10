import { ExtendsRootComponent } from "@mantine/core/lib/core/factory/factory"
import { TextInputFactory } from "@mantine/core"

export const TextInputConfig: ExtendsRootComponent<TextInputFactory> = {
  defaultProps: {
    size: "md"
  },
}
