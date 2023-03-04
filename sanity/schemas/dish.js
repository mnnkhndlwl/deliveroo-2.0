import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'dish',
    title: 'Dish',
    type: 'document',
  fields: [
    defineField({
        name: 'name',
        title: 'Name of the dish',
        type: 'string',
        validation: Rule =>Rule.required(),
    }),
    defineField({
        name: 'description',
        title: 'Short Description',
        type: 'string',
        validation: (Rule)=> Rule.max(200),
    }),
    defineField({
        name:'price',
        title: 'Price of the dish',
        type:'number',
    }),
    defineField({
        name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
