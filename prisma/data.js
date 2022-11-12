const categories = [
  {
    name: 'TO-DO',
  },
  {
    name: 'IN PROGRESS',
  },
  {
    name: 'COMPLETE',
  },
]

const issues = [
  {
    name: 'Cool helmet.',
    description: 'A nice helmet to wear on your head !',
    category_id: 1,
  },
  {
    name: 'Cool helmet 2.',
    description: 'A nice helmet to wear on your head',
    category_id: 1,
  },
  {
    name: 'Cool helmet 3.',
    description: 'A nice helmet to wear on your head',
    category_id: 1,
  },
  {
    name: 'Cool jacket.',
    description: 'A nice jacket to wear on your head',
    category_id: 2,
  },
  {
    name: 'Cool jacket 2.',
    description: 'A nice jacket to wear on your head',
    category_id: 2,
  },
  {
    name: 'Cool shirt.',
    description: 'A nice shirt to wear on your head',
    category_id: 3,
  },
]

module.exports = {
  issues,
  categories,
};