const Document = (props) => {

  return {
    uuid: props.uuid,
    slug: props.slug,
    date: props.date,
    categoryID: props.cateigoryID,
    authorID: props.authorID,
    tags: props.tags,
    title: props.title,
    content: props.content,
  }
};

export default {
  Document
};

