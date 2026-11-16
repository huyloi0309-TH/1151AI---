# AGENTS.md — Data Structures Learning Hub

This file tells AI coding agents how this project works. Read it fully before changing anything.

## 1. Project Overview

**Data Structures Learning Hub** is an educational website that helps beginners understand data structures through visual explanations, interactive demonstrations, real-world examples, and exercises.

- **Audience:** beginners with little or no prior knowledge of data structures.
- **Language:** simple English for both the website and the documentation.
- **Learning flow:** Learn → Observe → Practice → Test → Review.

### Goals

- Make complex concepts easy to understand.
- Explain *how* and *why* each data structure works.
- Visualize how data is stored, organized, and changed by operations.
- Connect theory with real-world applications.
- Keep the architecture expandable so new topics can be added quickly.

## 2. Technology Rules

| Allowed | Not allowed |
|---|---|
| HTML, CSS, vanilla JavaScript (ES modules) | React, Vue, or any framework |
| GitHub, GitHub Pages | Backend, database, build tools |
| Local files in this repository | CDN links, npm packages, external fonts |

- The site must work as a static site on GitHub Pages with no build step.
- Use **relative paths only** (for example `../assets/css/base.css`). Never start a path with `/`, because GitHub Pages serves the site from a sub-path.
- ES modules need a local server to test. Run `python -m http.server 8000` in the project root and open `http://localhost:8000`.

## 3. Site Structure

| Area | Path | Purpose |
|---|---|---|
| Home | `index.html` | Introduction, goals, and learning roadmap |
| Learning Modules | `modules/index.html` | List of module groups and their lessons |
| Lessons | `lessons/<topic>.html` | One page per data structure or algorithm |
| Interactive Playground | `playground/index.html` | Free experimenting with structures |
| Practice & Quiz | `practice/index.html` | Exercises and knowledge checks |
| Glossary | `glossary/index.html` | English terms for data structures and algorithms |

Every page shares the same header navigation: Home, Modules, Playground, Practice, Glossary.

## 4. Folder Structure

```
data-structures-learning-hub/
├── AGENTS.md
├── CLAUDE.md                 # contains only: @AGENTS.md
├── README.md
├── index.html
├── modules/index.html
├── lessons/
│   ├── _template.html        # copy this for every new lesson
│   └── stack.html
├── playground/index.html
├── practice/index.html
├── glossary/index.html
└── assets/
    ├── css/
    │   ├── base.css          # variables, reset, typography
    │   ├── layout.css        # header, footer, grid
    │   ├── components.css    # buttons, cards, quiz, visual boxes
    │   └── lesson.css        # lesson page styles
    ├── js/
    │   ├── structures/       # pure logic, no DOM (stack.js, queue.js)
    │   ├── visuals/          # rendering and animation (stack-view.js)
    │   ├── pages/            # per-page wiring (stack-page.js)
    │   └── shared/           # nav.js, quiz.js
    └── data/
        ├── lessons.js        # lesson registry used by modules and navigation
        ├── glossary.js       # glossary terms
        └── quizzes/          # one file per topic (stack-quiz.js)
```

### Naming rules

- All file and folder names are lowercase English with hyphens: `linked-list.html`, `linked-list-view.js`.
- A topic uses the same slug everywhere. Example for `binary-search-tree`:
  - `lessons/binary-search-tree.html`
  - `assets/js/structures/binary-search-tree.js`
  - `assets/js/visuals/binary-search-tree-view.js`
  - `assets/js/pages/binary-search-tree-page.js`
  - `assets/data/quizzes/binary-search-tree-quiz.js`
- JavaScript: `camelCase` for variables and functions, `PascalCase` for classes.
- CSS classes: lowercase with hyphens (`.visual-box`, `.quiz-option`).

## 5. Learning Scope

The full plan covers the topics below. **Not all of them are built yet.** Check the status table before starting work.

| Module | Topics |
|---|---|
| Linear Structures | Array, Linked List, Stack, Queue, Deque |
| Trees | Tree, Binary Tree, Binary Search Tree, Heap, Trie |
| Graphs | Graph, Directed, Undirected, Weighted Graph |
| Specialized | Hash Table, Priority Queue, Disjoint Set Union, Segment Tree |
| Algorithms | Searching, Sorting, Traversal |
| Complexity | Time Complexity, Space Complexity |

### Implementation status

Update this table whenever a lesson is finished.

| Topic | Status |
|---|---|
| Home, Modules page, shared navigation | Done |
| Stack | Done (first lesson, reference for new lessons) |
| Queue | Planned |
| Linked List | Planned |
| Binary Search Tree | Planned |
| Everything else | Not started |

Statuses: `Not started` → `Planned` → `In progress` → `Done`.

**Version 1 goal:** build a few representative topics (Stack, Queue, Linked List, Binary Search Tree) so that they work correctly. Expand only after these are verified. A site with many entries that mostly do not work is a failure.

## 6. Lesson Page Structure

Every lesson page must follow `lessons/_template.html` and contain these sections **in this order**:

1. **Concept Explanation:** What is it? What problem does it solve? What is its core rule (for example LIFO)?
2. **Visual Explanation:** a diagram of how the data is organized.
3. **Step-by-step Animation:** each operation shown one step at a time, with a short text caption for each step.
4. **Interactive Operations:** buttons and inputs so the learner can try operations (Stack: Push, Pop, Peek, IsEmpty).
5. **Real-world Applications:** two to four concrete examples (Stack: undo, browser back button).
6. **Practice & Knowledge Check:** at least 3 quiz questions with feedback after each answer.
7. **Footer navigation:** Previous lesson, Back to Modules, Next lesson.

Each lesson also lists its time and space complexity for the main operations.

## 7. Design Rules

- Priority: visual learning, simplicity, clarity, easy navigation.
- Define all colors, spacing, and font sizes as CSS variables in `base.css`. Do not hard-code colors in other files.
- Layout is centered, with content width up to 960px, and must work on mobile screens.
- Use system fonts, body text 16px, line height 1.6.
- Use color and shape consistently in visuals: the same color for the "active/top" element, another for "highlighted", another for "error".
- Each animation must have Play/Next/Reset controls, or step buttons, so learners can follow at their own pace.
- Text must have enough contrast; interactive elements must be reachable with the keyboard and have visible focus.
- Do not use inline `style` attributes or inline `onclick` handlers.

## 8. Code Rules

- **Separate logic from display.** Files in `structures/` implement the data structure only and never touch the DOM. Files in `visuals/` draw the state. Files in `pages/` connect buttons to both.
- Data structure operations must be **correct** first: check empty and full cases, return clear results, and never silently fail.
- Visuals must match the real behavior. Example: a stack only changes at the top; a queue adds at the rear and removes from the front. Never draw something that breaks the rule of the structure.
- Keep files short and functions small. Add a short comment above each non-obvious function.
- Do not duplicate code between topics. Put shared behavior in `assets/js/shared/`.
- Quiz and glossary content lives in `assets/data/`, not inside HTML.

## 9. Workflow: Adding a New Lesson

When asked to add a topic, follow these steps in order:

1. Read this file and check the status table in section 5.
2. **Explain the plan first** (what files will be created and what the lesson will show) and wait for approval on larger topics.
3. Copy `lessons/_template.html` to `lessons/<slug>.html`.
4. Create `structures/<slug>.js` and check that the operations are correct.
5. Create `visuals/<slug>-view.js` and `pages/<slug>-page.js`.
6. Write the lesson text following section 6.
7. Add quiz data in `assets/data/quizzes/<slug>-quiz.js` (at least 3 questions).
8. Register the lesson in `assets/data/lessons.js`, in learning order. The modules page and Previous/Next links use this registry.
9. Add new terms to `assets/data/glossary.js`.
10. Update the status table in section 5.
11. Run the checklist in section 11.
12. Report which files were created or changed.

## 10. AI Behavior Rules

1. Do not change the project goal or scope without being asked.
2. Do not build the whole website in one step. Work in small parts.
3. Explain what a feature does before implementing it.
4. Prefer readable, maintainable code over clever code.
5. Do not create visuals that contradict how the data structure really works.
6. Test each feature after building it.
7. Do not delete or overwrite existing content before checking what it affects.
8. For a major architecture change, explain the reason and wait for approval.
9. Use simple English in documentation and on the website.
10. Do not copy text from textbooks or other websites. Write original explanations.
11. If a request is unclear or conflicts with this file, ask instead of guessing.
12. Do not add libraries, frameworks, or external links that were not approved.

## 11. Done Checklist

Before saying a task is finished, confirm every item:

- [ ] File names and folders follow section 4.
- [ ] The lesson follows `_template.html` and the section order in section 6.
- [ ] Every operation works, including empty-structure cases (for example pop on an empty stack).
- [ ] The visual matches the real behavior of the structure.
- [ ] The quiz works and shows feedback.
- [ ] The lesson is registered in `lessons.js`, and Previous/Next links work.
- [ ] No broken links, no absolute paths, no console errors.
- [ ] The page is readable on a mobile screen.
- [ ] The status table in this file is updated.
- [ ] A summary of changed files was given to the user.

## 12. Git and Deployment

- Hosting: GitHub Pages, branch `main`, root folder.
- Commit messages are short and in English, for example `Add stack lesson` or `Fix queue animation`.
- Make one commit per finished feature.
- Never commit secrets, API keys, or personal data.
