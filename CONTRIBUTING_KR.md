# 🚀 OpenFramer 컨트리뷰션 가이드

컴포넌트를 추가하거나 수정하는 방법을 안내합니다.

**컨트리뷰터가 할 일:** `.tsx` 컴포넌트 파일만 수정하면 됩니다!  
**Props와 Meta 파일은 임도현이 작성합니다.**

---

## 🎯 시작하기

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 열면 모든 컴포넌트를 확인할 수 있습니다.

---

## 📁 프로젝트 구조

```
src/components/
├── hero/
│   ├── hero-01.tsx         # 컴포넌트
│   ├── hero-01-props.json  # 속성 정의
│   └── hero-01-meta.json   # 디자인 가이드
```

**각 컴포넌트는 3개 파일로 구성:**
- `.tsx` - React 컴포넌트 **(컨트리뷰터가 작성)**
- `-props.json` - 사용 가능한 속성 정의 **(임도현이 작성)**
- `-meta.json` - AI를 위한 디자인 가이드 **(임도현이 작성)**

---

## 컴포넌트 수정하기

### 📍 위치
`src/components/[카테고리]/[컴포넌트이름].tsx`

예: `src/components/hero/hero-01.tsx`

### ✏️ 수정하기

컴포넌트 파일을 열어서 JSX와 스타일을 수정하세요.

```tsx
export default function Hero01() {
  return (
    <div className="bg-white dark:bg-slate-900">
      <h1 className="text-4xl md:text-6xl">제목</h1>
    </div>
  );
}
```

**주의사항:**
- Tailwind CSS 사용
- 반응형 클래스 추가 (`sm:`, `md:`, `lg:`)
- 다크모드 지원 (`dark:`)

### 🔍 확인하기
- 홈: `http://localhost:3000`
- 개별: `http://localhost:3000/components/hero-01`

### ⚠️ 수정 금지
- ❌ 컴포넌트 이름
- ❌ export 구조
- ❌ 파일 이름

---

## Props & Meta 파일 (임도현 담당)

> **참고:** Props와 Meta 파일은 **임도현이 작성**합니다.  
> 컨트리뷰터는 `.tsx` 컴포넌트만 수정하면 됩니다.

### Props 파일 (`-props.json`)
컴포넌트에서 사용 가능한 모든 속성을 정의합니다.

### Meta 파일 (`-meta.json`)
AI가 참고할 디자인 가이드라인을 정의합니다.
- 비율, 색상, 폰트, 애니메이션, 크기 등

---

## 테스트하기

### ✅ 체크리스트

- [ ] 홈페이지에서 확인 (`http://localhost:3000`)
- [ ] 반응형 테스트 (모바일/태블릿/데스크톱)
- [ ] 다크모드 테스트
- [ ] 빌드 성공 (`npm run build`)
- [ ] 린트 통과 (`npm run lint`)

---

## PR 제출하기

### 커밋하기

```bash
git checkout -b feature/hero-01-update
git add src/components/hero/*
git commit -m "hero-01: 설명"
git push origin feature/hero-01-update
```

### PR 템플릿

```markdown
## 변경 내용
[간단한 설명]

## 수정 파일
- [ ] .tsx 파일 수정 완료

## 스크린샷
- 데스크톱
- 모바일
- 다크모드

## 참고
Props와 Meta 파일은 임도현이 작성합니다.
```

---

## 🎨 컴포넌트 카테고리

- **Hero** - 첫 화면 헤더
- **Features** - 기능 소개
- **Pricing** - 가격표
- **CTA** - 행동 유도
- **Footer** - 푸터

---

## 💡 주의사항

### ✅ DO
- Tailwind CSS 사용
- 반응형 디자인 (`sm:`, `md:`, `lg:`)
- 다크모드 지원 (`dark:`)
- 명확한 설명 작성

### ❌ DON'T
- 인라인 스타일 사용
- 컴포넌트 이름 변경
- Props/Meta 파일 수정 (임도현 담당)

---

**Happy Contributing! 🚀**

