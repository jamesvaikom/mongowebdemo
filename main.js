const fetchNotes = async () => {
    const response = await axios({
        url: "http://127.0.0.1:4300",
        method: "GET"
    });

    const notesList=response.data;
    const noteListTag=document.getElementById("view-notes-list");
    for (let i=0;i<notesList.length;i++){
        
        const tag = `
            <li class="view-notes-block">
                <div>${notesList[i].notes}</div>
                <div class="view-notes-author">${notesList[i].author}</div>
            </li>    
        `;
        noteListTag.innerHTML += tag;
    }
};
fetchNotes();
