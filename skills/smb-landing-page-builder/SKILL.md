---
name: smb-landing-page-builder
description: 한국 중소기업(SMB) 시장 리서치를 기반으로 숫자가 강조된 랜딩페이지 카피를 작성하고, React(Pixelcloud 스타일) 기반의 현대적인 랜딩페이지를 제작합니다.
---

# SMB Landing Page Builder

이 스킬은 리서치 데이터를 실질적인 비즈니스 지표(KPI)로 변환하여 신뢰도 높은 랜딩페이지를 구축하는 최적의 워크플로우를 제공합니다.

## 핵심 원칙 (Core Principles)
1. **추상성 배제 (No Fluff)**: "혁신적인", "최적의", "최고의"라는 단어 대신 숫자를 사용하십시오. (예: 20% 성장, 5시간 절감)
2. **리서치 기반 (Data-Driven)**: `market-analysis.json`과 같은 데이터 파일에서 직접적인 근거를 찾아 카피에 반영하십시오.
3. **현대적 UI (Modern Aesthetics)**: Pixelcloud 디자인 톤앤매너(Indigo Blue, White, Card-based)를 유지하고 부드러운 애니메이션을 적용하십시오.

## 워크플로우 (Workflow)

### 1단계: 시장 데이터 분석
- 리서치 파일에서 다음 지표를 추출하십시오:
  - 고객의 페인 포인트 (숫자가 포함된 구체적 문제)
  - 서비스 도입 후의 예상 수치 효과 (ROI, 시간, 비용 등)
  - 타겟 산업군과 의사결정권자의 특성

### 2단계: KPI 중심 카피라이팅
- 다음 구조에 맞춰 카피를 작성하십시오:
  - **Hero**: 숫자 중심의 강력한 결과물 제시
  - **Problem**: 고객이 겪는 3가지 구체적 문제 (수치 포함)
  - **Services**: 각 서비스별 기대 효과 수치 명시
  - **Testimonials**: 가상 고객의 구체적인 성공 경험담
  - **CTA**: 무료 체험 및 최종 행동 유도

### 3단계: React 기반 홈페이지 구현
- **기술 스택**: React + TypeScript + Vanilla CSS + Framer Motion
- **디자인 스타일**: 
  - `index.css`: `--primary: #0052FF` 등 색상 변수를 활용한 일관된 테마
  - `framer-motion`: 섹션 진입 시 페이드인/업 애니메이션 적용
  - `lucide-react`: 비즈니스 전문성을 보여주는 아이콘 사용
- **레이아웃**: 카드 기반의 그리드 시스템을 활용하여 가독성을 높이십시오.

## 팁 (Tips)
- 숫자를 강조할 때는 굵은 폰트(Bold)와 테마 컬러를 적용하여 시각적으로 돋보이게 하십시오.
- 모바일 반응형을 고려하여 Flex/Grid 레이아웃을 사용하십시오.
