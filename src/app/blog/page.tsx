import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";

export default function BlogPage() {
    return (
        <div className="container mx-auto px-4 pt-24 pb-12 min-h-screen">
            <h1 className="text-3xl md:text-5xl font-heading font-medium uppercase mb-8 text-primary">Blogs</h1>

            <div className="flex flex-col gap-8 max-w-3xl">
                {blogPosts.map((post) => (
                    <div key={post.slug} className="group border-b border-border/50 pb-8 last:border-0 hover:pl-2 transition-all duration-300">
                        <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                            <span className="text-primary">{post.category}</span>
                            <span>•</span>
                            <span>{post.date}</span>
                        </div>
                        <Link href={`/blog/${post.slug}`} className="block">
                            <h2 className="text-2xl md:text-3xl font-heading font-bold uppercase mb-2 group-hover:text-primary transition-colors">
                                {post.title}
                            </h2>
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {post.excerpt}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
