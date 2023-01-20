# Terminal
## Terminal commands
list files and directories
```
ls
ls -a # with hidden files
ls -lh # with details
ls -R # with subdirectories
```
file content
```
cat file1 # display
cat > file2 # create new
cat >> file2 # append text
cat file1 file2 > file3 # merge
tac file3 # reverse display
```
copy
```
cp file1 file2 destdir # copy files
cp file1 file2 # copy content
cp -R dir destdir # copy directories
```
move / rename
```
mv file1 destdir
mv file1 file2 # rename file
```
create
```
mkdir dir1
touch file1
```
remove
```
rm file1
rm -r # remove directories
rm -f # force remove
```
search in file
```
grep globalregex file1
```
partial file display
```
head file1
head file1 -n 20 # first 20 lines
tail file2
```
difference in files
```
diff file1 file2
```
tar
```
tar -cvf file1.tar dir1
tar -xvf file1.tar # extract
tar -xvzf file1.tar # extract compressed tar
```
running processes
```
top
```
commang history
```
history
```
zip
```
zip archive.zip file1
unzip archive.zip
```
hostname / ip
```
hostname
hostname -i
```
apt-get update # sync
apt-get upgrade # latest version
apt-get check # broken dependencies
```
editor
```
nano file1
```
chaining commands
```
cmd1 && cmd2
```
