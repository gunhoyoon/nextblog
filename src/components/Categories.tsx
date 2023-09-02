import React from "react";
type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <section className="text-center p-4">
      <h2 className="text-lg font-bold border-b border-sky-500 mr-2">
        Category
      </h2>
      <ul>
        {categories.map((category) => (
          <li
            className={`cursor-pointer hover:text-sky-500 ${
              category === selected && "text-sky-600"
            }`}
            key={category}
            onClick={() => onClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}

// 카테고리 리스트, 서버 컴포넌트지만 props으로 onclick을 넘겨받았기 떄문에 클릭이벤트 가능
// onClick 자체는 클릭 됐을 때 category 값만 전달해주므로 반환은 void 가 됨,
// 여긴 그냥 전체 카테고리를 담은 배열을 풀어서 그려주고 , 그에 따른 onClick 정도만 들어감

// className={`cursor-pointer hover:text-sky-500 ${
// category === selected && "text-sky-600"`}
