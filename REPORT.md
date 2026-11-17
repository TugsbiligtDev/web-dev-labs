# Web Development Labs: Status Report

**Course:** Веб хөгжүүлэлт - Лаб (IO Institute of Mongolia × UFE)
**Date:** 2026-10-24
**Folder:** `~/Downloads/UFE/Web dev`
**GitHub:** https://github.com/TugsbiligtDev/web-dev-labs (public)

## Summary

All 12 labs are built. Every page was checked automatically for code problems and opened in a real browser (Chrome) to look for errors. **No errors were found.** Three kinds of work are still yours to finish:

1. Add your own personal info, photos and videos (Labs 2 and 5).
2. Confirm a few assumptions with your teacher (Labs 3-2, 7 and 9; see [Open items](#open-items)).
3. Push the latest changes to GitHub. The online repo still has the old layout and doesn't include Labs 11–12.

## Folder structure

Every lab is in its own folder and works on its own. Each folder holds its own copies of the pictures it uses, so you can submit any folder alone.

```
Web dev/
├── README.md        Lab list (Mongolian), shown on GitHub
├── REPORT.md        This report
├── .gitignore       Hides macOS .DS_Store files from git
├── lab1/            HTML tables
├── lab2/            Personal page (div, iframe, button)
├── lab3/            CSS properties demo
├── lab3-2/          Registration form
├── lab5/            Responsive personal page (media queries)
├── lab6/            Bootstrap: modal, grid, carousel
├── lab7/            Bootstrap admin dashboard (3 pages)
├── lab8/            DOM: user registration table
├── lab9/            Shagai horse race game
├── lab11/           FileReader: image + Excel
└── lab12/           Cookie, localStorage, sessionStorage, fetch()
```

There is no `lab4` because no Lab 4 PDF was given. **Lab 10** has no folder because the exercise was publishing this repository to GitHub.

### Changes made during this clean-up

| Change | Why |
|---|---|
| Moved `dasgal1.html`, `dasgal2.html` and `avatar.png` from the main folder into `lab1/` | Lab 1 was the only lab not in its own folder |
| Gave `lab3/` its own copy of `avatar.png` and changed its link from `../avatar.png` to `avatar.png` | Lab 3 used the avatar from the main folder, so the move would have broken its image |
| Updated `README.md`: new Lab 1 paths, added Labs 11 and 12, updated the internet requirements | So the README matches the folders |

## Lab by lab

| Lab | Exercise | Files | Status |
|---|---|---|---|
| 1 | HTML tables: profile table and teacher timetable (`colspan`/`rowspan`) | `lab1/dasgal1.html`, `lab1/dasgal2.html` | ✅ Done |
| 2 | Personal page: `<div>` layout, 4 buttons load 4 pages into an `<iframe>`, Google map | `lab2/index.html` + 4 pages | ⚠️ Needs your info and media |
| 3 | CSS: margin, padding, align, border/outline, opacity, `!important`, with Mongolian comments | `lab3/index.html` | ✅ Done |
| 3-2 | Photography registration form (slide 13 design) | `lab3-2/index.html` | ✅ Done |
| 5 | Lab 2 page made responsive: desktop, tablet and mobile layouts | `lab5/index.html` + 4 pages | ⚠️ Needs your info and media |
| 6 | Bootstrap 5.3.2: form in a modal, responsive grid, carousel / stacked images | `lab6/modal.html`, `grid.html`, `carousel.html` | ✅ Done |
| 7 | Admin dashboard: Analytics, User List, Projects Grid, linked by the sidebar | `lab7/analytics.html`, `users.html`, `projects.html` | ✅ Done |
| 8 | User registration: add rows with DOM methods, delete with ✕, renumber | `lab8/index.html` | ✅ Done |
| 9 | Shagai horse race for 2 players | `lab9/index.html` | ✅ Done (rules assumed) |
| 10 | Put a project in a remote repository | GitHub repo above | ✅ Done (needs update) |
| 11 | `FileReader`: show uploaded image; show uploaded Excel as a table | `lab11/image.html`, `excel.html`, sample `Нэрс.xlsx` | ✅ Done |
| 12 | Cookie / localStorage / sessionStorage save-read-delete; `fetch()` API list | `lab12/storage.html`, `fetch.html` | ✅ Done |

## Verification performed

### 1. Static code check (all 26 HTML pages, plus CSS and JS files)

| Check | Result |
|---|---|
| Every opened tag is closed correctly | ✅ No problems |
| No `id` used twice on one page | ✅ No problems |
| Every local file reference exists: `src`, `href`, `formaction`, CSS `url()`, picture names in scripts | ✅ All found, except the 8 expected placeholders below |
| Every link in `README.md` points to a real file | ✅ No problems |

**Expected missing files** (placeholders for your own media):

- `lab2/zurag1.jpg`, `zurag2.jpg`, `bichleg1.mp4`, `bichleg2.mp4`
- the same 4 files in `lab5/`

### 2. Browser check (all 26 pages in Chrome)

| Check | Result |
|---|---|
| Every page has a `<title>` and a `lang` attribute | ✅ |
| Every image loads (apart from the placeholders above) | ✅ |
| Every stylesheet loads, including Bootstrap and Google Fonts from the internet | ✅ |
| Libraries load where used: Bootstrap JS, Bootstrap Icons, SheetJS | ✅ |
| No JavaScript errors in the console when each page opens | ✅ (I first confirmed the console tool catches errors by triggering a deliberate test error) |

### 3. Feature tests (when each lab was built)

| Lab | What was tested |
|---|---|
| 1 | All 10 timetable rows have exactly 33 cells. Every class sits in the right day and period. |
| 2, 5 | Each of the 4 buttons loads the right page, and only the content area changes. Lab 5's layouts switch at 1024/1025px and 600/601px, with no sideways scrolling on a 390px phone. |
| 3 | Each example's computed style matches its comment. Hover opacity changes from 1 to 0.5. The `!important` example shows the right colours. |
| 3-2 | Required fields block an empty form. A bad email is refused. Cancel resets every field. |
| 6 | The modal opens. The form refuses an empty submission and a typed password shorter than 8 characters. The grid matches slide 11 at desktop and phone widths. The carousel arrows work, and phones get stacked images. |
| 7 | Sidebar links and highlighting work on all 3 pages. The ☰ menu works on desktop and phone. Dropdowns and the "…" row menu work. The project tabs filter correctly (5 active, 3 completed). No page scrolls sideways on a phone. |
| 8 | Adding rows works with the button and with Enter. Deleting renumbers the rows. Blank names, space-only names and an age of 0 are refused. Typed HTML shows as plain text. |
| 9 | 20 automated full games: horses move exactly by the number of "морь" thrown, turns alternate, the right winner is announced, and restart resets the board. The winning horse stops on the finish line. |
| 11 | A picture displays at full size. A non-picture shows an error. `Нэрс.xlsx` shows all 13 rows. A fake `.xlsx` shows an error. |
| 12 | Save, read and delete work in all 3 storage panels, including values with `;` and `=`. `fetch()` shows 10 users. A lost connection shows an error alert, and the page recovers on retry. |

## Open items

### You need to do

- [ ] **Labs 2 and 5: personal info.** Replace the placeholder text in the sidebar, the address box and `nuur.html`. Search for `ӨӨРЧЛӨХ` to find every spot.
- [ ] **Labs 2 and 5: media.** Add `zurag1.jpg`, `zurag2.jpg`, `bichleg1.mp4` and `bichleg2.mp4` to both `lab2/` and `lab5/`. Lab 2 requires at least 2 pictures or videos of your interests.
- [ ] **GitHub.** Commit and push the latest changes. Labs 11 and 12, the Lab 1 move and this report are only on your computer.

### Check with your teacher

- **Lab 3-2:** the PDF showed 5 designs, and slide 13 was built. It has no `<textarea>` because the design doesn't include one.
- **Lab 7:** sidebar items other than the 3 pages, and buttons like "Add New", are for looks only.
- **Lab 9:** the rules aren't in the PDF. The game uses "count the морь, move that many steps, first to 8 wins". The slide also doesn't say which shagai picture is which side; left to right they're assumed to be Морь, Тэмээ, Хонь, Ямаа. Both are easy to change at the top of the script.
- **Lab 9:** each shagai side has an equal 1-in-4 chance. Real shagai don't land evenly.

## How to open the labs

Most pages work by double-clicking the `.html` file.

**These need internet:**

| What | Labs |
|---|---|
| Bootstrap | 6, 7, 12 |
| Google Maps | 2, 5 (map page) |
| Google Fonts | 3-2 (falls back to Arial offline) |
| SheetJS | 11 (Excel page) |
| JSONPlaceholder API | 12 (fetch page) |

**Lab 12's cookie panel needs a local server.** Browsers don't store cookies for `file://` pages, and the page shows a warning when that happens. Use VS Code's Live Server, or run `python3 -m http.server` in this folder and open `http://localhost:8000/lab12/storage.html`.
