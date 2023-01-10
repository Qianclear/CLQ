
npm run build

# 进入生成的文件夹
cd .vuepress/dist
​
# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME
​
git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
​
# 如果发布到 https://<USERNAME>.github.io/<REPO>
​git push -f git@github.com:Qianclear/CLQ.git master:gh-pages
#
#cd ..
#​
#echo -e "\n=========将所有源码更改提交至暂存区=========\n"
#git add .
#echo -e "\n=========所有更改提交至暂存区完毕！=========\n"
#​
#echo -e "\n========将暂存区源码添加到本地仓库中=========\n"
#git commit -m 'vnotes-src'
#echo -e "\n========暂存区内容添加到本地仓库完毕！=========\n"
#​
#echo -e "\n=========开始强制推送博客源码=========\n"
#git push -f origin master
#echo -e "\n=========博客源码推送完毕！=========\n"