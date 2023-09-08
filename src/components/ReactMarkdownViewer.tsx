"use client";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";

type Props = {
  content: string;
};

export default function ReactMarkdownViewer({ content }: Props) {
  return (
    <ReactMarkdown
      className="prose lg:prose-xl max-w-none"
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-*(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              language={match[1]}
              PreTag="div"
              {...props}
              style={materialDark}
              // 프롭에 대한 정보가 다 나온 뒤 style 에 대한 정보를 dark 로 덮어씌워줘야 에러가 안생김
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        img: (image) => (
          <Image
            className="w-full max-h-60 object-cover"
            src={image.src || ""}
            alt={image.alt || ""}
            width={500}
            height={500}
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

// multicarousel 과 같이 칠드린 (여기선 content로 사용) 타입 자체는 서버에서 바로 사용해도 상관없어보이는데
// remarkGfm 플러그인 install 함
// 그리고 테일윈드에서 말한대로 className에 prose 를 적어주면 완성됨
