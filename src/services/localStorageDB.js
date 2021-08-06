// Notes

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


const addNote = (inputContent, category, deadline) => {
    console.log(inputContent, 'content')

    const DBFormatNote = DBcreateNote(inputContent, category, deadline)

    return DBFormatNote
}

const DBcompleteNote = (id) => {
    const notes = getNotes()
    const newNotes = notes.map(note => note.id === id ? { ...note, completed: true, completeDate: new Date().toLocaleString('en-US') } : note)
    console.log(newNotes, 'new notes')
    window.localStorage.setItem('notes', JSON.stringify(newNotes))
    return newNotes
}

const DBdeleteNote = (id) => {
    const notes = getNotes()
    console.log(notes, 'got notes')
    const newNotes = notes.filter(note => note.id !== id)
    console.log(newNotes, 'newnotes')
    window.localStorage.setItem('notes', JSON.stringify(newNotes))
}

const DBcreateNote = (inputContent, category, deadline) => {
    const DBNote = {
        id: makeId(),
        content: inputContent,
        category: category,
        createDate: new Date().toLocaleString('en-GB'),
        completeDate: null,
        deadline: formatDeadline(deadline),
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


// Categories

const DBgetCategories = () => {
    const notes = getNotes()

    const categoriesArray = notes.reduce((categoryArray, note) => {
        if (categoryArray.includes(note.category)) {
            return categoryArray
        }
        return categoryArray.concat(note.category)
    })

    console.log(categoriesArray, 'arraycategories')

    return categoriesArray
}









// helper functions

const makeId = () => {
    return Math.floor(Math.random() * 1000000)
}

const formatDeadline = (deadline) => {
    if (!deadline) {
        return null
    }
    const splitted = deadline.split('-')

    if (splitted[2].length === 2) {
        splitted[0] = '20' + splitted[2]
    } else if (splitted[2].length === 3 || splitted[2].length === 1) {
        return null
    }

    const formattedDeadline = new Date(splitted[0], splitted[1], splitted[2]).toLocaleString('en-GB')

    return formattedDeadline
}

export default {
    addNote,
    getNotes,
    DBdeleteNote,
    DBcompleteNote,
    DBgetCategories
}