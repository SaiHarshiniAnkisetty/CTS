# Git Hands-On Lab 1

## Objective

- Install Git
- Configure Git
- Create a Local Repository
- Track Files
- Commit Changes
- Connect Local Repository with GitHub
- Push Repository to GitHub

---

## Software Used

- Git 2.53.0
- Git Bash
- GitHub
- Notepad

---

## Commands Used

### Check Git Version

```bash
git --version
```

### Configure Username

```bash
git config --global user.name "Harshini Ankisetty"
```

### Configure Email

```bash
git config --global user.email "harshiniankisetty@gmail.com"
```

### Verify Configuration

```bash
git config --global --list
```

### Configure Notepad++

```bash
git config --global core.editor "'C:/Program Files/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"
```

### Create Repository

```bash
mkdir GitHOL
cd GitHOL
```

### Initialize Repository

```bash
git init
```

### Check Repository Status

```bash
git status
```

### Create File

```text
welcome.txt
```

### Add File

```bash
git add welcome.txt
```

### Commit Changes

```bash
git commit -m "Initial commit"
```

### View Commit History

```bash
git log
```

### Rename Branch

```bash
git branch -M main
```

### Add Remote Repository

```bash
git remote add origin https://github.com/SaiHarshiniAnkisetty/GitHOL.git
```

### Push to GitHub

```bash
git push -u origin main
```

---

## Output

- Git installed successfully.
- Local repository created.
- File tracked successfully.
- Commit created successfully.
- Repository pushed to GitHub successfully.

