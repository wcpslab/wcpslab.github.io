# WCPS Lab 홈페이지 — Image-led 디자인

기존 Google Sites와 가장 비슷한, 사진 중심 디자인입니다.
**빌드 과정이 없습니다** — GitHub Pages가 HTML을 그대로 띄웁니다.

## 미리보기
압축을 풀고 `index.html`을 더블클릭하세요.

## ⭐ 사진 교체 (가장 중요)

`assets/img/` 안의 이미지는 **임시 플레이스홀더**입니다.
**같은 파일명으로 덮어쓰기만 하면** 실제 사진이 그대로 반영됩니다. HTML은 건드릴 필요 없습니다.

| 파일명 | 쓰이는 곳 | 권장 크기 |
|---|---|---|
| `hero.jpg` | 홈 대문 배경, 연락처 배너 | 2200×1200 (가로형) |
| `lab.jpg` | 연구·멤버 페이지 배너, 소개 사진 | 1600×1000 |
| `research-wearable.jpg` | 웨어러블 컴퓨팅 카드 | 1400×900 |
| `research-healthai.jpg` | 헬스케어 AI 카드 | 1400×900 |
| `research-cps.jpg` | 임베디드·CPS 카드 | 1400×900 |
| `pi.jpg` | 교수 프로필 | 800×800 (정사각형) |
| `m-hyeonbin.jpg` 등 5개 | 학생 프로필 | 560×560 (정사각형) |

> 사진 위에 글씨가 올라가는 hero/banner는 **어두운 오버레이**가 자동으로 깔리므로
> 밝은 사진을 넣어도 글씨가 잘 보입니다.

## 구성
```
index.html         홈 (대문 사진 + 연구영역 카드 3개)
members.html       멤버 (교수 + 학생 사진 그리드 + 동문)
research.html      연구 (사진+글 교차 배치)
projects.html      프로젝트 26건
publications.html  논문·특허 76건 (검색)
contact.html       연락처 (지도)
assets/img/        이미지 — 여기를 교체하세요
assets/style.css   디자인
assets/main.js     다크모드 · 모바일 메뉴 · 논문 검색
```

## GitHub Pages 배포

1. 저장소 폴더의 **기존 파일을 모두 삭제**하고 이 파일들을 복사해 넣습니다.
2. ```bash
   git add -A
   git commit -m "Image-led design"
   git push
   ```
3. **Settings → Pages → Source**: `Deploy from a branch` → `main` → `/ (root)` → Save
4. 1분 뒤 https://sanghoonj.github.io/wcpslab/

## 색상 변경
`assets/style.css` 맨 위 `--accent`(현재 `#185fa5` 네이비블루)와 `--accent-soft`를 바꾸면 됩니다.
