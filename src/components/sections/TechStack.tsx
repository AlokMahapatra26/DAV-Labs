import Link from "next/link";

export function TechStack() {
    const stack = [
        { name: "Next.js", url: "https://nextjs.org" },
        { name: "React", url: "https://react.dev" },
        { name: "TypeScript", url: "https://www.typescriptlang.org" },
        { name: "Tailwind", url: "https://tailwindcss.com" },
        { name: "Node.js", url: "https://nodejs.org" },
        { name: "PostgreSQL", url: "https://www.postgresql.org" },
        { name: "Supabase", url: "https://supabase.com" },
        { name: "AWS", url: "https://aws.amazon.com" },
    ];

    return (
        <div className="py-8 border-y border-border/50 my-10">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
                {stack.map((tech) => (
                    <Link
                        key={tech.name}
                        href={tech.url}
                        target="_blank"
                        className="text-foreground hover:text-primary transition-colors font-medium border-b border-transparent hover:border-primary"
                    >
                        {tech.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}
