# gulp2023_july
- встановити, якшо не встановленно:
node.js: https://nodejs.org/en  (LTS) ю на момент збірки v18.16.1 LTS
gulp:    https://gulpjs.com/
npm:     https://www.npmjs.com/  -менеджер пакетів під nodejs
git:     https://git-scm.com/


tutorial:
                                    краще використовувати git bush  (Git Bash Here)? якщо linux\mac $sudo npm i gulp-cli -g
$ node -v                         - яка версія ноди
$ npm init
$ npm i gulp-cli -g                 якщо вперше на цю систему- це глобально, якщо якісь варнінги то поф)) 
$ npm rm --global gulp              це щоб видалити галп з усієї системи, робиться один раз на чисту систему

$npm i gulp -D                      встановити у збірку --save-dev равно -D   встановилося локально -наш package.json змінено -"devDependencies" -розділ з залежностями

$ touch gulpfile.js                 створюємо файл gulpfile.js
$ rm galpfile.js                    якщо бажаємо видалити файл
 
$mkdir app                          створюємо папку app                - тут буде чорновий варіант
$rmdir app                          якщо бажаємо видалити папку app

$mkdir dist                         створюємо папку dist  - тут буде основний варіант, який для хоста чи замовника

$touch .gitignore                   створюємо щоб не слідкувало за деякими файлами /node_modules, package-lock.json - бо не треба 
$ rm --cached package-lock.json     видалити вже з коміту файл, якщо випадково закомітили









файл package-lock.json можно видаляти, якщо що



