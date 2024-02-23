const photoViewerDIV = (url) => `
    <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:h-[96vh] max-w-[100vw] h-[100vh] bg-black/20 z-50 rounded-md" id="photo-viewer">
        <span class="fixed top-0 left-0 translate-x-4 md:-translate-x-1/2 md:-translate-y-1/2 text-4xl cursor-pointer" onClick="removePhotoViewer()">&times;</span>

        <img src="${url}" alt="" class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto object-contain bg-slate-500">
    </div>
`

function photoViewer(url) {
    let htmlBody = document.querySelector("body");
    let div = photoViewerDIV(url);

    htmlBody.innerHTML += div;
}

function removePhotoViewer() {
    let div = document.querySelector('#photo-viewer');
    div.outerHTML = "";
}