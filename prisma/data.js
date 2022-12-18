const issues = [
  {
    name: "Cool helmet",
    description: "A nice helmet to wear on your head",
    category: 0,
    index: 0,
    issueType: 2,
    priority: 1,
    assignees: {
      connectOrCreate: [
        {
          where: {
            name: "Head of Marketing",
          },
          create: {
            name: "Head of Marketing",
          },
        },
      ],
    },
  },
  {
    name: "Cool helmet 1",
    description: "A nice helmet to wear on your head",
    category: 0,
    index: 1,
    issueType: 0,
    priority: 2,
    assignees: {
      connectOrCreate: [
        {
          where: {
            name: "The CEO",
          },
          create: {
            name: "The CEO",
          },
        },
        {
          where: {
            name: "Software Engineer",
          },
          create: {
            name: "Software Engineer",
          },
        },
        {
          where: {
            name: "Head of Marketing",
          },
          create: {
            name: "Head of Marketing",
          },
        },
      ],
    },
  },
  {
    name: "Cool helmet 2",
    description: "A nice helmet to wear on your head",
    category: 0,
    index: 2,
    issueType: 1,
    priority: 0,
    assignees: {
      connectOrCreate: [
        {
          where: {
            name: "The CEO",
          },
          create: {
            name: "The CEO",
          },
        },
        {
          where: {
            name: "Software Engineer",
          },
          create: {
            name: "Software Engineer",
          },
        },
        {
          where: {
            name: "Head of Marketing",
          },
          create: {
            name: "Head of Marketing",
          },
        },
      ],
    },
  },
  {
    name: "Cool jacket",
    description: "A nice jacket to wear on your head",
    category: 1,
    index: 0,
    issueType: 2,
    priority: 2,
    assignees: {
      connectOrCreate: [
        {
          where: {
            name: "The CEO",
          },
          create: {
            name: "The CEO",
          },
        },
      ],
    },
  },
  {
    name: "Cool jacket 1",
    description: "A nice jacket to wear on your head",
    category: 1,
    index: 1,
    issueType: 1,
    priority: 0,
    assignees: {
      connectOrCreate: [
        {
          where: {
            name: "Software Engineer",
          },
          create: {
            name: "Software Engineer",
          },
        },
        {
          where: {
            name: "Head of Marketing",
          },
          create: {
            name: "Head of Marketing",
          },
        },
      ],
    },
  },
  {
    name: "Cool shirt",
    description: "A nice shirt to wear on your head",
    category: 2,
    index: 0,
    issueType: 0,
    priority: 1,
    assignees: {
      connectOrCreate: [
        {
          where: {
            name: "The CEO",
          },
          create: {
            name: "The CEO",
          },
        },
        {
          where: {
            name: "Software Engineer",
          },
          create: {
            name: "Software Engineer",
          },
        },
        {
          where: {
            name: "Head of Marketing",
          },
          create: {
            name: "Head of Marketing",
          },
        },
      ],
    },
  },
]

module.exports = {
  issues,
}
