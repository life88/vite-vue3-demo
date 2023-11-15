# Vue 3 + Vite + UnoCSS + element-plus + axios + @tanstack/vue-query

## 项目说明
* node >= 16
* pnpm >= 8.0.0

### 依赖安装
```
pnpm install
```

### 启动开发环境
```
pnpm start
// or
pnpm dev
```

### 打包编译
```
pnpm build
```

### 语法检查及代码格式化
```
pnpm lint
pnpm format
```

### 提交前自动代码检查及格式化
项目依赖安装完成后，会自动创建一个 .husky 目录，里面有一个 pre-commit 文件钩子，如果没有请手动创建，然后将文件内容修改为
```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

pnpm lint-staged

```
它会在每次提交前自动执行代码检查及格式化，如果不想使用，可以删除 .husky 目录。

### 关于 .env 文件的说明
.env 文件为每个环境都会加载的环境变量配置，.env.development 为开发环境配置。如果自己想临时修改一个环境变量又不想提交到 git 上，可以复制一份 .env.development.local 文件，然后只配置自己想修改的环境变量，这样就不会影响到其他人的开发环境配置。
