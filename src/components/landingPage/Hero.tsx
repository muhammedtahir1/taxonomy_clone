import { Button } from "../ui/button"
import { Badge } from "@/components/ui/badge"


const Hero = () => {
  return (
    <main className="w-full h-[90%] flex flex-col gap-4 items-center justify-center px-56">
        <div className="flex flex-col gap-4 items-center justify-center text-center w-[64rem]"> 
            <Badge variant="outline" className="px-4 py-2">Follow along on Twitter</Badge>

            <h1 className="font-bold text-7xl tracking-tighter">
                An example app built using Next.js 13 server components.
            </h1>
            <p className="text-xl w-[42rem] text-muted-foreground">
            I'm building a web app with Next.js 13 and open sourcing everything. Follow along as we figure this out together.
            </p>
        </div>
        <div className="flex gap-4">
            <Button className="px-8">Get Started</Button>
            <Button className="px-8" variant={"secondary"}>Github</Button>
        </div>
    </main>
  )
}

export default Hero