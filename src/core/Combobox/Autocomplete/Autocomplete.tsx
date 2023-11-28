import * as React from "react"

import { Autocomplete as MantineAutocomplete } from "@mantine/core"
import { type AutocompleteProps as MantineAutocompleteProps } from "@mantine/core"

export type AutocompleteProps = MantineAutocompleteProps & {}

export function Autocomplete(props: MantineAutocompleteProps) {

    return (
        <MantineAutocomplete {...props} />
    )
}

Autocomplete.extend = MantineAutocomplete.extend

export default Autocomplete