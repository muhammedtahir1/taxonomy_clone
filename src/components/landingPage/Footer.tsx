import { Button } from "../ui/button";

export default function Footer(){
    return(
        <footer className="h-24 flex items-center justify-between px-20 py-10">
            <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                </svg>
                <p>Built by <span className="underline underline-offset-4">shadcn</span>. Hosted on <span className="underline underline-offset-4">Vercel</span>. Illustrations by Popsy. The source code is available on <span className="underline underline-offset-4">Github</span>.</p>
            </div>
            <div>
                <Button variant="outline" size="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                    <path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>  
                </Button>
            </div>
        </footer>
    )
}