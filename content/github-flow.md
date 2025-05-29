---
title: "GitHub Flow: 효율적 협업 워크플로"
description: "간단하고 효과적인 팀 협업 방식"
---

# GitHub Flow: 효율적 협업 워크플로

**간단하고 효과적인 팀 협업 방식**

## 주요 특징 및 단계

**단일 main 브랜치 중심**: 항상 배포 가능한(Deployable) 상태 유지 목표

**기능 브랜치 활용**: 모든 신규 작업(기능, 버그 수정)은 main에서 분기된 짧은 수명의 브랜치에서 진행

**Pull Request 필수**: 작업 브랜치 변경 사항은 main 통합 전 반드시 PR을 통해 코드 리뷰 및 토론

**CI/CD 연동 용이**: main 브랜치 안정성 기반, 병합 시 자동 테스트 및 배포 파이프라인과 잘 통합

## GitHub Flow 단계

main에서 새 작업 브랜치 생성

작업 브랜치에 커밋, 원격에 Push

main으로 병합 요청, 코드 리뷰

피드백 반영, 추가 커밋 (필요시)

리뷰 승인 후 main 병합, 자동 배포

## GitHub Flow vs Git Flow

**Git Flow**는 develop, release, hotfix 등 여러 고정 브랜치를 사용하는 구조적 전략으로 복잡할 수 있으나, **GitHub Flow**는 main과 기능 브랜치, PR 중심으로 단순하고 유연하여 빠른 반복 개발 및 지속적 배포에 적합합니다.
