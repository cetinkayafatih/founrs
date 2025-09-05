// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true
    },
    description: {
      type: "string",
      description: "The description of the post",
      required: true
    },
    image: {
      type: "string",
      description: "The cover image of the post",
      required: false
    },
    author: {
      type: "string",
      description: "The author of the post",
      required: true
    },
    tags: {
      type: "list",
      of: { type: "string" },
      description: "Tags for the post",
      required: false
    },
    locale: {
      type: "string",
      description: "The locale of the post",
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath.replace("blog/", "")}`
    },
    slug: {
      type: "string",
      resolve: (post) => post._raw.flattenedPath.replace("blog/", "")
    }
  }
}));
var CaseStudy = defineDocumentType(() => ({
  name: "CaseStudy",
  filePathPattern: `case-studies/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the case study",
      required: true
    },
    date: {
      type: "date",
      description: "The date of the case study",
      required: true
    },
    description: {
      type: "string",
      description: "The description of the case study",
      required: true
    },
    image: {
      type: "string",
      description: "The cover image of the case study",
      required: false
    },
    client: {
      type: "string",
      description: "The client name",
      required: true
    },
    industry: {
      type: "string",
      description: "The industry of the client",
      required: true
    },
    challenge: {
      type: "string",
      description: "The main challenge",
      required: true
    },
    solution: {
      type: "string",
      description: "The solution provided",
      required: true
    },
    results: {
      type: "list",
      of: { type: "string" },
      description: "The results achieved",
      required: true
    },
    locale: {
      type: "string",
      description: "The locale of the case study",
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (caseStudy) => `/case-studies/${caseStudy._raw.flattenedPath.replace("case-studies/", "")}`
    },
    slug: {
      type: "string",
      resolve: (caseStudy) => caseStudy._raw.flattenedPath.replace("case-studies/", "")
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./content",
  documentTypes: [Post, CaseStudy],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: []
  }
});
export {
  CaseStudy,
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-AFRM3RUK.mjs.map
