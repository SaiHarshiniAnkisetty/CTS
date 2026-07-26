# Git Hands-On Lab 2 – Git Ignore

## Objective

- Understand the purpose of `.gitignore`
- Ignore unwanted files and folders
- Verify ignored files using Git

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

### Create a Log File

```bash
echo "This is a log file" > sample.log
```

### Create a Log Folder

```bash
mkdir log
```

### Create .gitignore

```bash
notepad .gitignore
```

### Contents of `.gitignore`

```text
*.log
log/
```

### Verify Ignored Files

```bash
git status
```

### Add .gitignore

```bash
git add .gitignore
```

### Commit Changes

```bash
git commit -m "Added .gitignore file"
```

### Push to GitHub

```bash
git push
```

---

## Output

- Created `.gitignore`.
- Ignored all `.log` files.
- Ignored the `log` folder.
- Successfully committed and pushed the changes to GitHub.
