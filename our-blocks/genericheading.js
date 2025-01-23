import { registerBlockType } from "@wordpress/blocks"

registerBlockType("ourblocktheme/genericheading", {
    title: "Genericheading",
    edit: Editcomponent,
    save: SaveCombonent
})

function Editcomponent() {
   
    return (
        <div>Hello</div>
    )
}

function SaveCombonent() {
    return (
        <div>This is our heading</div>
    )
}