import Link from "next/link";

export default function ThoughtsPage() {
    const posts = [
        {
            title: "The Future of AI in Enterprise Software",
            date: "October 12, 2025",
            category: "Technology",
            excerpt: "How artificial intelligence is reshaping the way businesses operate and make decisions.",
        },
        {
            title: "Designing for Trust: A UX Perspective",
            date: "September 28, 2025",
            category: "Design",
            excerpt: "Why trust is the most important metric in user experience design and how to achieve it.",
        },
        {
            title: "Scaling React Applications for Performance",
            date: "September 15, 2025",
            category: "Engineering",
            excerpt: "Best practices for maintaining high performance in large-scale React applications.",
        },
    ];

    return (
        <div className="container mx-auto px-4 pt-32 pb-20 min-h-screen">
            <div className="max-w-3xl mb-16">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Thoughts & Insights</h1>
                <p className="text-xl text-muted-foreground">
                    Our latest thinking on technology, design, and business.
                </p>
            </div>

            <div className="max-w-4xl">
                {posts.map((post, index) => (
                    <div key={index} className="group border-b border-border py-10 first:border-t">
                        <div className="flex flex-col md:flex-row gap-6 md:items-baseline justify-between mb-4">
                            <div className="text-sm text-primary font-medium">{post.category}</div>
                            <div className="text-sm text-muted-foreground">{post.date}</div>
                        </div>
                        <Link href="#" className="block">
                            <h2 className="text-3xl font-heading font-bold mb-4 group-hover:text-primary transition-colors">
                                {post.title}
                            </h2>
                        </Link>
                        <p className="text-muted-foreground text-lg max-w-2xl">
                            {post.excerpt}
                        </p>
                        <Link href="#" className="inline-block mt-6 text-sm font-bold text-primary hover:underline">
                            Read Article
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
