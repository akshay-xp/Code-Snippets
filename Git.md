# Git
## Git commands
initialize git
```
git init
```

config
```
git config user.name username
git config -g user.email email
```

staging
```
git add .
git add all
git add -A
```

commit
 ```
 git commit -m "message"
 git commit -ma "commit and stage"
 ```
 
 status
 ```
 git status
 ```
 
 logs
 ```
 git log
 git log --oneline
 ```
 
 restore to previous environment
 ```
 git restore
 ```
 
 clear git cache
 ```
 git rm -r --cached
 ```
 
 remove files
 ```
 git rm filename
 ```
 
 rename file
 ```
 git mv oldFilename newFilename
 ```
 
 compare to commit
 ```
 git diff
 git diff hashCode
 ```
 
 change a commit
 ```
 git --amend
 ```
 
 undo commit/stage (not files)
 ```
 git reset
 ```
 
 reset to a commit (change files)
 ```
 git reset --hard
 ```
 
 current branch
 ```
 git branch
 ```
 
 change branch
 ```
 git switch -c branchName
 git checkout -b bhranchName
 ```
 
 merge other branch to current branch
 ```
 git merge branchName
 ```
 
 delete branch
 ```
 git branch -d branchName
 ```
 
 temporarilty store changes
 ```
 git stash
 git stash apply
 git stash pop
 ```
 
 clean all changes
 ```
 git clean -n # dry run
 git clean -d # include directories
 git clead -f # force run
 ```
 
 add a remote repository
 ```
 git remote add url
 ```
 
 save local changes to repository
 ```
 git push origin branchname
 git push --all # all branches
 ```
 
 syncing github
 ```
 git clone url
 git fetch
 git pull
 ```
 
 ## Git Notes
 git environments
 1. working
 2. stage
 3. commit
 
 file states
 1. untracked
 2. tracked
     - unmodified
     - modified
     - staged
 
 git states
 1. feature / fix branch
 2. make changes
 3. merge branch
 4. delete old branch
