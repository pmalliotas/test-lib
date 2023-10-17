import { Paper as MantinePaper, createPolymorphicComponent } from "@mantine/core"
import { type PaperProps as MantinePaperProps } from "@mantine/core"
import { forwardRef } from "react"

export type PaperProps = MantinePaperProps & {}

export const Paper: React.FC<PaperProps> = createPolymorphicComponent<"div", PaperProps>(forwardRef<HTMLDivElement, PaperProps>((props, ref) => {
    return (
        <MantinePaper {...props} ref={ref} />
    )
}))
