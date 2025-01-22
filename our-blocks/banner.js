import { InnerBlocks } from "@wordpress/block-editor"

wp.blocks.registerBlockType("ourblocktheme/banner", {
    title: "Banner",
    edit: Editcomponent,
    save: SaveCombonent
})

function Editcomponent() {
    const useMeLater = (
        <>
            <h1 className="headline headline--large">Welcome! 2222222</h1>
            <h2 className="headline headline--medium">We think you&rsquo;ll like it here.</h2>
            <h3 className="headline headline--small">Why don&rsquo;t you check out the <strong>major</strong> you&rsquo;re interested in?</h3>
            <a href="#" className="btn btn--large btn--blue">Find Your Major</a>
        </>
    );

    return (
        <div className="page-banner">
            <div className="page-banner__bg-image" style={{ backgroundImage: "url('/wp-content/themes/fictional-block-theme/images/library-hero.jpg')" }}></div>
            <div className="page-banner__content container t-center c-white">
                <InnerBlocks allowedBlocks={["coe/paragraph", "core/heading", "core/list"]}></InnerBlocks>
            </div>
        </div>
    )
}

function SaveCombonent() {
    return (
        <div className="page-banner">
            <div className="page-banner__bg-image" style={{ backgroundImage: "url('/wp-content/themes/fictional-block-theme/images/library-hero.jpg')" }}></div>
            <div className="page-banner__content container t-center c-white">
                <InnerBlocks.Content/>
            </div>
        </div>
    )
}