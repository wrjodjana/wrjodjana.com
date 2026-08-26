import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Nav from "../../components/Nav";
import Tag from "../Tag";
import { getPost, getPosts, formatDate } from "../posts";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return { title: post ? `${post.title} | warren jodjana` : "not found" };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-white text-black text-[16px] leading-none">
      <div className="max-w-[960px] mx-auto p-4 md:p-10">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-start mt-10 md:mt-20 ml-0 pl-0 md:pl-12">
          <Nav />

          <div className="w-full md:w-[720px] flex-shrink-0 text-black text-[16px]">
            <h1 className="text-[1.5rem] mb-3 mt-0 leading-tight font-bold">{post.title}</h1>
            <div className="flex items-center gap-2.5 mb-10">
              <span className="text-[14px] text-[#555] leading-none">{formatDate(post.date)}</span>
              <Tag>{post.tag}</Tag>
            </div>

            <div className="post">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  table: ({ node, ...props }) => {
                    void node;
                    return (
                      <div className="table-wrap">
                        <table {...props} />
                      </div>
                    );
                  },
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
