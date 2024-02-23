function appendToBody(element) {
    let htmlBody = document.querySelector("body");
    htmlBody.innerHTML += element;
}

function destroyByID(id) {
    let div = document.getElementById(id);
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
    let div = document.querySelector("#photo-viewer");
    div.className = div.className.replace("hidden", "");
    let img = document.querySelector("#photo-viewer-img");
    img.src = url;
}

function removePhotoViewer() {
    let div = document.querySelector("#photo-viewer");
    div.className += " hidden";
    let img = document.querySelector("#photo-viewer-img");
    img.src = "";
}

function commenter(id) {
    let div = document.querySelector("#comment-form-div");
    div.className = div.className.replace("hidden", "");
    let form = document.querySelector("#comment-form");
    form.setAttribute("action", `/w/${id}/comment`);
}

function destroyCommenter() {
    let div = document.querySelector("#comment-form-div");
    div.className += " hidden";
    let form = document.querySelector("#comment-form");
    form.reset();
}

const previewImageDIV = (filename) =>  `
    <div id="${filename}" class="relative">
        <img
            id="${filename}-img"
            alt="${filename}"
            onClick="photoViewer(this.src)"
            class="min-w-[80px] h-[80px] bg-gray-300 object-cover rounded-xl text-6xl text-center text-gray-400 cursor-pointer hover:scale-95 active:scale-95 duration-200"
        />
        <div class="cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-red-600 px-2 rounded-full">
            <span class="text-red-600 font-bold text-2xl" onclick="destroyByID('${filename}')">&times;</span>
        </div>
    </div>
`

function previewFile(input) {   // image previewer
    let previewSlider = document.querySelector("#preview-slider");  // get parent div
    let files = input.files;    // get input data
    let i = 0;  // set i for looping

    while(files.length > 0){    // do this untill there are no files left
        let file = files[i];    // get i^th item from files
        let reader  = new FileReader();

        var element = previewImageDIV(file.name)
        previewSlider.innerHTML += element;
        element = document.getElementById(file.name + '-img')
        
        reader.onloadend = function () {
            element.src = reader.result;
        }
        
        if (file) { reader.readAsDataURL(file); }
        else { element.src = "" }

        i++; // add i to continue looping
    }
}