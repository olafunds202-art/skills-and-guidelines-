# Push to GitHub

The repo is prepared locally and committed on `main`.

## Remote

```bash
git remote -v
```

Expected remote:

```bash
origin  https://github.com/olafunds202-art/skills-and-guidelines-.git (fetch)
origin  https://github.com/olafunds202-art/skills-and-guidelines-.git (push)
```

## Push

If your machine is already authenticated with GitHub:

```bash
git push -u origin main
```

## If authentication fails

### Option 1: GitHub CLI
```bash
gh auth login
git push -u origin main
```

### Option 2: Personal Access Token over HTTPS
Use your GitHub username and a PAT when prompted:

```bash
git push -u origin main
```

### Option 3: SSH remote
```bash
git remote set-url origin git@github.com:olafunds202-art/skills-and-guidelines-.git
git push -u origin main
```

## Current local commit

```bash
git log --oneline -1
```

Expected message:

```bash
feat: initial arena-compatible skills and guidelines pack
```
