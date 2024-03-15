import fs from 'fs';
import path from 'path';
import { getLocale } from 'next-intl/server'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default async function Page({ params }: { params: { slug: string } }) {
    const source = fs.readFileSync(path.resolve(process.cwd(), "blog-posts", `${await getLocale()}/${params.slug}.mdx`))
    return (
        <div>
            <MDXRemote source={source} options={{ mdxOptions: { remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex], format: 'mdx' } }} />
        </div>
    );
}