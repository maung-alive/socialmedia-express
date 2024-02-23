const photoViewerDIV = (url) => `
    <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:h-[96vh] max-w-[100vw] h-[100vh] bg-black/20 z-50 rounded-md" id="photo-viewer">
        <span class="fixed top-0 left-0 translate-x-4 md:-translate-x-1/2 md:-translate-y-1/2 text-4xl cursor-pointer" onClick="removePhotoViewer()">&times;</span>

        <img src="${url}" alt="" class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto object-contain bg-slate-500">
    </div>
`

const commentFormDIV = (id) => `
    <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[800px] max-w-[96%] max-h-[60vh] bg-slate-100 shadow-xl rounded-xl" id="comment-form-div">
            
        <span class="fixed top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl rounded-full duration-200 hover:ring-1 ring-red-500 z-[100]" onClick="destroyCommenter()">&times;</span>

        <div class="my-4 w-full relative px-2">
        <textarea
            type="text"
            name="comment"
            id="comment"
            placeholder="Write a comment.."
            class="w-full py-3 pl-2 pr-6 rounded-md bg-white "
        >${id}</textarea>

        <span class="absolute top-1/2 right-4 -translate-y-1/2 bg-cyan-700 hover:bg-cyan-800 hover:shadow-lg cursor-pointer text-white px-3 py-2 rounded-full">
            S
        </span>
        </div>

    </div>
`

function appendToBody(element) {
    let htmlBody = document.querySelector("body");
    htmlBody.innerHTML += element;
}

function destroyByID(id) {
    let div = document.querySelector(`#${id}`);
    div.outerHTML = "";
}

function existing(selector) {
    let element = document.querySelector(selector);
    if(element){
        return true
    }

    return false
}

function photoViewer(url) {
    if(existing('#photo-viewer')){
        destroyByID('photo-viewer');
    }
    
    let div = photoViewerDIV(url);
    appendToBody(div);
}

function removePhotoViewer() {
    destroyByID('photo-viewer');
}

function commenter(id) {
    if(existing("#comment-form-div")) {
        destroyByID('comment-form-div');
    }

    let div = commentFormDIV(id);
    appendToBody(div);
}

function destroyCommenter() {
    destroyByID('comment-form-div');
}