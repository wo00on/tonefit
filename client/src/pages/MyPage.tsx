import React from "react";
import { useState } from "react";
import Feed from "./Feed";

const defaultProfileImg = "https://ui-avatars.com/api/?name=me&background=random";

// 임시: 피드 데이터는 localStorage 또는 props로 받을 수 있지만, 여기서는 Feed 컴포넌트에서 복사해옵니다.

const MyPage = () => {
  // 임시: 내 피드만 필터링 (user: 'me')
  const [myFeed, setMyFeed] = useState(() => {
    const saved = localStorage.getItem("feed");
    if (saved) {
      try {
        const arr = JSON.parse(saved);
        return arr.filter((item: any) => item.user === "me");
      } catch {
        return [];
      }
    }
    return [];
  });

  return (
    <div className="max-w-xl mx-auto py-10">
      <div className="flex flex-col items-center mb-8">
        <img src={defaultProfileImg} alt="프로필" className="w-24 h-24 rounded-full border mb-2" />
        <div className="text-xl font-bold mb-1">me</div>
        <div className="text-gray-500 text-sm">나의 피드: {myFeed.length}개</div>
      </div>
      <div className="space-y-6">
        {myFeed.length === 0 ? (
          <div className="text-center text-gray-400">아직 작성한 피드가 없습니다.</div>
        ) : (
          myFeed.map((item: any) => (
            <div key={item.id} className="bg-white rounded-lg shadow p-4">
              <div className="font-bold text-primary mb-1">@{item.user}</div>
              {item.image && (
                <img src={item.image} alt="피드 이미지" className="w-full max-h-80 object-cover rounded mb-2" />
              )}
              <div className="mb-2 whitespace-pre-line">{item.content}</div>
              <div className="flex items-center space-x-4 mb-2">
                <span className="text-pink-500 font-bold">♥ {item.likes}</span>
              </div>
              <div className="mb-2">
                <div className="font-semibold text-sm mb-1">댓글</div>
                {item.comments.map((c: string, i: number) => (
                  <div key={i} className="text-gray-700 text-sm ml-2 mb-1">- {c}</div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyPage; 