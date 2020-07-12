const fs = require("fs")
const chalk = require("chalk")

const addNote = (title, body) => {
  const notes = loadNotes()

  const duplicateNote = notes.find(note => note.title === title)

  if (duplicateNote) {
    console.log(chalk.red.inverse("Title already taken!"))
  } else {
    const note = {
      title,
      body
    }
    notes.push(note)
    saveNotes(notes)
    console.log(chalk.green.inverse("New Note added!"))
  }
}

const removeNote = title => {
  const notes = loadNotes()
  notesToKeep = notes.filter(note => note.title !== title)

  if (notesToKeep.length === notes.length) {
    console.log(chalk.red.inverse("No note found!"))
  } else {
    saveNotes(notesToKeep)
    console.log(chalk.green.inverse("Note removed!"))
  }
}

const listNotes = () => {
  const notes = loadNotes()

  if (notes.length !== 0) {
    console.log(chalk.inverse("Your notes"))
    notes.forEach(note => console.log(chalk.blue(note.title)))
  } else {
    console.log(chalk.red.inverse("No notes found!"))
  }
}

const readNote = title => {
  const notes = loadNotes()

  const note = notes.find(note => note.title === title)

  if (note) {
    console.log(chalk.inverse(note.title))
    console.log(note.body)
  } else {
    console.log(chalk.red.inverse("Note not found!"))
  }
}
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json")
    const dataJSON = dataBuffer.toString()
    const notes = JSON.parse(dataJSON)
    return notes
  } catch {
    return []
  }
}

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync("notes.json", dataJSON)
}

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote
}
