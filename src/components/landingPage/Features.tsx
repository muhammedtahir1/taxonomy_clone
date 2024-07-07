import Card from "./Card";

export default function Features(){
    return(
        <div className="h-screen w-full px-56 flex flex-col gap-4">
            <div className="flex flex-col items-center gap-4">
                <h1 className="font-bold text-6xl tracking-tighter">Features</h1>
                <p className="text-lg w-[42rem] text-center text-muted-foreground">This project is an experiment to see how a modern app, with features like auth, subscriptions, API routes, and static pages would work in Next.js 13 app dir.</p>
            </div>
            
            <div>
                <div className="p-7 flex gap-4">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            <div className="px-7 flex gap-4">
                    <Card/>
                    <Card/>
                    <Card/>
            </div>
            </div>
            
            <p className="text-lg text-center text-muted-foreground">Taxonomy also includes a blog and a full-featured documentation site built using Contentlayer and MDX.</p>
        </div>
    )
}