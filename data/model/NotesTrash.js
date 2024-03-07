/**
 * @author Cloyd Van Secuya
 * 
 * <p>
 * Same as note, but it's when the user has removed from their Notes page, 
 * but never permanently deleted it. 
 * </p>
 * 
 * <p>
 * endpoint is http://localhost:3001/notes-trash
 * </p>
 */

function NotesTrash(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;                   // The User.username

    function getNoteTitle() { return this.title; }
    function getNoteBody() { return this.body; }
    function getNoteAuthor() { return this.author; }
}

export default NotesTrash;