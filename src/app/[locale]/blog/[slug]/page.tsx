import fs from 'fs';
import path from 'path';
import { getLocale } from 'next-intl/server'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { notFound } from 'next/navigation';
const katex: any = rehypeKatex;

export default async function Page({ params }: { params: { slug: string } }) {
    const blog_name = params.slug.replace(/[^0-9a-z\-]/gi, "");
    const blog_path = path.resolve(process.cwd(), "blog-posts", `${await getLocale()}/${blog_name}.mdx`);

    if (!fs.existsSync(blog_path)) notFound();
    const source = await fs.readFileSync(blog_path)
    return (
        <div>
            <MDXRemote source={source} options={{ mdxOptions: { remarkPlugins: [remarkMath], rehypePlugins: [katex], format: 'mdx' } }} />
        </div>
    );
}