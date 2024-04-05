import { prisma } from "../src/lib/prisma"

async function seed() {
  await prisma.event.create({
    data: {
      id: "7ed0aa44-1f4b-4f5a-bf7a-8221ab437ccf",
      title: "NLW",
      slug: "nlw",
      details: "Unite edition",
      maximumAttendees: 120,
    }

  })
}

seed().then(() => {
  console.log("Database seeded")
  prisma.$disconnect()
})