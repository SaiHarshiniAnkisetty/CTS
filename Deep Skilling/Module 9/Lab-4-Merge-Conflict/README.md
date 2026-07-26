# Git Hands-On Lab 4 – Merge Conflict Resolution

## Objective

- Create a merge conflict.
- Resolve the conflict manually.
- Commit the resolved changes.
- Update the `.gitignore` file.
- Delete the merged branch.

---

## Software Used

- Git Bash
- GitHub
- Windows
- Notepad

---

## Commands Used

```bash
git status
git branch GitWork
git checkout GitWork

notepad hello.xml

git add hello.xml
git commit -m "Added hello.xml in GitWork"

git checkout main

notepad hello.xml

git add hello.xml
git commit -m "Added hello.xml in main"

git log --oneline --graph --decorate --all

git merge GitWork

git add hello.xml
git commit -m "Resolved merge conflict"

notepad .gitignore

git add .gitignore
git commit -m "Updated .gitignore"

git branch
git branch -d GitWork

git log --oneline --graph --decorate

git push
```

---

## Outcome

- Successfully created a merge conflict.
- Resolved the conflict manually.
- Updated `.gitignore`.
- Deleted the merged branch.
- Pushed the final changes to GitHub.
