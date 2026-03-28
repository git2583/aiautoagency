# aiautoagency: AI & Automation for Korean SMBs

한국 중소기업(SMB)을 위한 AI 도입 및 업무 자동화 솔루션 제안 프로젝트입니다. 철저한 시장 분석을 바탕으로 실질적인 비즈니스 지표를 개선하는 현대적인 랜딩페이지와 전략을 포함하고 있습니다.

## 🚀 프로젝트 개요
성장 단계에 있는 한국의 중소기업들이 겪는 인력 부족과 업무 비효율 문제를 AI와 자동화 기술로 해결합니다. 단순히 기술을 도입하는 것을 넘어, 마케팅 운영 시간 단축과 데이터 기반의 의사결정 환경 구축을 목표로 합니다.

## 🛠 전체 개발 과정

### 1. 시장 분석 및 타겟팅 (Research)
- **파일명**: `market-analysis.json`
- **내용**: 한국 SMB 시장(매출 5억~500억 규모)의 페인 포인트 분석
- **핵심 인사이트**: 
  - 리드 응답 지연(6~24시간)으로 인한 고객 이탈 방지 필요
  - 수동 데이터 통합 업무의 자동화 요구 (주당 5시간 이상 절감 목표)
  - 한국어 최적화 및 비용 효율적인(Time-to-value) 솔루션 지향

### 2. 카피라이팅 및 메시징 전략 (Copywriting)
- **파일명**: `copy.md`
- **내용**: 리서치 기반의 '숫자 중심' 신뢰도 확보 카피
- **전략**: 
  - "혁신" 대신 "70% 시간 단축", "5배 빠른 응답" 등 구체적 수치 활용
  - 고객이 겪는 3가지 구체적 문제점 제시 (수작업, 데이터 사일로, 상담 부하)
  - 실제 성공 사례 기반의 가상 후기(Testimonials) 구성

### 3. 홈페이지 개발 (Implementation)
- **경로**: `/web` (React + Vite + TypeScript)
- **디자인 컨셉**: **Pixelcloud** 스타일의 하이테크 & 미니멀리즘
- **주요 기술**:
  - **React (TS)**: 컴포넌트 기반 UI 개발
  - **Vanilla CSS**: CSS Variables를 활용한 커스텀 테마(Indigo Blue)
  - **Framer Motion**: 스크롤 애니메이션 및 상호작용 효과
  - **Lucide-React**: 전문적인 비즈니스 아이콘 시스템
- **섹션 구성**: Navbar, Hero, Problems, Services(KPI 강조), Testimonials, CTA, Footer

### 4. 형상 관리 및 배포 준비 (Git)
- GitHub 저장소 연립 및 전체 소스 코드 업로드 완료
- [GitHub Repository](https://github.com/git2583/aiautoagency)

## 📂 프로젝트 구조
```text
aiautoagency/
├── web/                    # React 프론트엔드 프로젝트
│   ├── src/                # 소스 코드 (App.tsx, index.css 등)
│   └── package.json        # 라이브러리 및 스크립트 설정
├── market-analysis.json    # 시장 분석 리서치 데이터
├── copy.md                 # 랜딩페이지 카피라이팅
├── README.md               # 프로젝트 통합 문서
└── (기타 설정 파일들)
```

## 💻 로컬 실행 방법
웹 프로젝트를 로컬에서 실행하여 확인하려면 다음 명령어를 입력하세요.

```powershell
# 1. 프로젝트 폴더로 이동
cd web

# 2. 패키지 설치
npm install

# 3. 개발 서버 실행
npm run dev
```
서버 실행 후 브라우저에서 **`http://localhost:5173/`**에 접속하면 실제 페이지를 확인하실 수 있습니다.

## 📈 핵심 솔루션 요약
1. **마케팅 자동화**: 운영 시간 **50~70% 절감**
2. **데이터 파이프라인**: 의사결정 정확도 **60% 향상**
3. **AI 챗봇**: 단순 FAQ **80% 자동 응대**
