import { Paper as MantinePaper, PaperFactory, polymorphicFactory } from "@mantine/core"
import { type PaperProps as MantinePaperProps } from "@mantine/core"

export type PaperProps = MantinePaperProps & {}

type PaperType = PaperFactory & {
    props: PaperProps
}

export const Paper = polymorphicFactory<PaperType>(((props, ref) => {
    return (
        <MantinePaper {...props} ref={ref} />
    )
}))

Paper.extend = MantinePaper.extend