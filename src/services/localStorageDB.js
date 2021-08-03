const DBcreateNote = (inputContent) => {
    const DBNote = {
        id: makeId(),
        content: inputContent,
        createDate: new Date(),
        targetDate: null,
        completed: false
    }

    console.log(DBNote, 'DBnote')

    DBaddNote(DBNote)

    return DBNote
}

const DBaddNote = (DBnote) => {
    const notes = getNotes()
    console.log(notes, 'db notes')

    const newArray = notes.concat(DBnote)
    console.log(newArray, 'new array')

    window.localStorage.setItem('notes', JSON.stringify(newArray))

    return newArray
}

const getNotes = () => {
    const jsonNotes = window.localStorage.getItem('notes')
    console.log(jsonNotes, 'jsonNtes')
    let notes
    if (!jsonNotes) {
        notes = []
    } else {
        notes = JSON.parse(jsonNotes)
    }

    return notes
}

const addNote = (inputContent) => {
    console.log(inputContent, 'content')

    const DBFormatNote = DBcreateNote(inputContent)

    return DBFormatNote
}

const makeId = () => {
    return Math.floor(Math.random() * 1000000)
}

export default {
    addNote,
    getNotes
}