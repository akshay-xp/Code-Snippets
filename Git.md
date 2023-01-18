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
git config --global -e # open config file
git config --global core.autocrlf true/input # windows/unix
```

staging
```
git add file1 file2
git add *.txt
git add .
git add all
git add -A
```

list
```
git ls-files # staged
git ls-tree HEAD~3 # change files of a commit
```

commit
 ```
 git commit -m "message"
 git commit # opens editor
 git commit -ma "commit and stage"
 ```
 
 status
 ```
 git status
 git status -s
 ```
 
 logs
 ```
 git log
 git log --oneline
 ```
 
 restore to previous environment
 ```
 git restore
 git restore --source=HEAD~1 file1
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
 
 show changes
 ```
 git show HEAD~1 # 2nd from last
 git show HEAD~3:file # changes in file
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
 
 help
 ```
 git --help
 git -h # short
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
