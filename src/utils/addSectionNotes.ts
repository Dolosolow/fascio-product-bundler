import lang from "src/lang/en.lang";

export const addSectionNotes = (formValues: Builder.Grup.BuilderMap): Builder.Grup.BuilderMap => {
  const updatedContentSections = formValues.content.sections.map((section) => {
    let notes = [];

    if (section.required) {
      notes.push(`${lang.section_notes.required}: <strong>Required<strong>`);
    }

    if (section.minSelect > 1) {
      notes.push(`${lang.section_notes}: <strong>Min. ${section.minSelect}</strong>`);
    }

    if (section.maxSelect) {
      notes.push(`Can only select up to ${section.maxSelect} item`);
    }

    return { ...section, specialNotes: notes };
  });

  return { ...formValues, content: { sections: updatedContentSections } };
};
