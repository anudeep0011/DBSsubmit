export const allPostsQuery = `
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage,
    "categories": categories[]->{title},
    "author": author->{name, image}
  }
`;

export const postBySlugQuery = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    body,
    publishedAt,
    mainImage,
    "categories": categories[]->{title},
    "author": author->{name, image, bio},
    "related": *[_type == "blogPost" && slug.current != $slug][0...3] {
      title,
      slug,
      excerpt,
      publishedAt,
      mainImage
    }
  }
`;

export const allFaqsQuery = `
  *[_type == "faqItem"] | order(order asc) {
    _id,
    question,
    answer,
    category,
    order
  }
`;

export const pricingQuery = `
  *[_type == "pricingTier"] | order(order asc) {
    _id,
    checkType,
    displayName,
    description,
    price,
    volumeTiers,
    features,
    turnaround,
    popular
  }
`;

export const aboutQuery = `
  *[_type == "aboutContent"][0] {
    headline,
    story,
    mission,
    values
  }
`;
