/**
 * @author Cloyd Van Secuya
 * 
 * <p>
 * Same as note, but it's when the user archived it, but 
 * never removed it.
 * </p>
 * 
 * <p>
 * endpoint is http://localhost:3001/notes-archive
 * </p>
 */

function NotesArchive(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;                   // The User.username

    function getNoteTitle() { return this.title; }
    function getNoteBody() { return this.body; }
    function getNoteAuthor() { return this.author; }
}

export default NotesArchive;