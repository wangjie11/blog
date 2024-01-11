### github action部署react+vite工程流程 

1. 在仓库根目录下创建文件夹.github/workflows
2. 在workflows文件夹中创建名为xxx.yml文件，文件名可以随意，但扩展名必须为yml或者ymal
3. 将整个仓库提交到github

### yml文件示例(publish.yml)
```yml
name: Github Action testing #为此workflow命名
on:
  push:
    branches:
      - main
# 触发时机: 当main分支发生push事件
jobs:
  deploy-to-gh-pages: #此工作命名空间
    runs-on: ubuntu-latest #希望运行的操作系统
    steps:
      - name: Checkout
        uses: actions/checkout@v4 #此action将代码检出

      - name: set node
        uses: actions/setup-node@v4 #此action设置node版本
        with:
          node-version: '18.x'

      - name: Install and Build #运行打包命令
        run: |
          npm ci
          npm run build

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4 #此action用来部署一个站点
        with:
          token: ${{ secrets.ACCESS_TOKEN }} #配置github token，最新版本可忽略此配置，除非你想使用其他token，secrets.ACCESS_TOKEN需要在仓库的setting中配置
          branch: gh-pages #JamesIves会创建一个打包后的分支，使用此分支来进行部署，值为分支名称
          folder: dist #项目打包后的目录，一般在项目中配置，要在此对应

```

### 注意事项
yml文件对于缩进比较敏感，书写时需应注意行缩进，建议使用github yml编辑器
