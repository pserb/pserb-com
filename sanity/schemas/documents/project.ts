import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'heading',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subheading",
      title: "Subheading",
      type: "string",
    }),
    defineField({
      name: "blurb",
      title: "Blurb (short, on projects page)",
      type: "text",
    }),
    defineField({
      name: "description",
      title: "Description (long, on standalone page)",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "object",
      fields: [
        { type: "string", name: "src", title: "src" },
        { type: "string", name: "hyperlink", title: "Hyperlink" },
        { type: "string", name: "alt", title: "Alt Text" },
        { type: "string", name: "height", title: "Height in px" },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "cards",
      title: "Cards (show at bottom of page)",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "card",
          fields: [
            { type: "string", name: "title" },
            { type: "string", name: "description" },
            { type: "text", name: "content" },
            {
              type: "array",
              name: "stats",
              of: [
                defineArrayMember({
                  type: "object",
                  name: "stat",
                  fields: [
                    { type: "string", name: "stat" },
                    { type: "string", name: "description" },
                  ],
                }),
              ],
            },
            {
              type: "array",
              name: "buttons",
              of: [
                defineArrayMember({
                  type: "object",
                  name: "button",
                  fields: [
                    { type: "string", name: "text", title: "Text" },
                    { type: "string", name: "link", title: "Link" },
                    {
                      type: "string",
                      name: "variant",
                      title:
                        "Variant (default, destructive, ghost, link, outline, secondary)",
                    },
                  ],
                }),
              ],
            },
          ],
        }),
      ],
    }),
  ],
});

