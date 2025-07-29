# Git Commands Guide for Portfolio Project

## Setting Up Git Repository

### Initialize a Git Repository
```bash
git init
```
This command initializes a new Git repository in your current directory.

### Add Remote Repository
```bash
git remote add origin https://github.com/YOUR_USERNAME/Sampada_Portfolio.git
```
Replace `YOUR_USERNAME` with your actual GitHub username.

### Check Remote Repository
```bash
git remote -v
```
This command shows the remote repositories configured for your project.

## Basic Git Workflow

### Check Status
```bash
git status
```
Shows the status of files in your working directory and staging area.

### Add Files to Staging Area
```bash
# Add specific files
git add file1.js file2.css

# Add all files
git add .
```

### Commit Changes
```bash
git commit -m "Your commit message here"
```
Commits the staged changes with a descriptive message.

## Git Push Commands

### Push to Remote Repository
```bash
# Push to the default branch
git push origin main

# Push to a specific branch
git push origin branch-name

# Push and set upstream (first time push)
git push -u origin main
```

### Force Push (Use with Caution)
```bash
git push --force origin branch-name
```
Overwrites the remote branch with your local branch. Use with extreme caution as it can overwrite others' work.

### Push All Branches
```bash
git push --all origin
```
Pushes all local branches to the remote repository.

## Branch Management

### List Branches
```bash
# List local branches
git branch

# List remote branches
git branch -r

# List all branches (local and remote)
git branch -a
```

### Create and Switch to a New Branch
```bash
git checkout -b new-branch-name
```

### Switch Between Branches
```bash
git checkout branch-name
```

### Merge Branches
```bash
# First switch to the target branch
git checkout main

# Then merge the source branch
git merge source-branch
```

## Troubleshooting Push Issues

### Repository Not Found (404 Error)
1. Check if the repository exists on GitHub
2. Verify your GitHub credentials
3. Ensure the remote URL is correct:
   ```bash
   git remote set-url origin https://github.com/YOUR_USERNAME/Sampada_Portfolio.git
   ```

### Permission Denied
1. Check if you have the correct permissions for the repository
2. Verify your GitHub authentication
3. Consider using a personal access token or SSH key

### Rejected Push (Non-Fast-Forward)
```bash
# Pull the latest changes first
git pull origin branch-name

# Then try pushing again
git push origin branch-name
```

## GitHub Pages Deployment

### Push to GitHub Pages Branch
```bash
# Create and switch to gh-pages branch
git checkout -b gh-pages

# Push to gh-pages branch
git push origin gh-pages
```

## Best Practices

1. Always pull before pushing to avoid conflicts
2. Write clear, descriptive commit messages
3. Create feature branches for new features
4. Regularly push your changes to avoid data loss
5. Use `.gitignore` to exclude unnecessary files

## For This Portfolio Project

1. Create a new repository on GitHub named "Sampada_Portfolio"
2. Add the remote repository:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/Sampada_Portfolio.git
   ```
3. Push your changes:
   ```bash
   git push -u origin main
   ```
   or if you're using the gh-pages branch:
   ```bash
   git push -u origin gh-pages
   ```

Remember to replace `YOUR_USERNAME` with your actual GitHub username in all commands.