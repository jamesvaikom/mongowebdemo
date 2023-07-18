const createNotes = async () => {
    const notesText = document.getElementById("note-text").value;
    const authorText = document.getElementById("author-text").value;
    console.log(notesText);
    console.log(authorText);

    const response = await axios({
        URL: "http://127.0.0.1:5500",
        method: "POST",
        data: {
            notes: notesText,
            author: authorText
        },

    });
    if (response.data===true){
        alert("Note successfully saved!");
    }
    else{
        alert("Something wrong happened");
    }  
};
