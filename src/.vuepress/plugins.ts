// @ts-ignore
import { searchProPlugin } from "vuepress-plugin-search-pro";
export default  [
    searchProPlugin({
        // 索引全部内容
        indexContent: true,
        // 为分类和标签添加索引
        customFields: [
            {
                // @ts-ignore
                getter: (page) => page.frontmatter.category,
                formatter: "分类：$content",
            },
            {
                // @ts-ignore
                getter: (page) => page.frontmatter.tag,
                formatter: "标签：$content",
            },
        ],
    }),
]

