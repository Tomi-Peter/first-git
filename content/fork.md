---
title: "Fork (포크)"
description: "다른 사용자의 리포지토리 전체 복사 (GitHub 서버 상)"
---

# Fork (포크)

**다른 사용자의 리포지토리 전체 복사 (GitHub 서버 상)**

## 상세 설명

다른 사용자의 원격 리포지토리 전체를 자신의 GitHub 계정으로 복사하여 새 원격 리포지토리를 생성합니다.

원본(Upstream)과 독립적으로 관리되며, 자유롭게 수정/변경 이력을 축적할 수 있습니다.

주로 오픈소스 프로젝트 기여에 사용됩니다 (Fork → Clone → Modify → Push to Fork → Pull Request to Upstream).

다른 코드 기반으로 새 프로젝트 시작, 원본 영향 없이 대규모 변경/실험 시에도 사용합니다.

## 🚀 고급 활용 팁: Upstream 동기화

포크된 리포지토리를 원본(Upstream)의 최신 변경 사항으로 주기적 업데이트:

1. `git remote add upstream [원본_리포_URL]` (최초 1회)
2. `git fetch upstream`
3. `git merge upstream/main` (현재 브랜치에 반영)

## ⚠️ 주의사항

- Fork는 원격 복사. 로컬 작업하려면 반드시 `git clone` 추가 수행
- 포크된 저장소의 GitHub Actions 워크플로우 편집 허용 시 보안 위험 유의

## 🍴 비유적 이해

'요리책 레시피(원작)를 내 노트에 옮겨 적은 후(포크), 나만의 스타일로 변경(수정)'. 원본을 내 소유 복사본으로 만들어 독립 작업
