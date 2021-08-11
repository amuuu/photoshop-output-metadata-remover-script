# Remove photoshop metadata from photo

## 1) Run the script on photoshop

0) Modify `script.js` for the target directories.
1) Open photoshop cc 2019, go to `File > Scripts > Browse...`
2) Use `script.js` here.

## 2) (optional) Give the modified files the same name as the initial files
Because photoshop api that scripts use doesn't have the ability to use spaces instead of hyphen when they export for web, you can use this code to rename the names that use hyphen to the original source name. Do these:

0) Modify `.env` for the target directories
1) Open terminal in repo's directory
2) Do this:
```
$ python rename.py
```
3) The files with proper names will be at the target directories, inside the `Final` folder.