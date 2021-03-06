document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    document.querySelector(".preloader").classList.remove("hide");
    const file = e.target.querySelector("input");
    const formData = new FormData();
    formData.append("upfile", file.files[0]);
    axios.post("/api/fileanalyse", formData, {
        headers: {"Content-Type" : "multipart/form-data"}     
    }).then(res => {
        window.location.href = res.data.redirect;
    }).catch(err => {
        console.log(err);
    })
    
});
