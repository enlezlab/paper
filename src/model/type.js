const Document = (props) => {

  return {
    uuid: props.uuid,
    slug: props.slug,
    date: props.date,
    categoryID: props.categoryID,
    tags: props.tags,
    title: props.title,
    content: props.content,
    wordCount: props.wordCount,
    readTime: props.readTime,
  }
};

export default {
  Document
};

