export const deskStructure = (S, context) =>
  S.list()
    .title('Studio')
    .items([
      ...S.documentTypeListItems().filter((listItem) => !['media.tag'].includes(listItem.getId())),
    ])
