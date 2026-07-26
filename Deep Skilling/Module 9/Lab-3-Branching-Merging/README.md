# Git Hands-On Lab 3 – Branching and Merging

## Objective

- Create a new branch.
- Switch between branches.
- Add changes in a branch.
- Merge the branch into the main branch.
- Delete the merged branch.

---

## Software Used

- Git Bash
- GitHub
- Windows
- Notepad

---

## Commands Used

### Navigate to Repository

```bash
cd ~/OneDrive/Desktop/GitHOL
```

### Check Repository Status

```bash
git status
```

### Create a New Branch

```bash
git branch GitNewBranch
```

### List All Branches

```bash
git branch -a
```

### Switch to New Branch

```bash
git checkout GitNewBranch
```

### Create a File

```bash
notepad branch.txt
```

### Check Status

```bash
git status
```

### Add File

```bash
git add branch.txt
```

### Commit Changes

```bash
git commit -m "Added branch.txt in GitNewBranch"
```

### Switch to Main Branch

```bash
git checkout main
```

### Compare Branches

```bash
git diff main GitNewBranch
```

### Merge Branch

```bash
git merge GitNewBranch
```

### View Commit Graph

```bash
git log --oneline --graph --decorate
```

### Delete Branch

```bash
git branch -d GitNewBranch
```

### Push Changes

```bash
git push
```

---

## Output

- Created a new branch.
- Added a new file in the branch.
- Committed changes successfully.
- Merged the branch into the main branch.
- Deleted the branch after merging.
- Successfully pushed the merged changes to GitHub.
