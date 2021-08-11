// THIS WORKS FOR CC 2019. IT'S NOT BEEN TESTED IN CC 2020 YET.  

var RES_SHRINK_FACTOR = 10
var RES = 72/RES_SHRINK_FACTOR
var QUALITY = 1
var OUTPUT_FORMAT = "png"

var SOURCES_PATH = "C:\\Users\\Amirreza\\Desktop\\psscript\\Assets" 
var RESULTS_PATH = "C:\\Users\\Amirreza\\Desktop\\psscript\\Results\\"
var FINAL_OUTPUT_PATH = "C:\\Users\\Amirreza\\Desktop\\psscript\\Final\\"

sources = Folder(SOURCES_PATH)
results = Folder(RESULTS_PATH)
final_output = Folder(FINAL_OUTPUT_PATH)

var filesList = sources.getFiles()
for (var i = 0; i < filesList.length; i++)
{
    if (filesList[i] instanceof File)
    {
        process(filesList[i])
    }
}

function process(file)
{
    var doc = open(file)
    // app.activeDocument.selection.selectAll()
    // app.activeDocument.selection.copy()

    // make a new document
    // var output_name = "MODIFIED"
    // var new_doc = app.documents.add(doc.width * RES_SHRINK_FACTOR, doc.height * RES_SHRINK_FACTOR, RES, output_name, NewDocumentMode.RGB)
    // app.activeDocument.artLayers.getByName("Background").allLocked = false
    // app.activeDocument.artLayers.add()
    // app.activeDocument.paste()
    // app.activeDocument.artLayers.getByName("Background").remove()

    save(OUTPUT_FORMAT)

    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES)
}


function save(type)
{
    var jpegOptions = new JPEGSaveOptions()
    jpegOptions.quality = QUALITY
    var pngOptions = new PNGSaveOptions()
    pngOptions.compression = 9
    pngOptions.interlaced = true
    var saveOptions = ""
    if(type == "jpeg")
        saveOptions = jpegOptions
    if(type == "png")
        saveOptions = pngOptions


    // this is ok but doesn't reduce size because it contains photoshop metadata
    // app.activeDocument.saveAs(new File("C:\\Users\\Amirreza\\Desktop\\" + output_name + ".jpg"), saveOptions)

    var saveForWebOptions = new ExportOptionsSaveForWeb()
    saveForWebOptions.format = SaveDocumentType.PNG
    saveForWebOptions.PNG8 = false
    app.activeDocument.exportDocument(results, ExportType.SAVEFORWEB, saveForWebOptions)

}