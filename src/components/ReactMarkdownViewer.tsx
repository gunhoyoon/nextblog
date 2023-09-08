import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
  content: string;
};

export default function ReactMarkdownViewer({ content }: Props) {
  return (
    <ReactMarkdown className="prose lg:prose-xl" remarkPlugins={[remarkGfm]}>
      {content}
    </ReactMarkdown>
  );
}

// multicarousel 과 같이 칠드린 (여기선 content로 사용) 타입 자체는 서버에서 바로 사용해도 상관없어보이는데
// remarkGfm 플러그인 install 함
// 그리고 테일윈드에서 말한대로 className에 prose 를 적어주면 완성됨
