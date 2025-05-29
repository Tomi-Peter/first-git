---
title: "Push & Pull: 로컬과 원격 동기화"
description: "변경 사항 주고받기, 최신 상태 유지"
---

# Push & Pull: 로컬과 원격 동기화

**변경 사항 주고받기, 최신 상태 유지**

## Push (푸시)

`git push [원격저장소] [로컬브랜치]`: 로컬 리포지토리의 커밋들을 원격 리포지토리로 전송/업로드

로컬 작업 내용을 원격에 백업하고 팀원과 공유 (예: `git push origin main`)

최초 Push 또는 새 브랜치 Push 시: `git push -u origin <branch>`로 추적 관계 설정

- Push 전 항상 `git pull`로 원격 최신 상태 반영
- `git push --force`는 공유 브랜치에 절대 사용 금지

'내 컴퓨터 작업 완료 후, 팀 공유 드라이브에 최신 버전 업로드'

## Pull (풀)

`git pull [원격저장소] [원격브랜치]`: 원격 리포지토리 최신 변경 사항을 로컬로 가져와 현재 로컬 브랜치에 자동 병합

팀원의 변경 사항, 웹 수정 내용 등을 로컬에 반영하여 동기화 (예: `git pull origin main`)

내부적으로 `git fetch + git merge FETCH_HEAD` 수행

- Pull 시 로컬 변경 사항과 원격 변경 사항이 충돌할 수 있음
- 작업 시작 전, 커밋/푸시 전에 Pull하여 최신 상태 유지 권장

'팀 공유 드라이브 업데이트 파일 다운로드 + 내 작업 파일에 자동 병합'
