export default function BlogCard(){
    return(
        <div className="grid gap-10">
            <article>
                <img src="https://tx.shadcn.com/_next/image?url=%2Fimages%2Fblog%2Fblog-post-1.jpg&w=828&q=75" alt="picture" fetchPriority="high" width={"804"} height={"452"} decoding="async" data-nimg="1" className="rounded-md border bg-muted transition-colors" />
                <h1 className="text-2xl font-extrabold">Preview Mode for Headless CMS</h1>
                <p>How to implement preview mode in your headless CMS.</p>
                <p>April 9, 2023</p>
            </article>

            <article>
                <img src="https://tx.shadcn.com/_next/image?url=%2Fimages%2Fblog%2Fblog-post-1.jpg&w=828&q=75" alt="picture" fetchPriority="high" width={"804"} height={"452"} decoding="async" data-nimg="1" className="rounded-md border bg-muted transition-colors" />
                <h1 className="text-2xl font-extrabold">Preview Mode for Headless CMS</h1>
                <p>How to implement preview mode in your headless CMS.</p>
                <p>April 9, 2023</p>
            </article>
        </div>
    )
}