import { blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 pt-32 pb-20 min-h-screen">
            <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Blogs
            </Link>

            <article className="max-w-3xl mx-auto">
                <header className="mb-12">
                    <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
                        <span className="text-primary">{post.category}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold uppercase mb-6 leading-tight">
                        {post.title}
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        {post.excerpt}
                    </p>
                </header>

                <div
                    className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-heading prose-headings:uppercase prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>
        </div>
    );
}
