---
title: "Clone (클론)"
description: "원격 리포지토리를 로컬 컴퓨터로 복제"
---

# Clone (클론)

**원격 리포지토리를 로컬 컴퓨터로 복제**

## 상세 설명

`git clone [원격_URL] [로컬_디렉토리명(선택)]`: 원격 리포지토리 전체를 로컬로 다운로드, 새 로컬 리포지토리 생성

모든 파일과 전체 커밋 이력을 포함합니다. 원격 리포지토리를 origin으로 자동 설정 및 연결합니다.

프로젝트 작업 시작 또는 기존 프로젝트 참여 시 가장 먼저 수행하는 작업입니다.

**URL 형식**: HTTPS (https://...) 또는 SSH (git@...)

## 🚀 고급 활용 팁

- **git clone --depth <N>**: 최근 N개 커밋만 가져와 클론 속도 향상 (Shallow Clone)
- **git clone --branch <branch_name> <repo_url>**: 특정 브랜치만 클론
- **git clone <repo_url> new-folder-name**: 지정된 폴더명으로 클론

## 📌 Fork vs Clone 비교

GitHub 서버 상에서 원격 리포지토리 복사 (원격 → 원격, 내 계정으로)

원격 리포지토리를 내 로컬 컴퓨터로 다운로드 (원격 → 로컬)

**오픈소스 기여**: 보통 원본 Fork → 내 Fork를 로컬로 Clone

## 📥 비유적 이해

'클라우드 공유 폴더 전체를 내 컴퓨터로 다운로드하여 동기화 상태로 만들기'
