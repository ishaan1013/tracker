const issues = [
  {
    name: "Create campaign",
    description: "The issue description!",
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
    name: "Rewrite codebase",
    description: "The issue description!",
    category: 0,
    index: 1,
    issueType: 0,
    priority: 2,
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
      ],
    },
  },
  {
    name: "Hire a designer",
    description: "The issue description!",
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
    name: "Hit the gym",
    description: "The issue description!",
    category: 1,
    index: 0,
    issueType: 2,
    priority: 2,
    assignees: {},
  },
  {
    name: "Fix design system",
    description: "The issue description!",
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
            name: "You",
          },
          create: {
            name: "You",
          },
        },
      ],
    },
  },
  {
    name: "Start the company",
    description: "The issue description!",
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
