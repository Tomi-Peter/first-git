---
title: ".gitignore: 특정 파일 무시"
description: "불필요한 파일 버전 관리에서 제외"
---

# .gitignore: 특정 파일 무시

**불필요한 파일 버전 관리에서 제외**

## 상세 설명

프로젝트 루트의 .gitignore 텍스트 파일입니다.

Git이 버전 관리에서 의도적으로 제외(무시)할 파일/폴더/패턴 목록을 정의합니다.

## 주요 제외 대상

- `/dist`, `/build`
- `*.o`, `*.pyc`, `*.class`

- `*.log`
- `npm-debug.log*`

- `node_modules/`
- `venv/`, `vendor/`

- `.DS_Store`, `Thumbs.db`
- `.idea/`, `.vscode/`

- `.env`, API 키 파일, 비밀번호 포함 파일

## 효과

✓ 리포지토리 크기 작게 유지  
✓ 클론/푸시/풀 속도 개선  
✓ 민감 정보 유출 방지  
✓ 팀원 간 환경 차이로 인한 혼란 감소

## 📝 문법

각 줄에 패턴 작성:

- `/folder/` (루트의 폴더)
- `*.log` (모든 .log 파일)
- `!important.log` (예외)
- `#` (주석)
