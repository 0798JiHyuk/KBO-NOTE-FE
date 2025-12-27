# KBO-NOTE-FE
KBO:Note 크보노트 frontend 레포지토리입니다

## 기술 스택
- React 18
- TypeScript
- Vite
- ESLint

## 시작하기

### 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

### 빌드
```bash
npm run build
```

### 프리뷰
```bash
npm run preview
```

### 린트
```bash
npm run lint
```

## 폴더 구조
```
KBO-NOTE-FE/
├── public/              # 정적 파일
│   └── vite.svg
├── src/
│   ├── api/            # API 호출 관련 함수
│   ├── assets/         # 이미지, 폰트 등 정적 리소스
│   ├── components/     # 재사용 가능한 컴포넌트
│   ├── hooks/          # 커스텀 React Hooks
│   ├── pages/          # 페이지 컴포넌트
│   ├── styles/         # CSS 파일
│   ├── types/          # TypeScript 타입 정의
│   ├── utils/          # 유틸리티 함수
│   ├── App.tsx         # 메인 App 컴포넌트
│   ├── main.tsx        # 엔트리 포인트
│   └── vite-env.d.ts   # Vite 타입 정의
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── eslint.config.js
```

## 코딩 컨벤션

### 파일 및 폴더 명명 규칙
- **컴포넌트 파일**: PascalCase 사용 (예: `Button.tsx`, `UserProfile.tsx`)
- **훅 파일**: camelCase 사용, `use` 접두사 (예: `useAuth.ts`, `useFetch.ts`)
- **유틸리티 파일**: camelCase 사용 (예: `formatDate.ts`, `validators.ts`)
- **타입 파일**: camelCase 사용, `.types.ts` 접미사 권장 (예: `user.types.ts`)
- **폴더**: camelCase 또는 kebab-case 사용

### TypeScript 컨벤션
- **타입 정의**: `interface` 또는 `type` 사용, PascalCase 명명
  ```typescript
  interface User {
    id: number;
    name: string;
  }

  type UserRole = 'admin' | 'user' | 'guest';
  ```

- **Props 타입**: 컴포넌트명 + `Props` 접미사
  ```typescript
  interface ButtonProps {
    label: string;
    onClick: () => void;
  }
  ```

- **명시적 타입 선언**: 가능한 한 타입을 명시적으로 선언
  ```typescript
  const count: number = 0;
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    // ...
  };
  ```

### React 컨벤션
- **컴포넌트 선언**: 함수형 컴포넌트 사용
  ```typescript
  function MyComponent({ prop }: MyComponentProps) {
    return <div>{prop}</div>;
  }

  export default MyComponent;
  ```

- **이벤트 핸들러**: `handle` 접두사 사용
  ```typescript
  const handleClick = () => { /* ... */ };
  const handleSubmit = () => { /* ... */ };
  ```

- **상태 변수**: 명확하고 설명적인 이름 사용
  ```typescript
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState<User | null>(null);
  ```

### 코드 스타일
- **들여쓰기**: 2 스페이스
- **세미콜론**: 사용하지 않음 (ESLint 설정 따름)
- **따옴표**: 작은따옴표(`'`) 사용
- **화살표 함수**: 간결한 경우 선호
  ```typescript
  const add = (a: number, b: number) => a + b;
  ```

### Import 순서
1. React 및 외부 라이브러리
2. 내부 모듈 (컴포넌트, 훅, 유틸리티)
3. 타입 import
4. 스타일

```typescript
import { useState, useEffect } from 'react';
import axios from 'axios';

import Button from '@/components/Button';
import { useAuth } from '@/hooks/useAuth';
import { formatDate } from '@/utils/formatDate';

import type { User } from '@/types/user.types';

import './styles/App.css';
```

### 주석
- **컴포넌트 설명**: JSDoc 스타일 사용
  ```typescript
  /**
   * 사용자 프로필을 표시하는 컴포넌트
   * @param user - 표시할 사용자 정보
   */
  function UserProfile({ user }: UserProfileProps) {
    // ...
  }
  ```

- **복잡한 로직**: 필요시 설명 주석 추가
- **TODO**: `// TODO: 설명` 형식 사용

### Git 커밋 메시지
- **형식**: `타입: 설명`
- **타입**:
  - `feat`: 새로운 기능
  - `fix`: 버그 수정
  - `docs`: 문서 수정
  - `style`: 코드 포맷팅
  - `refactor`: 코드 리팩토링
  - `test`: 테스트 코드
  - `chore`: 빌드, 설정 등

예시:
```
feat: 사용자 로그인 기능 추가
fix: 프로필 이미지 업로드 오류 수정
docs: README 업데이트
```
