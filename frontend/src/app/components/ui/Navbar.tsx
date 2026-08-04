
const Navbar = () => {
  return (
    <div className="flex h-15 items-center px-8 justify-between bg-foreground border-b-2 border-primary">
        <div className="flex gap-2">
            <span className="bg-primary rounded-sm">aa</span>
            <p>ArticleAssist</p>
        </div>
        <div className="flex gap-4 uppercase font-sans text-xs text-secondary tracking-widest">
            <p>Session</p>
            <p>Report</p>
            <p>Library</p>
        </div>
    </div>
  )
}

export default Navbar