const yargs = require("yargs")
const { addNote, removeNote, listNotes, readNote } = require("./notes")

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      type: "string",
      demandOption: true
    },
    body: {
      describe: "Note body",
      type: "string",
      demandOption: true
    }
  },
  handler(argv) {
    addNote(argv.title, argv.body)
  }
})

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      type: "string",
      demandOption: true
    }
  },
  handler(argv) {
    removeNote(argv.title)
  }
})

yargs.command({
  command: "list",
  describe: "List all the notes",
  handler() {
    listNotes()
  }
})

yargs.command({
  command: "read",
  describe: "Read a note",
  handler(argv) {
    readNote(argv.title)
  }
})

yargs.parse()
