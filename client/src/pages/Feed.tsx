import React from "react";
import { useState, ChangeEvent, useEffect } from "react";

interface FeedItem {
  id: number;
  user: string;
  content: string;
  image?: string;
  likes: number;
  comments: string[];
}

const initialFeed: FeedItem[] = [
  {
    id: 1,
    user: "tonefit_user",
    content: "오늘의 컬러 매칭! #퍼스널컬러 #펜톤",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    likes: 3,
    comments: ["멋져요!", "컬러 조합 최고!"],
  },
  {
    id: 2,
    user: "guest1",
    content: "봄웜 팔레트 추천받고 싶어요~",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    likes: 1,
    comments: ["저도요!"],
  },
  {
    id: 3,
    user: "colorlover",
    content: "#여름쿨 오늘의 데일리룩!",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    likes: 5,
    comments: ["시원해보여요!"],
  },
  {
    id: 4,
    user: "fashionista",
    content: "#가을웜 브라운 코디 완성!",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    likes: 2,
    comments: ["분위기 있어요"],
  },
  {
    id: 5,
    user: "trendsetter",
    content: "#펜톤 2024 Peach Fuzz 컬러 소품!",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    likes: 4,
    comments: ["귀여워요!"],
  },
  {
    id: 6,
    user: "guest2",
    content: "#겨울쿨 블루 니트 추천해요",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80",
    likes: 2,
    comments: ["깔끔해요"],
  },
  {
    id: 7,
    user: "palettefan",
    content: "#봄웜 #핑크 오늘의 립 컬러",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    likes: 3,
    comments: ["화사해요!"],
  },
  {
    id: 8,
    user: "guest3",
    content: "#여름쿨 #화이트셔츠 심플룩",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    likes: 1,
    comments: ["깔끔합니다"],
  },
];

const Feed = () => {
  const [feed, setFeed] = useState<FeedItem[]>(initialFeed);
  const [newContent, setNewContent] = useState("");
  const [newImage, setNewImage] = useState<string | undefined>(undefined);
  const [search, setSearch] = useState("");

  // localStorage 연동
  useEffect(() => {
    localStorage.setItem("feed", JSON.stringify(feed));
  }, [feed]);

  // 검색 필터링
  const filteredFeed = feed.filter(item => {
    const keyword = search.toLowerCase();
    return (
      item.content.toLowerCase().includes(keyword) ||
      item.user.toLowerCase().includes(keyword) ||
      (keyword.startsWith('#') && item.content.includes(keyword))
    );
  });

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setNewImage(undefined);
    }
  };

  const handlePost = () => {
    if (!newContent.trim() && !newImage) return;
    setFeed([
      {
        id: Date.now(),
        user: "me",
        content: newContent,
        image: newImage,
        likes: 0,
        comments: [],
      },
      ...feed,
    ]);
    setNewContent("");
    setNewImage(undefined);
  };

  const handleLike = (id: number) => {
    setFeed(feed.map(item => item.id === id ? { ...item, likes: item.likes + 1 } : item));
  };

  const handleComment = (id: number, comment: string) => {
    setFeed(feed.map(item => item.id === id ? { ...item, comments: [...item.comments, comment] } : item));
  };

  return (
    <div className="max-w-xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">피드</h2>
      {/* 피드 썸네일 그리드 (2행 3열) */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {filteredFeed.slice(0, 6).map((item, idx) => (
          <div key={item.id} className="flex flex-col items-center cursor-pointer group">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mb-2 border-2 border-gray-300 group-hover:border-gray-500 transition-all">
              {item.image ? (
                <img src={item.image} alt="썸네일" className="w-full h-full object-cover" />
              ) : (
                <span className="text-gray-500 font-bold text-lg">{item.user[0].toUpperCase()}</span>
              )}
            </div>
            <div className="text-xs text-gray-700 font-semibold truncate w-16 text-center">@{item.user}</div>
          </div>
        ))}
      </div>
      {/* 검색창 */}
      <input
        className="w-full border rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
        placeholder="검색 (작성자, 내용, #해시태그)"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="bg-white p-4 rounded border border-gray-200 mb-8">
        <textarea
          className="w-full border rounded p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-primary"
          rows={3}
          placeholder="오늘의 컬러, 스타일, 소감 등을 공유해보세요!"
          value={newContent}
          onChange={e => setNewContent(e.target.value)}
        />
        <div className="flex items-center mb-2">
          <input
            type="file"
            accept="image/*"
            id="feed-image-upload"
            className="hidden"
            onChange={handleImageChange}
          />
          <label htmlFor="feed-image-upload" className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded mr-2 text-sm">
            사진 첨부
          </label>
          {newImage && (
            <div className="relative">
              <img src={newImage} alt="미리보기" className="w-20 h-20 object-cover rounded border" />
              <button
                className="absolute top-0 right-0 bg-white bg-opacity-80 rounded-full px-1 text-xs text-gray-700 border"
                onClick={() => setNewImage(undefined)}
                type="button"
              >
                ×
              </button>
            </div>
          )}
        </div>
        <button
          className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors float-right"
          onClick={handlePost}
        >
          게시
        </button>
        <div className="clear-both" />
      </div>
      <div className="space-y-6">
        {filteredFeed.map(item => (
          <FeedCard key={item.id} item={item} onLike={handleLike} onComment={handleComment} />
        ))}
      </div>
    </div>
  );
};

function FeedCard({ item, onLike, onComment }: {
  item: FeedItem;
  onLike: (id: number) => void;
  onComment: (id: number, comment: string) => void;
}) {
  const [comment, setComment] = useState("");
  return (
    <div className="bg-white rounded border border-gray-200 p-0 overflow-hidden">
      <div className="flex items-center px-4 pt-3 pb-2">
        <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold mr-3 text-lg">
          {item.user[0].toUpperCase()}
        </div>
        <div className="font-bold text-gray-800">@{item.user}</div>
      </div>
      {item.image && (
        <img src={item.image} alt="피드 이미지" className="w-full max-h-96 object-cover" />
      )}
      <div className="px-4 py-3">
        <div className="mb-2 whitespace-pre-line text-gray-900">{item.content}</div>
        <div className="flex items-center space-x-4 mb-2">
          <button className="flex items-center text-gray-500 hover:text-gray-800" onClick={() => onLike(item.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
            {item.likes}
          </button>
        </div>
        <div className="mb-2">
          <div className="font-semibold text-sm mb-1 text-gray-700">댓글</div>
          {item.comments.map((c, i) => (
            <div key={i} className="text-gray-700 text-sm ml-2 mb-1">- {c}</div>
          ))}
          <div className="flex mt-2">
            <input
              className="flex-1 border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="댓글 달기..."
              value={comment}
              onChange={e => setComment(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter' && comment.trim()) {
                  onComment(item.id, comment);
                  setComment("");
                }
              }}
            />
            <button
              className="ml-2 text-gray-500 hover:text-gray-800 font-bold text-sm"
              onClick={() => {
                if (comment.trim()) {
                  onComment(item.id, comment);
                  setComment("");
                }
              }}
            >
              등록
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed; 